const Engineer = require("../lib/Engineer");

test("Set GitHub Account via constructor argument", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Jared", 10, "test@fakeemail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test("getRole() functions correctly", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Jared", 1, "test@fakeemail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test("Get GitHub UN via getGitHub()", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Jared", 1, "test@fakeemail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});