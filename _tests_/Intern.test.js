const Intern = require("../lib/Intern");

test("Set School via the constructor argument", () => {
    const testValue = "UCSD";
    const emp = new Intern("Jared", 10, "test@fakeemail.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Intern";
    const emp = new Intern("Jared", 1, "test@fakeemail.com", "UCSD");
    expect(emp.getRole()).toBe(testValue);
});

test("Get School via getSchool()", () => {
    const testValue = "UCSD";
    const emp = new Intern("Jared", 1, "test@fakemail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});