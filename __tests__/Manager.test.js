const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test('creates Manager object that extends Employee object', () => {
    const manager = new Manager("Jet Black", 2, "blueslover@hammerhead.com")

    expect(manager.name).toBe("Jet Black");
    expect(manager.id).toBe(2);
    expect(manager.email).toBe("blueslover@hammerhead.com");
    expect(manager.getName()).toBe("Jet Black");
    expect(manager.getId()).toBe(2);
    expect(manager.getEmail()).toBe("blueslover@hammerhead.com");
});

test('Manager object has property of officeNumber with getter method', () => {
    const manager = new Manager("Edward Wong Hau Pepelu Tivruski IV", 3, "earthling@tomato.com", 2058);

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test("Manager object role property is overwritten to 'Manager'", () => {
    const manager = new Manager("Ein", 4, "corgi@datadog.com", 1);

    expect(manager.role).toBe("Manager");
    expect(manager.getRole()).toBe("Manager");
});