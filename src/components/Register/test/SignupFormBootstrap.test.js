import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SignupForm from "../SignupForm";
import userEvent from "@testing-library/user-event";
import SignupFormBootstrap from "../SignupBootstrap";

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
  userEvent.click(myCheck);
  expect(myBtn).toBeEnabled();
  userEvent.click(myCheck);
  expect(myBtn).toBeDisabled();
});

test("popover responds to mouse hover", async () => {
  render(<SignupFormBootstrap />);
  // initial: popover is not in the DOM
  const nullPopover = screen.queryByText(/no ice cream...!/i);
  expect(nullPopover).not.toBeInTheDocument();
  // mouse hover: popover is shown
  const termsAndConditions = screen.getByText(/terms & conditions/i);
  userEvent.hover(termsAndConditions);
  const popover = screen.queryByText(/no ice cream...!/i);
  expect(popover).toBeInTheDocument();
  // mouse unhover: popover is hidden again
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream...!/i)
  );
  expect(popover).not.toBeInTheDocument();
});
