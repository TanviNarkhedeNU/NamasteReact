const { sum } = require("../sum");

test("sum fn should calculate sum of 2 numbers", () => {
  const result = sum(3, 4);

  //assertion
  expect(result).toBe(7);
});
