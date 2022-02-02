import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

it("buttonRenderTest", () => {
  const { queryByTitle } = render(<Button />);
  const btn = queryByTitle("buttonTitle");
  expect(btn).toBeTruthy();
});

describe("clickButtonTest", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Button />);
    const btn = queryByTitle("buttonTitle");

    expect(btn.innerHTML).toBe("Press me");
    fireEvent.click(btn);
    expect(btn.innerHTML).toBe("You Clicked");
  });
});
