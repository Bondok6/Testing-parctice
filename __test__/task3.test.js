import Calculator from "../task3";

describe("Add and Subtract", () => {
  test("Add", () => {
    const cl = new Calculator();
    expect(cl.add(3, 5)).toBe(8);
  });

  test("Add", () => {
    const cl = new Calculator();
    expect(cl.add(-3, 5)).toBe(2);
  });

  test("Add", () => {
    const cl = new Calculator();
    expect(cl.add(-3, -5)).toBe(-8);
  });

  test("subtract", () => {
    const cl = new Calculator();
    expect(cl.sub(3, 5)).toBe(2);
  });

  test("subtract", () => {
    const cl = new Calculator();
    expect(cl.sub(5, 3)).toBe(2);
  });

  test("subtract", () => {
    const cl = new Calculator();
    expect(cl.sub(-5, 3)).toBe(8);
  });
});

describe("Divide", () => {
  test("divide", () => {
    const cl = new Calculator();
    expect(cl.divide(4, 2)).toBe(2);
  });

  test("divide", () => {
    const cl = new Calculator();
    expect(cl.divide(2, 4)).toBe(0.5);
  });

  test("divide", () => {
    const cl = new Calculator();
    expect(cl.divide(8, 4)).toBe(2);
  });
});

describe("Multiply", () => {
  test("multiply", () => {
    const cl = new Calculator();
    expect(cl.multiply(4, 2)).toBe(8);
  });
  test("multiply", () => {
    const cl = new Calculator();
    expect(cl.multiply(2, 4)).toBe(8);
  });
  test("multiply", () => {
    const cl = new Calculator();
    expect(cl.multiply(-4, 2)).toBe(-8);
  });
});
