const Intern = require("../lib/Intern.js");

test('creates Intern object that extends Employee object', () => {
    const intern = new Intern("Eren Jaeger", 8, "foundingtitan@jaegerists.com");

    expect(intern.name).toBe("Eren Jaeger");
    expect(intern.id).toBe(8);
    expect(intern.email).toBe("foundingtitan@jaegerists.com");
    expect(intern.getName()).toBe("Eren Jaeger");
    expect(intern.getId()).toBe(8);
    expect(intern.getEmail()).toBe("foundingtitan@jaegerists.com");
});

test('Intern object has property of school with getter method', () => {
    const intern = new Intern("Mikasa Ackerman", 9, "ackerman@erenluvr.com", "Ackerman U");

    expect(intern.school).toBe("Ackerman U");
    expect(intern.getSchool()).toBe("Ackerman U");
});

test("Intern object role property is overwritten to 'Intern'", () => {
    const intern = new Intern("Armin Arlert", 10, "colossaltitan@humanity.com", "Scout Corps");

    expect(intern.role).toBe("Intern");
    expect(intern.getRole()).toBe("Intern");
});