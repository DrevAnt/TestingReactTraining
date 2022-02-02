import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

it("inputRenderTest", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("inputTitle");
  expect(input).toBeTruthy();
});

describe("changeInInputTest", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("inputTitle");

    fireEvent.change(input, { target: { value: "TesTvalue" } });
    expect(input.value).toBe("TesTvalue");
  });
});
