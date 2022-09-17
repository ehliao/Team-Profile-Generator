const Manager = require("../lib/Manager")
const manager = new Manager('Chris', '456', 'chris@email.com','98'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('456');
    expect(manager.email).toBe('chris@email.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(manager.getName()).toBe('Chris');
});

test('test of id number comes up when we call getId() method', () => {
    expect(manager.getId()).toBe('456');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(manager.getEmail()).toBe('chris@email.com');
});

test('if office number comes up when we call getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('98');
})

test('if role comes up when we call getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});