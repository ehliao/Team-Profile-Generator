// export the employee class
const Employee = require('./employee');

// constructor to extend employee
class Intern extends Employee {
  constructor(name, id, email, school) { 
      super(name, id, email);
      this.school = school;
  }
 
  getSchool() {
      return this.school;
  }

  getRole() {
      return "Intern";
  }
}

module.exports = Intern;