import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import umbrella from "../Images/umbrella1.png";
import stages from "../Images/stages_of_dementia.png";
import stage from "../Images/symptoms_of_dementia.png";
import { textAlign } from "@mui/system";

function DementiaL() {
  return (
    <>
      <div>
        <div>
          <h1
            style={{ color: "#009A75", textAlign: "center", padding: "35px" }}
          >
            What is Dementia ?{" "}
          </h1>
          <Container>
            <Row>
              <Col>
                <ul>
                  <li>
                    Dementia is a broad term that describes a loss of thinking
                    ability, memory, attention, logical reasoning, and other
                    mental abilities.{" "}
                  </li>
                  <li>
                    These changes are severe enough to interfere with social or
                    occupational functioning.
                  </li>
                  <li>
                    You might also hear it called as major neurocognitive
                    disorder.
                  </li>
                  <li>
                    Dementia isn’t a disease. Instead, it's a group of symptoms
                    caused by other conditions.
                  </li>
                  <li>
                    Many things can cause dementia. It happens when the parts of
                    your brain used for learning, memory, decision making, and
                    language are damaged or diseased.
                  </li>
                  <li>
                    About 5%-8% of adults over age 65 have some form of
                    dementia. This percentage doubles every 5 years after 65.
                  </li>
                </ul>
              </Col>
              <Col>
                <img src={umbrella} alt="umbrella" />
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <h1
            style={{ color: "#009A75", textAlign: "center", padding: "35px" }}
          >
            STAGES OF DEMENTIA :
          </h1>
          <Container>
            <Row>
              <Col mid={6}>
                <p
                  style={{
                    borderBottom: "3px solid #009A75 ",
                    padding: "20px",
                    fontSize: "1.3rem",
                  }}
                >
                  <span
                    style={{
                      color: "#009A75",
                      paddingRight: "2px",
                    }}
                  >
                    |
                  </span>
                  Typically, these stages apply to all types of dementia. But
                  it’s important to remember that someone with dementia may not
                  always fit in a specific stage or go through every stage
                  because the progression of dementia is unique and different
                  for each person.
                </p>
                <p
                  style={{
                    borderBottom: "3px solid #009A75 ",
                    padding: "20px",
                    fontSize: "1.3rem",
                  }}
                >
                  <h3 style={{ color: "#4A0D66" }}>Early - mild Dementia :</h3>
                  <ul>
                    <li>
                      Early - mild Dementia : A person with this stage of
                      dementia might still be able to live independently. They
                      might still be able to drive, work, and socialize.
                      However, they will probably have memory lapses, like
                      forgetting familiar words or the location of everyday
                      objects.
                    </li>
                    <li>
                      However, they will probably have memory lapses, like
                      forgetting familiar words or the location of everyday
                      objects.
                    </li>
                  </ul>
                </p>
              </Col>
              <Col mid={6}>
                <img src={stages} alt="stages" />
              </Col>
            </Row>
            <p
              style={{
                borderBottom: "3px solid #009A75 ",
                padding: "20px",
                fontSize: "1.3rem",
              }}
            >
              <h3 style={{ color: "#4A0D66" }}>Middle - moderate Dementia :</h3>
              <ul>
                <li>
                  The middle stage of dementia is usually the longest and can
                  last for many years.
                </li>
                <li>
                  As dementia progresses, the person will need an increasing
                  level of care.
                </li>
                <li>
                  In this stage, you might notice that they get words mixed up,
                  are often frustrated or angry, or act in unexpected ways, like
                  refusing to bathe.
                </li>
              </ul>
            </p>
            <p
              style={{
                borderBottom: "3px solid #009A75 ",
                padding: "20px",
                fontSize: "1.3rem",
              }}
            >
              <h3 style={{ color: "#4A0D66" }}>Late - stage Dementia :</h3>
              <ul>
                <li>
                  The final stage of dementia, people progressively lose the
                  ability to engage in the world, to hold conversations, and to
                  control their muscles.
                </li>
                <li>
                  They may still be able to talk, but communicating and
                  expressing thoughts becomes difficult even for something basic
                  like pain.
                </li>
                <li>
                  You might see significant personality changes or the fading of
                  personality together.
                </li>
              </ul>
            </p>
          </Container>
        </div>
        <div>
          <div style={{ background: "#009A75" }}>
            <center>
              <h1 style={{ padding: "25px" }}>Symptoms of Dementia</h1>
            </center>
          </div>
          <p style={{ padding: "50px", textAlign: "center" }}>
            As there are 3 stages of Dementia. Therefore symptoms also vary from
            stage to stage.{" "}
          </p>
          <Container>
            <Row>
              <Col>
                <img src={stage} alt="3_Stages" style={{ width: " 100%" }} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default DementiaL;
