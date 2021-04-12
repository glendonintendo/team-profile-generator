const Employee = require("../lib/Employee.js");

test('creates Employee object with name, id, email, and role properties', () => {
    const employee = new Employee("Spike Spiegel", 0, "spacecowboy@swordfish.com");

    expect(employee.name).toBe("Spike Spiegel");
    expect(employee.id).toBe(0);
    expect(employee.email).toBe("spacecowboy@swordfish.com");
    expect(employee.role).toBe("Employee");
});

test('Employee object has getters for name, id, and email', () => {
    const employee = new Employee("Faye Valentine", 1, "timetraveller@redtail.com");

    expect(employee.getName()).toBe("Faye Valentine");
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe("timetraveller@redtail.com");
    expect(employee.getRole()).toBe("Employee");
});