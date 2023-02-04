import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseLetterWithSpace } from "./App";

test("button has correct initial color and text", () => {
  render(<App />);
  // find an element with role of button and text of 'Change to blue'
  const myBtn = screen.getByRole("button", { name: "Change to blue" });

  // expect the bg-color to be red
  expect(myBtn).toHaveStyle({ backgroundColor: "red" });

  // click the button
  fireEvent.click(myBtn);

  // expect the bg-color to be blue
  expect(myBtn).toHaveStyle({ backgroundColor: "blue" });

  // expect the text of button to be 'Change to red'
  expect(myBtn.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const myBtn = screen.getByRole("button", { name: "Change to blue" });
  // expect the button to be enable at first initial
  expect(myBtn).toBeEnabled();
  const myCheckbox = screen.getByRole("checkbox");
  // expect the checkbox to be disabled at first initial
  expect(myCheckbox).not.toBeChecked();
});

test("when checkbox is checked, button is disabled", () => {
  render(<App />);
  const myCheckbox = screen.getByRole("checkbox", { name: "Disable button" });
  const myBtn = screen.getByRole("button");
  // check the checkbox
  fireEvent.click(myCheckbox);
  // expect the button to be disabled
  expect(myBtn).toBeDisabled();
  // check the checkbox again
  fireEvent.click(myCheckbox);
  // expect the button to be disabled
  expect(myBtn).toBeEnabled();
});

test("Disabled button has gray bg & turn into red", () => {
  render(<App />);
  const myCheckbox = screen.getByRole("checkbox", { name: "Disable button" });
  const myBtn = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(myCheckbox);
  expect(myBtn).toHaveStyle("background-color: gray");
  fireEvent.click(myCheckbox);
  expect(myBtn).toHaveStyle("background-color: red");
});

test("Disabled button has gray bg & turn into blue", () => {
  render(<App />);
  const myCheckbox = screen.getByRole("checkbox", { name: "Disable button" });
  const myBtn = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(myBtn);
  fireEvent.click(myCheckbox);
  expect(myBtn).toHaveStyle("background-color: gray");
  fireEvent.click(myCheckbox);
  expect(myBtn).toHaveStyle("background-color: blue");
});

describe("insert spaces before capital letters", () => {
  test("works for no inner capital letter", () => {
    expect(replaceCamelCaseLetterWithSpace("One")).toBe("One");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelCaseLetterWithSpace("OneTwo")).toBe("One Two");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelCaseLetterWithSpace("OneTwoThree")).toBe(
      "One Two Three"
    );
  });
});
