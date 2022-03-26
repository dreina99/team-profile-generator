const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Devin', 2, 'dreina', 389);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    console.log(manager);
});

// tests getRole function
test("gets employee's role", () => {
    const manager = new Manager('Devin', 1, 'dreina', 389);
    expect(manager.getRole()).toEqual('Manager');
});