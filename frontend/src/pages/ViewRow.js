import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

function ViewRow(props) {
  console.log(props);
  const deleteEmployee = () => {
    const url = "http://localhost:8080/employees/deleteEmployee/";
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <tr>
        <td>{props.obj.EmpID}</td>
        <td>{props.obj.FirstName}</td>
        <td>{props.obj.LastName}</td>
        <td>{props.obj.Contact}</td>
        <td>{props.obj.Email}</td>
        <td>
            <button id='delete' onClick={deleteEmployee}>
              Delete
            </button>
            <Link to={`/editEmployee/${props.obj._id}`}>
              <button id="edit">Edit</button>
            </Link>
        </td>
    </tr>
  )
}

export default ViewRow;