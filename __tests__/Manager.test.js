const { TestWatcher } = require('@jest/core');
const Manager = require ('../lib/Manager');
test('expect role to be overridden and return manager',
()=> {
    const manager = new Manager("Manager")
    expect(manager.getRole()).toBe("Manager")
})


