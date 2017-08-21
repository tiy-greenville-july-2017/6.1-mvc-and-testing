var sum = require('./sum');

describe("Sum function", function(){
  test("should add 1 plus 3 to give 4", function(){
    expect(sum(1, 3)).toBe(4);
  });
});
