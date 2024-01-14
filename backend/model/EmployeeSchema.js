const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    EmpId: { type: Number },
    FirstName: { type: String },
    LastName: { type: String },
    Contact: { type: Number },
    Email: { type: String },
  },
  {
    collection: "Employees",
  }
);

module.exports = mongoose.model("Employees", EmployeeSchema);
