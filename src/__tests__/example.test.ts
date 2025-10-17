function sum(a: number, b: number): number {
  return a + b
}

test('example', () => {
  const value = sum(3, 4)
  expect(value).toBe(7)
})
