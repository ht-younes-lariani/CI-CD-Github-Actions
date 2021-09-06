const { addTwoNumbers } = require('./app')

test('add two numbers', () => {
  const a = 5
  const b = 2
  expect(addTwoNumbers(a, b)).toBe(a + b)
})