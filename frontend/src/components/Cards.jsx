/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import logo from "../assets/Penlogo.png";
import iamge39 from "../assets/image 39.png";
import { FaStar } from "react-icons/fa";
// import Carousel from "react-bootstrap/Carousel";
// import Slider from "react-slick";
import "../styles/cards.css";
 export const Testimonial = () => {

 const [isHovered, setIsHovered] = useState(false);

 

  return (
    <>
      <div className="container-fluid   sucessstoreies">
        <div className="col-12    text-center">
          <h2>
            <b>TESTIMONIAL</b>
          </h2>
        </div>
     
            <div className="row m-5 ">
              <div className="col-md-4 px-3  ">
                <img
                  variant="top"
                  src="https://placekitten.com/200/200"
                  style={{
                    width: "30%",
                    borderRadius: "50%",
                    position: "relative",
                    top: "35%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                  }} // Replace with your image URL
                  className="card-image "
                />

                <Card
                  className={`my-3 custom-card ${isHovered ? "hovered" : ""}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ borderRadius: "30px 0 30px 0px" }}
                >
                  <Card.Body
                    style={{ paddingTop: isHovered ? "5rem" : "2rem" }}
                  >
                    <Card.Text>
                      lorem20 Lorem ipsum dolor, sit amet consectetur
                      adipisicing elit. Aliquam nemo recusandae temporibus
                      debitis sapiente. Aliquam nemo recusandae temporibus
                      debitis sapiente.
                    </Card.Text>

                    {isHovered && (
                      <div className="star-rating px-2 ">
                        <FaStar className="fa-star" />
                        <FaStar className="fa-star" />
                        <FaStar className="fa-star" />
                        <FaStar className="fa-star" />
                        <FaStar className="fa-star" />
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </div>

            
            </div>
            
          
      </div>
    </>
  );
};

export const SuccessStories = () => {
  return (
    <>
      <div className="container-fluid   sucessstoreies">
        <div className="col-12    text-center">
          <h2>
            <b>OUR SUCCESS STORIES</b>
          </h2>
        </div>
        <div className="row m-5 ">
          <div className="col-md-4 px-3  ">
            <Card
              style={{ width: "100%", maxWidth: "400px", maxheight: "360px" }}
            >
              <Card.Body style={{ backgroundColor: " #F8F6F6" }}>
                <div className="border-0  bg-transparent  d-flex  justify-content-center align-items-center  ">
                  <span className="px-4" style={{ fontSize: "20px" }}>
                    Congratulations
                  </span>
                  <img src={logo} style={{ height: "40px" }} />
                </div>
                <div className="  d-flex flex-column justify-content-center align-items-center">
                  <div
                    style={{
                      width: "140px", // Adjust the size as needed
                      height: "140px", // Adjust the size as needed
                      borderRadius: "50%",
                      border: "2px solid #FEA201",
                    }}
                  >
                    <img
                      src={iamge39}
                      style={{
                        padding: "5px",
                        width: "100%",
                        height: "100%", // Adjust the size as needed
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <Button
                    className="p-1 mt-2"
                    style={{
                      whiteSpace: "nowrap",
                      backgroundColor: "#fea201",
                      width: "auto",
                      height: "25px",
                      border: "none",
                      fontSize: "14px",
                      color: "black",
                      textOverflow: "ellipsis",
                      alignItems: "center",
                    }}
                  >
                    Mamata Gurung
                  </Button>
                  <Card.Text
                    className=" m-0"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Study Permit for
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontSize: "16px",
                    }}
                    className=" p-0"
                  >
                    USA
                  </Card.Title>
                </div>
              </Card.Body>
              <Card.Footer className="text-center bg-white ">
                <b>VISA Granted</b>{" "}
              </Card.Footer>
            </Card>
          </div>
          <div className="col-md-4 px-3  ">
            <Card
              style={{ width: "100%", maxWidth: "400px", maxheight: "360px" }}
            >
              <Card.Body style={{ backgroundColor: " #F8F6F6" }}>
                <div className="border-0  bg-transparent  d-flex  justify-content-center align-items-center  ">
                  <span className="px-4" style={{ fontSize: "20px" }}>
                    Congratulations
                  </span>
                  <img src={logo} style={{ height: "40px" }} />
                </div>
                <div className="  d-flex flex-column justify-content-center align-items-center">
                  <div
                    style={{
                      width: "140px", // Adjust the size as needed
                      height: "140px", // Adjust the size as needed
                      borderRadius: "50%",
                      border: "2px solid #FEA201",
                    }}
                  >
                    <img
                      src={iamge39}
                      style={{
                        padding: "5px",
                        width: "100%",
                        height: "100%", // Adjust the size as needed
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <Button
                    className="p-1 mt-2"
                    style={{
                      whiteSpace: "nowrap",
                      backgroundColor: "#fea201",
                      width: "auto",
                      height: "25px",
                      border: "none",
                      fontSize: "14px",
                      color: "black",
                      textOverflow: "ellipsis",
                      alignItems: "center",
                    }}
                  >
                    Mamata Gurung
                  </Button>
                  <Card.Text
                    className=" m-0"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Study Permit for
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontSize: "16px",
                    }}
                    className=" p-0"
                  >
                    USA
                  </Card.Title>
                </div>
              </Card.Body>
              <Card.Footer className="text-center bg-white ">
                <b>VISA Granted</b>{" "}
              </Card.Footer>
            </Card>
          </div>

          <div className="col-md-4 px-3  ">
            <Card
              style={{ width: "100%", maxWidth: "400px", maxheight: "360px" }}
            >
              <Card.Body style={{ backgroundColor: "#F8F6F6" }}>
                <div className="border-0  bg-transparent  d-flex  justify-content-center align-items-center  ">
                  <span className="px-4" style={{ fontSize: "20px" }}>
                    Congratulations
                  </span>
                  <img src={logo} style={{ height: "40px" }} />
                </div>
                <div className="  d-flex flex-column justify-content-center align-items-center">
                  <div
                    style={{
                      width: "140px", // Adjust the size as needed
                      height: "140px", // Adjust the size as needed
                      borderRadius: "50%",
                      border: "2px solid #FEA201",
                    }}
                  >
                    <img
                      src={iamge39}
                      style={{
                        padding: "5px",
                        width: "100%",
                        height: "100%", // Adjust the size as needed
                        borderRadius: "50%",
                      }}
                    ></img>
                  </div>
                  <Button
                    className="p-1 mt-2"
                    style={{
                      whiteSpace: "nowrap",
                      backgroundColor: "#fea201",
                      width: "auto",
                      height: "25px",
                      border: "none",
                      fontSize: "14px",
                      color: "black",
                      textOverflow: "ellipsis",
                      alignItems: "center",
                    }}
                  >
                    Mamata Gurung
                  </Button>
                  <Card.Text
                    className=" m-0"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Study Permit for
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontSize: "16px",
                    }}
                    className=" p-0"
                  >
                    USA
                  </Card.Title>
                </div>
              </Card.Body>
              <Card.Footer className="text-center bg-white ">
                <b>VISA Granted</b>{" "}
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
