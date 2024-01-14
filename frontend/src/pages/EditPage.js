import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout';
import "../styles/AddEmployee.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';


function EditPage() {
  const [EmpID, setEmpID] = useState();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Contact, setContact] = useState();
  const [Email, setEmail] = useState("");
  
  let obj = useParams();  //object origal data
  useEffect(() => {
    let url = "http://localhost:8080/employees/updateEmployee/";
    let id = obj.id;
    axios.get(url + id).then((res) => {
        setEmpID(res.data.EmpID);
        setFirstName(res.data.FirstName);
        setLastName(res.data.LastName);
        setContact(res.data.Contact);
        setEmail(res.data.Email);
    });
  },[obj.id]);

  const handleSubmit = () => {
    let obj2 = { EmpID, FirstName, LastName, Contact, Email };
    let url = "http://localhost:8080/employees/updateEmployee/" + obj.id;
    axios
      .put(url, obj2)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee updated successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className='addemployee'>
        <h1>Edit Employee Form</h1>
        <Container className="grid-container">
          <Row className="grid-row">
            <Col>
              <form onSubmit={handleSubmit}>
                <label for="EmpID">Employee ID</label>
                <input 
                  id="EmpID" 
                  type="number" 
                  className="form-control" 
                  defaultValue={EmpID} 
                  onChange={(e) => {
                  setEmpID(e.target.value);
                }}
                />
                <label for="firstName">First Name</label>
                <input 
                  id="firstName" 
                  type="text" 
                  className="form-control" 
                  defaultValue={FirstName} 
                  onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                />
                <label for="lastName">Last Name</label>
                <input  
                  id="lastName" 
                  type="text" 
                  className="form-control" 
                  defaultValue={LastName} 
                  onChange={(e) => {
                  setLastName(e.target.value);
                }}
                />
                <label for="contact">Contact</label>
                <input 
                  id="contact" 
                  type="number" 
                  className="form-control" 
                  defaultValue={Contact} 
                  onChange={(e) => {
                  setContact(e.target.value);
                }}
                />
                <label for="email">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  className="form-control" 
                  defaultValue={Email}
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
  )
}

export default EditPage