const Employee = require('../lib/Employee');

test ('Returns the correct name of the employee', ()=>{
  const employee = new Employee("John")
    expect(employee.getName()).toBe("John")
})