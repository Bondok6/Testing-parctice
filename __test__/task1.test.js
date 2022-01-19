import stringLength from "../task1";

test("test", () => {
  expect(stringLength("koko")).toBe(4);
});

test("test", () => {
  expect(() => {
    stringLength("");
  }).toThrow();
});

test("test", () => {
  expect(() => {
    stringLength("kokokokokokokook");
  }).toThrow();
});
