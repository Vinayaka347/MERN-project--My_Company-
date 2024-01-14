import React from "react";

function ViewRow(props) {
  return (
    <tr>
      <td>{props.obj.EmpId}</td>
      <td>{props.obj.FirstName}</td>
      <td>{props.obj.LastName}</td>
      <td>{props.obj.Contact}</td>
      <td>{props.obj.Email}</td>
      <td>
        <button id="delete">Delete</button>
        <button id="edit">Edit</button>
      </td>
    </tr>
  );
}

export default ViewRow;
