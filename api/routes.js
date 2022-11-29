'use strict'
var employeesList = require('./controller');

module.exports = function(app) {
  app.route('/employees')
    .get(employeesList.getAllEmployees)
    .post(employeesList.createEmployee);

  app.route('/employees/:employeeId')
    .get(employeesList.getEmployeeById)
    .put(employeesList.editEmployeeById)
    .delete(employeesList.deleteEmployeeById);

  app.route('/salary/euro/:employeeId')
    .get(employeesList.getEmployeeSalaryInEuro);

  app.route('/salary/dollar/:employeeId')
    .get(employeesList.getEmployeeSalaryInDollar);
};