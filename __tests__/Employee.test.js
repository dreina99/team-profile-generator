const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Devin', 1, 'dreina');

    // tests constructor
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.log(employee);
});

// getName() test
test("gets employee's name", () => {
    const employee = new Employee('Devin', 1, 'dreina');

    expect(employee.getName()).toEqual('Devin');
});

// getId() test
test("gets employee's id", () => {
    const employee = new Employee('Devin', 1, 'dreina');

    expect(employee.getId()).toEqual(1);
});

// getEmail() test
test("gets employee's email", () => {
    const employee = new Employee('Devin', 1, 'dreina');

    expect(employee.getEmail()).toEqual('dreina');
});

test("gets employee's role", () => {
    const employee = new Employee('Devin', 1, 'dreina');
    expect(employee.getRole()).toEqual('Employee');
});