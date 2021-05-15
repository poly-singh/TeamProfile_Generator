const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set Office Number via constructor argument", () => {
    const testValue = 20;
    const emp = new Manager("Jared", 10, "test@fakeemail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Manager";
    const emp = new Manager("Jared", 10, "test@fakeemail.com");
    expect(emp.getRole()).toBe(testValue);
});

test("Get Office Number via getOffice()", () => {
    const testValue = 20;
    const emp = new Manager("Jared", 10, "test@fakeemail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});