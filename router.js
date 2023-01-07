const employee = require("./Controllers/employee.js");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Making a CRUD application using RESTful APIs");
});

router.get("/employees", employee.getEmployee);

router.post("/employees", employee.createEmployees);

router.put("/employees/:empID", employee.updateEmployee);

router.delete("/employees/:empID", employee.deleteEmployee);

module.exports = router;