import { useState } from "react";

export function replaceCamelCaseLetterWithSpace(word) {
  return word.replace(/\B([A-Z])\B/g, " $1");
}

const ColorButton = () => {
  const [btnBgColor, setBtnBgColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newBtnBgColor = btnBgColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : btnBgColor }}
        onClick={() => setBtnBgColor(newBtnBgColor)}
        disabled={disabled}
      >
        Change to {newBtnBgColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        id="disable-button-checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
};

export default ColorButton;
