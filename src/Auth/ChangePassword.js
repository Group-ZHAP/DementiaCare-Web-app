import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const ChangePassword = () => {
  //   const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate the form data
    if (setPassword !== setPassword2) {
      // Show an error message
      return;
    }

    // Make an API call to change the password
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/user/changepassword/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
            password2,
          }),
        }
      );
      if (!response.ok) {
        // Show an error message
        return;
      }

      // Clear  form
      //   setCurrentPassword("");
      setPassword("");
      setPassword2("");
    } catch (error) {
      // Show  error message
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNewPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Change Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
