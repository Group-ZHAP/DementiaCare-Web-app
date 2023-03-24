import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";

function Docter() {
  const [formData, setFormData] = useState({
    rating: "",
    exp: "",
    location: "",
  });

  const [recommendedDoctors, setRecommendedDoctors] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/recommend",
        {
          rating: parseInt(formData.rating),
          exp: parseInt(formData.exp),
          location: parseInt(formData.location),
        }
       
      );
      setRecommendedDoctors(response.data.recommended_doctors);
      setExperience(response.data.experience);
      console.log(experience);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: value,
    }));
  };

  return (
    <Row className="justify-content-md-center mt-5">
      <Col md={6}>
        <h3 className="text-center mb-4">Find a Recommended Doctors</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRating">
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formExperience">
            <Form.Label>Experience:</Form.Label>
            <Form.Control
              type="number"
              name="exp"
              value={formData.exp}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <br></br>
          <center>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </center>
        </Form>

        {recommendedDoctors.length > 0 && experience.length >= 0 && (
          <Row className="mt-4">
            <Col>
              <ListGroup>
                <ListGroup.Item active>Recommended Doctors:</ListGroup.Item>
                {recommendedDoctors.map((doctor, index) => (
                  <ListGroup.Item key={index}>{doctor}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item active>Experience:</ListGroup.Item>
                {experience.map((exe, index) => (
                  <ListGroup.Item key={index}>{exe}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
}

export default Docter;
