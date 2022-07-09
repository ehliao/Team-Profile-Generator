// export the employee class
const employee = require('./employee');

// constructor to extend employee
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = "Engineer";
      }
    
      getGithub() {
        return this.github;
      }
    }
    module.exports = engineer;
