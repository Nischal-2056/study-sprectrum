
import "../styles/ourstrength.css"
import { Container, Card,  } from "react-bootstrap";

import sixtyplus from "../assets/strength/60plus.png";
import seventyplus from "../assets/strength/70plus.png";
import hundredplus from "../assets/strength/100plus.png";
export default function OurStrength() {
    return (
        <div >
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
                                                Student Assisted
                                            </Card.Title>
                                            <Card.Text className="fs-16 text-center">
                                                Have assisted student for studing aborad and enhance their carreer
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
                                                University Tied Up
                                            </Card.Title>
                                            <Card.Text className="fs-16 text-center">
                                                All the A listed Universities and Colleges around the globe
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
                                                Test Preparation
                                            </Card.Title>
                                            <Card.Text className="fs-16 text-center">
                                                Succesfully prepare and have passed the language proficiency taste from us
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
