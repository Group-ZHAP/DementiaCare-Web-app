import React from "react";
import Ourteam from "../components/Ourteam";
import avatr from "../Images/Avatr.jpeg";
import Favatr from "../Images/FemaleAvatar.jpeg";
import { Row, Col, Container } from "react-bootstrap";

function About() {
  return (
    <div style={{ padding: "25px" }}>
      <center>
        <h1 style={{ padding: "5px" }}>
          Meet Our<span style={{ color: "#009A75" }}> Team</span>
        </h1>
      </center>
      <Container>
        <Row>
          <Col>
            <Ourteam
              img={avatr}
              title="Ansari Azad Md Salim"
              des="Frontend and Backend Developer"
              social=""
            />{" "}
          </Col>
          <Col>
            <Ourteam
              img={Favatr}
              title="Sayed Zahra Abadi Jafar"
              des="Frontend and Backend Developer"
              social=""
            />{" "}
          </Col>
          <Col>
            <Ourteam
              img={avatr}
              title="Khan Haarish Irshad"
              des="Frontend and Backend Developer"
              social=""
            />{" "}
          </Col>
          <Col>
            <Ourteam
              img={Favatr}
              title="Rathod Pooja Shankar"
              des="Frontend and Backend Developer"
              social=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
