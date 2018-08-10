"use strict";
const domRep = require("./employeeHTML");
const getEmployeeData = require("./dataManager");




getEmployeeData()
.then(response => {
    response.forEach((array) => {
        console.log(array)
        document.querySelector("#employees").innerHTML += domRep(array)
    })
})


console.log("hey guys")