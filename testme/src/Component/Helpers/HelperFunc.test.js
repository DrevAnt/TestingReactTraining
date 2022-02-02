import { multiply, inputToLowerCase } from "./HelperFunc";

test("multiplyTesting", () => {
  expect(multiply(2, 10)).toBe(20);
});

test("lowerTest", () => {
  expect(inputToLowerCase("oLOloLoOlO")).toBe("olololoolo");
  expect(inputToLowerCase("SayHello")).toBe("sayhello");
});
