import { add } from "./index.js";

test("adds 1 + 2 to equal 3", () => {
  expect(add("1, 2")).toBe(3);
});

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns 0 for null argument", () => {
  expect(add()).toBe(0);
});

test("returns 1 for single argument i.e. '1'", () => {
  expect(add("1")).toBe(1);
});

test("returns 1 for argument with empty string i.e. '1, '", () => {
  expect(add("1, ")).toBe(1);
});

test("returns 1 for argument with invalid string i.e. '1, null'", () => {
  expect(add("1, null")).toBe(1);
});

test("adds with new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Support different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Calling Add with a negative number will throw an exception", () => {
  expect(() => add("1,-2,-3")).toThrow("negatives not allowed - -2,-3");
});

test("Numbers bigger than 1000 should be ignored", () => {
  expect(add("1, 1001")).toBe(1);
});

test("Delimiters can be of any length", () => {
  expect(add("//[;;;]\n1;;;2")).toBe(3);
});
