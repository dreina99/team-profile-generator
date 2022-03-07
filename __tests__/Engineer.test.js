const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Devin', 2, 'dreina', 'dreina99');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    console.log(engineer);
});

// getGithub() test
test("gets employee's github", () => {
    const engineer = new Engineer('Devin', 1, 'dreina', 'dreina99');

    expect(engineer.getGithub()).toEqual('dreina99');
});

test("gets employee's role", () => {
    const engineer = new Engineer('Devin', 1, 'dreina', 'dreina99');
    expect(engineer.getRole()).toEqual('Engineer');
});