import { screen, render, fireEvent } from "@testing-library/react";
import SignupForm from "../SignupForm";

test("button is disabled & checkbox is not checked initially", () => {
  render(<SignupForm />);
  const myCheck = screen.getByRole("checkbox", {
    name: /do you agree to the terms & conditions ?/i,
  });
  const myBtn = screen.getByRole("button");
  expect(myCheck).not.toBeChecked();
  expect(myBtn).toBeDisabled();
});

test("checkbox is checked & button is enabled", () => {
  render(<SignupForm />);
  const myCheck = screen.getByRole("checkbox", {
    name: "Do you agree to the terms & conditions ?",
  });
  const myBtn = screen.getByRole("button");
  fireEvent.click(myCheck);
  expect(myBtn).toBeEnabled();
  fireEvent.click(myCheck);
  expect(myBtn).toBeDisabled();
});
