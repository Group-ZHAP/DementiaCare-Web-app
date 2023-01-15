import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/auth/user/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          // Handle Successful login
          console.log("Successful login");
          // possible redirect
        } else if (response.status === 401) {
          // Handle Unauthorized
          setAlertMessage("Invalid email or password");
          setShowAlert(true);
        } else {
          console.log("An error ocurred, status code: ", response.status);
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
      });
  };

  return (
    <div style={{ padding: "30px" }}>
      <center>
        <h1 style={{ color: "#009A75" }}>Authentication</h1>
      </center>
      <Row>
        <Col md={6} md={{ span: 4, offset: 4 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Button style={{ background: "#009A75" }} type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Error</Alert.Heading>
          <p>{alertMessage}</p>
        </Alert>
      )}

      <p
        style={{
          textAlign: "center",
          paddingTop: "10px",
        }}
      >
        <Link
          to="/Register"
          style={{
            color: "black",
            textDecoration: "none",
            textAlign: "center",
          }}
        >
          Already have a account?{" "}
          <span style={{ color: "#009A75" }}>Register</span>
        </Link>
      </p>
    </div>
  );
}
