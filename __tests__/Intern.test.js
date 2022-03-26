const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Devin', 2, 'dreina', 'UC Davis');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    console.log(intern);
});

// getSchool() test
test("gets intern's school", () => {
    const intern = new Intern('Devin', 1, 'dreina', 'UC Davis');

    expect(intern.getSchool()).toEqual('UC Davis');
});

test("gets intern's role", () => {
    const intern = new Intern('Devin', 1, 'dreina', 'UC Davis');
    expect(intern.getRole()).toEqual('Intern');
});