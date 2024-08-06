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
