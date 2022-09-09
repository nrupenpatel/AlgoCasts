const { palindrome } = require("./index");

test("palindrome function is defined", () => {
  expect(typeof palindrome.palindrome()).toEqual("function");
});

test('"aba" is a palindrome', () => {
  expect(palindrome.palindrome1("aba")).toBeTruthy();
});
/*
test('" aba" is not a palindrome', () => {
  expect(palindrome(" aba")).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome("aba ")).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome("greetings")).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome("1000000001")).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome1("Fish hsif")).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome1("pennep")).toBeTruthy();
});
*/
