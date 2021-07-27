class Employee {
    constructor(firstName, lastName, role_ID, manager_ID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role_ID = role_ID
        this.manager_ID = manager_ID;
    }

    getName() {
        return this.firstName;
    }
    getName() {
        return this.lastName;
    }
    getID() {
        return role_ID;
    }
    getEmail() {
        return manager_ID;
    }
};
module.exports = Employee;