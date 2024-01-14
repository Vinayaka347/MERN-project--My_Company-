const express = require("express");
const EmployeeSchema = require("../model/EmployeeSchema");
const router = express.Router();

router.get("/", (req, res, next) => {
  EmployeeSchema.find((err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/add-employee", (req, res, next) => {
  EmployeeSchema.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.delete("/deleteEmployee/:id", (req, res, next) => {
  EmployeeSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router
  .route("/updateEmployee/:id")
  .get((req, res, next) => {
    // get the original data
    EmployeeSchema.findById(req.params.id, (err, data) => {
      if (err) {
        console.log(err);
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    // update new data for each record
    EmployeeSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          console.log(err);
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });
module.exports = router;
