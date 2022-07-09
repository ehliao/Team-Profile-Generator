// export the employee class
const employee = require('./employee');

// constructor to extend employee
class engineer extends employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.title = "Manager";
      }
    
      getOffice() {
        return this.office;
      }
    }
    module.exports = manager;