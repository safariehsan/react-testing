import React, { useState } from "react";

const SignupForm = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <h1>Signup Form</h1>
      <form>
        <input
          type="checkbox"
          id="terms"
          onChange={(e) => setDisabled(!e.target.checked)}
        />
        <label htmlFor="terms">Do you agree to the terms & conditions ?</label>
        <button type="submit" disabled={disabled}>
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
