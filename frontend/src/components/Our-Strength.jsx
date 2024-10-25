
import "../styles/ourstrength.css"
import { Container, Card,  } from "react-bootstrap";

import sixtyplus from "../assets/strength/60plus.png";
import seventyplus from "../assets/strength/70plus.png";
import hundredplus from "../assets/strength/100plus.png";
export default function OurStrength() {
    return (
      <div>
        <div className="w-100 strength-container">
          <Container fluid>
            <span className="color-main  mb-4 pt-lg-5 d-flex  justify-content-center fs-35  ">
              OUR CORE STRENGTH
            </span>
            <Container>
              <div className="strength-water-mark">
                <div className="strength-contain-wrapper  container pt-lg-5 mt-lg-5 d-flex  ">
                  <div className="item">
                    <Card
                      style={{
                        border: "unset",
                        background: "transparent",
                      }}
                    >
                      <Card.Img
                        style={{ width: "209px", margin: "0 auto" }}
                        src={hundredplus}
                      />
                      <Card.Body>
                        <Card.Title className="color-secondary text-center">
                          Student Advising Expertise
                        </Card.Title>
                        <Card.Text className="fs-16 text-center">
                          Benefit from personalized student advising services
                          tailored to your academic and career goals, ensuring
                          informed decisions and successful outcomes.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>

                  <div className="item">
                    <Card
                      style={{
                        border: "unset",
                        background: "transparent",
                      }}
                    >
                      <Card.Img
                        style={{ width: "209px", margin: "0 auto" }}
                        src={seventyplus}
                      />
                      <Card.Body>
                        <Card.Title className="color-main text-center">
                          University Partnerships:
                        </Card.Title>
                        <Card.Text className="fs-16 text-center">
                          Access a wide array of prestigious universities and
                          colleges in the USA through our established
                          partnerships, ensuring you receive the highest quality
                          education
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="item">
                    <Card
                      style={{
                        border: "unset",
                        background: "transparent",
                      }}
                    >
                      <Card.Img
                        style={{ width: "209px", margin: "0 auto" }}
                        src={sixtyplus}
                      />
                      <Card.Body>
                        <Card.Title className="color-red text-center">
                          Student Assistance
                        </Card.Title>
                        <Card.Text className="fs-16 text-center">
                          We&#39;ve guided numerous students through the process
                          of studying abroad, empowering them to enhance their
                          careers and seize global opportunities.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>
          </Container>
        </div>
      </div>
    );
}
