// export the employee class
const Employee = require('./employee');

// constructor to extend employee
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    
    getOfficeNumber() {
      return this.office;
    }

    getRole() {
      return "Manager";
    }
}


module.exports = Manager;