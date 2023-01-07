const mongoose = require("mongoose");

const forEmployee = new mongoose.Schema({
    empName: {
        type: String,
        required: true,
    },
    empDesignation: {
        type: String,
    },
    empSalary: {
        type: String,
    },
});

module.exports = mongoose.model("employee", forEmployee)