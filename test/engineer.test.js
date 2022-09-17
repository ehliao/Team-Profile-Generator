const Engineer = require("../lib/Engineer")
const engineer = new Engineer('Bonita', '234', 'bonita@email.com','BonitaGitHub'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(engineer.name).toBe('Bonita');
    expect(engineer.id).toBe('234');
    expect(engineer.email).toBe('bonita@email.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(engineer.getName()).toBe('Bonita');
});

test('test of id number comes up when we call getId() method', () => {
    expect(engineer.getId()).toBe('234');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(engineer.getEmail()).toBe('bonita@email.com');
});

test('if github username comes up when we call getGithub() method', () => {
    expect(engineer.getGithub()).toBe('BonitaGitHub');
})

test('if role comes up when we call getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

