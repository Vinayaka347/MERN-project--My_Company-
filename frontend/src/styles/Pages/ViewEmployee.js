import React, { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import axios from "axios";
import ViewRow from "./ViewRow";
import "../styles/ViewEmployee.css";
function ViewEmployee() {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((res) => {
        // console.log(res);
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const TableData = () => {
    return employees.map((employee) => {
      return <ViewRow obj={employee} />;
    });
  };
  return (
    <Layout>
      <div className="viewDiv">
        <table className="table">
          <thead>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Contact</th>
            <th>Action</th>
          </thead>
          <tbody>{TableData()}</tbody>
        </table>
      </div>
    </Layout>
  );
}

export default ViewEmployee;
