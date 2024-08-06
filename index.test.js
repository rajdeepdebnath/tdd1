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
