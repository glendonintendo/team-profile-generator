const Team = require("../lib/Team.js");

test('creates Team object with idTracker and employees properties', () => {
    const team = new Team();

    expect(team.idTracker).toBe(0);
    expect(Array.isArray(team.employees)).toBeTruthy();
    expect(team.employees.length).toBe(0);
})

test('Team object has method to get idTracker and then increment by one', () => {
    const team = new Team();

    expect(team.getNewId()).toBe(0);
    expect(team.idTracker).toBe(1);
})

test('Team object has method to get employees', () => {
    const team = new Team();

    expect(team.getEmployees()).toEqual([]);
})

test('Team object has method to add employee to employees property', () => {
    const team = new Team();

    team.addEmployee({name: 'glen', email: 'nunya@business.com'});

    expect(team.employees.length).toBe(1);
    expect(team.employees[0]).toEqual({name: 'glen', email: 'nunya@business.com'});
})