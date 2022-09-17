const Intern = require("../lib/Intern")
const intern = new Intern('Elaine', '345', 'elaine@email.com','UCLA'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(intern.name).toBe('Elaine');
    expect(intern.id).toBe('345');
    expect(intern.email).toBe('elaine@email.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(intern.getName()).toBe('Elaine');
});

test('test of id number comes up when we call getId() method', () => {
    expect(intern.getId()).toBe('345');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(intern.getEmail()).toBe('elaine@email.com');
});

test('if school comes up when we call getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
})

test('if role comes up when we call getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
});