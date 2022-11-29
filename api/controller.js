'use strict'
var mongoose = require('mongoose')
Employee = mongoose.model('Employees');

exports.getAllEmployees = function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(employee);
    }
  });
};

// Create a new employee
exports.createEmployee = function(req, res) {
  var new_employee = new Employee(req.body);
  new_employee.save(function(err, employee) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(employee);
    }
  });
};

// Retrieve a employee by employeeName
exports.getEmployeeById = function(req, res) {
  Employee.findOne({_id: req.params.employeeId}, function(err, employee) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested employeeName \'' + req.params.employeeName + '\'' } ], err, code: 404 } })
    } else {
      res.json(employee);
    }
  });
};

// Edit a employee by employeeName
exports.editEmployeeById = function(req, res) {
  Employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {new: true}, function(err, employee) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(employee);
    }
  });
};

// Delete a employee by employeeName
exports.deleteEmployeeById = function(req, res) {
Employee.deleteOne({
    _id: req.params.employeeId
  }, function(err, employee) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested employeeName \'' + req.params.employeeName + '\'' } ], code: 404, message: 'Not Found' } })
    } else {
      res.status(204).send();
      res.json({ message: 'Employee successfully deleted' });
    }
  }); 
}

exports.getEmployeeSalaryInEuro = function(req, res) {
  Employee.findOne({_id: req.params.employeeId}, function(err, employee) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested employeeName \'' + req.params.employeeName + '\'' } ], err, code: 404 } })
    } else {
      res.json(employee.salary*3.3);
    }
  });
};
exports.getEmployeeSalaryInDollar = function(req, res) {
  Employee.findOne({_id: req.params.employeeId}, function(err, employee) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested employeeName \'' + req.params.employeeName + '\'' } ], err, code: 404 } })
    } else {
      res.json(employee.salary*3);
    }
  });
};
