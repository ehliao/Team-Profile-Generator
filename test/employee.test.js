const Employee = require("../lib/Employee")
const employee = new Employee('Dakota', '123', 'dakota@email.com');

test('test whether the entered values for name, id, and email are valid', () => {
    expect(employee.name).toBe('Dakota');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('dakota@email.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(employee.getName()).toBe('Dakota');
});

test('test of id number comes up when we call getId() method', () => {
    expect(employee.getId()).toBe('123');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(employee.getEmail()).toBe('dakota@email.com');
});

test('if role comes up when we call getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});