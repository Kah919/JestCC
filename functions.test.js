const functions = require('./functions')

test('Adds 2 + 2 equal to 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 NOT equal to 4', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

// toBe is for primitive and toEqual is for objects, arrays
test('Expect user to be Kah', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Kah',
        lastName: 'Yap'
    })
})

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// toBeLessThan
// toBeLessThanOrEqual

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})


// Arrays
test('Admin should be in usernames', () => {
    usernames = ['a', 'b', 'c'];
    expect(usernames).toContain('a')
})

// Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); // used when testing asynchronous code
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1); // used when testing asynchronous code
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})