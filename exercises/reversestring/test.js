const reverse = require("./index");

test("Reverse1 function exists", () => {
  expect(reverse.reverse_1("abcd")).toBeDefined();
});

test("Reverse1 reverses a string", () => {
  expect(reverse.reverse_1("abcd")).toEqual("dcba");
});

test("Reverse1 reverses a string", () => {
  expect(reverse.reverse_1("  abcd")).toEqual("dcba  ");
});

test("Reverse2 function exists", () => {
  expect(reverse.reverse_2("abcd")).toBeDefined();
});

test("Reverse2 reverses a string", () => {
  expect(reverse.reverse_2("abcd")).toEqual("dcba");
});

test("Reverse2 reverses a string", () => {
  expect(reverse.reverse_2("  abcd")).toEqual("dcba  ");
});

test("Reverse3 function exists", () => {
  expect(reverse.reverse_3("abcd")).toBeDefined();
});

test("Reverse3 reverses a string", () => {
  expect(reverse.reverse_3("abcd")).toEqual("dcba");
});

test("Reverse3 reverses a string", () => {
  expect(reverse.reverse_3("  abcd")).toEqual("dcba  ");
});

test("Reverse4 function exists", () => {
  expect(reverse.reverse_4("abcd")).toBeDefined();
});

test("Reverse4 reverses a string", () => {
  expect(reverse.reverse_4("abcd")).toEqual("dcba");
});

test("Reverse4 reverses a string", () => {
  expect(reverse.reverse_4("  abcd")).toEqual("dcba  ");
});
