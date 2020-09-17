const reverseString = require('./reverseString');

test('reverseString function exissts', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
})