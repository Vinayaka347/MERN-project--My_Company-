const express=require("express");
const mongoose=require("mongoose");
const employeeRoutes = require("./controller/EmployeeRoutes");
const app = express();
const cors = require("cors");
mongoose.set("strictQuery", true);

const uri="mongodb+srv://vinayaka:12345@cluster0.tgsccvd.mongodb.net/";

mongoose.connect(uri);
const db = mongoose.connection;
db.on("open",()=>{
    console.log("Database connected")
});
db.on("error", (err) => {
    console.log("Error occured", err);
});
app.get("/",(req,res)=>{
    res.write("Hello from server");
    res.end();
});

app.use(express.json());
app.use(cors());
app.use("/employees", employeeRoutes);

const port=8080;
app.listen(port,()=>{
    console.log("server started on ",port);
});