const Engineer = require("../lib/Engineer.js");

test('creates Engineer object that extends Employee', () => {
    const engineer = new Engineer("Mugen", 5, "formerpirate@kendo.com");

    expect(engineer.name).toBe("Mugen");
    expect(engineer.id).toBe(5);
    expect(engineer.email).toBe("formerpirate@kendo.com");
    expect(engineer.getName()).toBe("Mugen");
    expect(engineer.getId()).toBe(5);
    expect(engineer.getEmail()).toBe("formerpirate@kendo.com");
});

test('Engineer object has property of github with getter method', () => {
    const engineer = new Engineer("Jin", 6, "ronin@jiujitsu.com", "eelvendor20");

    expect(engineer.github).toBe("eelvendor20");
    expect(engineer.getGithub()).toBe("eelvendor20");
});

test("Engineer object role property is overwritten to 'Engineer'", () => {
    const engineer = new Engineer("Fuu", 7, "waitress@none.com", "sunflowerfinder15");

    expect(engineer.role).toBe("Engineer");
    expect(engineer.getRole()).toBe("Engineer");
});