
import "../styles/aboutus.css";
import Card from "react-bootstrap/Card";
import serv3 from "../assets/Aboutus/studentassit.png";
import serv2 from "../assets/Aboutus/university.png"
import serv1 from "../assets/Aboutus/testprepration.png"
import messageceo from "../assets/Aboutus/messageCEO.png";
import vison from"../assets/Aboutus/vision.png"
import React from "react";

const Aboutus = () => {
  return (
    <div className="container-fluid " style={{ padding: "0px", margin: "0px" }}>
      <div className="backgroundimage aboutus container-fluid  pt-lg-5 mt-lg-5 ">
        <div className="container pt-lg-5 pt-3 pt-sm-3 mt-lg-5 mt-sm-3 d-flex flex-column">
          <span>
            <h1 className="fs-35 " style={{ color: "white" }}>
              ABOUT US
            </h1>
          </span>
          <div className=" pt-lg-3 ">
            <p
              className=" col-sm-12 fs-14"
              style={{
                textAlign: "start",
                color: "white",
              }}
            >
              At USA Study Spectrum, we are more than just an educational
              consulting firm – we&#39;re your partners in navigating the
              academic landscape of the USA. What makes us exceptional? Our team
              comprises seasoned professionals, each a distinguished graduate of
              prestigious universities across the United States. With firsthand
              experience as both students and professionals in the country, we
              offer unparalleled insight and tailored guidance to ensure your
              academic success. Our commitment to professionalism and precision
              guides every interaction with our clients. Whether you&#39;re
              seeking assistance with university selection, application
              guidance, or navigating visa processes, USA Study Spectrum is here
              to provide personalized support every step of the way.<br></br>
              <br></br> Trust USA Study Spectrum to be your dedicated partner in
              unlocking the doors to a world-class education in the USA.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 pt-lg-5">
        <div className="container container1  ">
          <div className=" d-flex row  justify-content-between align-items-center">
            <div className="col-md-6 col-sm-12 ">
              <Card
                className="p-lg-4 position-relative
            "
                style={{ borderRadius: "20px" }}
              >
                <div className="cardheader  vision position-absolute">
                  <h2 className="cardtitle fs-35 color-main ">OUR VISION</h2>
                </div>
                <Card.Text className="p-lg-4  fs-14 pt-3 pt-sm-3 p-2">
                  Our vision at USA Study Spectrum is to be the global leader in
                  educational consultancy, setting the standard for excellence
                  and innovation in guiding students towards academic success in
                  the United States. We aspire to create a transformative
                  learning environment where individuals are empowered to
                  achieve their educational goals, unlocking endless
                  opportunities for personal and professional growth. Through
                  our unwavering commitment to integrity, expertise, and
                  personalized support, we aim to shape a brighter future for
                  generations to come.
                </Card.Text>
              </Card>
              <Card
                className="p-lg-4 mt-4 position-relative
            "
                style={{ borderRadius: "20px" }}
              >
                <div className="cardheader  vision position-absolute">
                  <h2 className="cardtitle fs-35 color-main ">OUR MISSION</h2>
                </div>
                <Card.Text className="p-lg-4  fs-14 pt-3 pt-sm-3 p-2">
                  Our mission at USA Study Spectrum is to empower individuals
                  worldwide with personalized educational solutions,
                  facilitating growth and unlocking their full potential for a
                  brighter future. Through innovative approaches,
                  integrity-driven practices, and impactful partnerships, we
                  strive to redefine the educational consultancy landscape,
                  ensuring that every student receives the guidance and support
                  they need to succeed in their academic pursuits in the United
                  States.
                </Card.Text>
              </Card>{" "}
            </div>
            <div className=" col-md-6 visionimg">
              <img src={vison} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  mt-lg-5 pt-lg-5 pt-4 ">
        <div className="container pt-lg-4">
          <Card
            className=" p-lg-4    "
            style={{ borderRadius: "20px", gap: "10px" }}
          >
            <div className="cardheader  position-absolute">
              <h2 className="cardtitle fs-35 color-main">OUR SERVICES</h2>
            </div>
            <div className="pt-lg-5 servicedescription d-flex pt-2 flex-column">
              <div className=" col-sm-12 col-lg-12 p-lg-4  ">
                <Card className=" mt-2 ">
                  <div className="d-flex   align-items-center">
                    <img className="servimg" src={serv1} />
                    <div>
                      <Card.Title className="fs-20 pt-2">
                        {" "}
                        TEST PREPARATION
                      </Card.Title>
                      <Card.Text className="fs-14">
                        Successfully prepared and have passed the language
                        proficiency test from us.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-12 p-lg-4">
                <Card className=" mt-2 ">
                  <div className="d-flex   align-items-center">
                    <img className="servimg" src={serv2} />
                    <div>
                      <Card.Title className="fs-20 pt-2">
                        UNIVERSITY TIED UP
                      </Card.Title>
                      <Card.Text className="fs-14">
                        All the A-listed universities and colleges around the
                        globe.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-sm-12 col-lg-12 p-lg-3 ">
                <Card className="mt-2 ">
                  <div className="d-flex    align-items-center">
                    <img className="servimg" src={serv3} />
                    <div>
                      <Card.Title className="fs-20 pt-2">
                        STUDENT ASSISTANT
                      </Card.Title>
                      <Card.Text className="fs-14">
                        I have assisted students in studying abroad and enhanced
                        their careers.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="container-fluid   pt-3 mt-lg-5 ">
        <div className="container">
          <div className="  row d-flex  justify-content-center align-items-center">
            <div className="col-md-8 col-sm-12">
              <h2 className="fs-35 color-main">MESSAGE FROM THE CEO</h2>
              <p style={{ lineHeight: "25px", fontSize: "15px" }}>
                I trust this message finds you well and filled with the same
                enthusiasm for education that has been the driving force behind
                the presidential journey thus far. As we navigate the
                ever-evolving landscape of education, I am delighted to share
                with you the exciting developments and initiatives that will
                define our path forward. Our commitment is to empower
                individuals with the knowledge and skills to shape their
                destinies remains unwavering. In the spirit of continuous
                improvement, we have been diligently working to enhance our
                services and offerings to better serve the diverse needs of our
                clients. Our team has been actively engaging with educational
                institutions, professionals, and students to ensure that we
                remain at the forefront of innovation in the education
                consulting sector.
              </p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={messageceo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
   
};

export default Aboutus;
