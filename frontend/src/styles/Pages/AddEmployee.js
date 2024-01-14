import React, { useState } from "react";
import Layout from "../Components/Layout";
import "../styles/AddEmployee.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../images/form-img.jpg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AddEmployee() {
  const [EmpId, setEmpId] = useState();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contact, setContact] = useState();
  const [Email, setEmail] = useState("");

  const handleSubmit = (event) => {
    const obj = { EmpId, FirstName, LastName, Contact, Email };
    const url = "http://localhost:8080/employees/add-employee";
    axios
      .post(url, obj)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          alert("Employee added successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <div className="addemployee">
        <h1>Add Employee Form</h1>
        <Container className="grid-container">
          <Row className="grid-row">
            <Col>
              <img src={image1} alt="" />
            </Col>
            <Col>
              <form onSubmit={handleSubmit}>
                <label for="EmpID">Employee ID</label>
                <input
                  id="EmpID"
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setEmpId(e.target.value);
                  }}
                />
                <label for="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <label for="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <label for="contact">Contact</label>
                <input
                  id="contact"
                  type="number"
                  class="form-control"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input type="submit" id="sub-btn" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default AddEmployee;
