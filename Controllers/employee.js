const DBEmployee = require("../ModelsDB/employee.js");


const getEmployee = (req, res) => {
    DBEmployee.find((err, emps) => {
        if (err) {
            res.send(err);
        }
        res.json(emps);
    })
}

const createEmployees = (req, res) => {
    const emp = new DBEmployee({
        empName: req.body.empName,
        empDesignation: req.body.empDesignation,
        empSalary: req.body.empSalary,
    });
    emp.save((err, emp) => {
        if (err) {
            res.send(err);
        }
        res.json(emp);
    });
};

const updateEmployee = (req, res) => {
    DBEmployee.findOneAndUpdate(
        {
            _id: req.params.empID
        },
        {
            $set: {
                empName: req.body.empName,
                empDesignation: req.body.empDesignation,
                empSalary: req.body.empSalary,
            },
        },
        {
            new: true
        },
        (err, emps) => {
            if(err){
                res.send(err);
            }
            else{
                res.json(emps);
            }
        }
    );
};

const deleteEmployee = (req, res) => {
    DBEmployee.deleteOne(
        {_id: req.params.empID})

        .then(() => res.json({
            message: "Employee Deletion Successful."
        }))
        .catch((err) => {
            res.send(err);
        });
};

module.exports = { getEmployee, createEmployees, updateEmployee, deleteEmployee};
