import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No Ice Cream...!</Popover.Body>
  </Popover>
);

const SignupFormBootstrap = () => {
  const [disabled, setDisabled] = useState(true);
  const label = (
    <span>
      I agree to the{" "}
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>Terms & Conditions</span>
      </OverlayTrigger>
      .
    </span>
  );
  return (
    <Container>
      <h1>Signup Form Bootstrap</h1>
      <hr />
      <Form style={{ display: "inline-block" }}>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            label={label}
            onChange={(e) => setDisabled(!e.target.checked)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Button type="submit" disabled={disabled} variant="primary">
            Register
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SignupFormBootstrap;
