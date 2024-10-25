
import logo from "../assets/studyspectrumlogo.png";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import studyaborad from "../assets/StudyAborad.png"
import TestPreparation from "../assets/Testpreparation.png";
const Register = () => {
    const navigate=useNavigate()
const handleNavigate = (path) => () => {
  navigate(path);
};
  return (
    <div className="register" style={{ padding: "0px", margin: "0px" }}>
      <div className="container-fluid p-lg-5  ">
        <div className="container pt-2 ">
          <div className="col-12  pt-4 text-center">
            <img src={logo}  style={{height:"150px", width:"150px"}}/>
            <span>
              <h3 className="fs-35 color-main">
                WELCOME TO THE USA STUDY SPECTRUM
              </h3>
            </span>
            <p
              className="text-center "
              style={{ fontSize: "14px", lineHeight: "20px" }}
            >
              Connect with us, where we believe in empowering students through
              international study opportunities. Our organization is dedicated
              to sending students abroad on the basis of merit and potential,
              providing them with transformative educational experiences that
              shape their futures. Join us as we embark on a journey of academic
              excellence and cultural enrichment.
            </p>
          </div>

          <div
            className="row  d-flex justify-content-center"
            style={{ gap: "10px" }}
          >
            <div className="col-md-7  ">
              <Card
                className=""
                style={{
                  color: "white",
                  backgroundColor: "  #0a2870",
                }}
                onClick={handleNavigate("/studyaboardform")}
              >
                <img src={studyaborad} style={{ height: "260px" }} />

                <Card.Title
                  className="p-3 text-center"
                  style={{ color: "white" }}
                >
                  STUDY ABORAD
                </Card.Title>
              </Card>
            </div> 
            {/* <div
              className="col-md-8 "
              onClick={handleNavigate("/testpreparation")}
            >
              <Card
                className=" "
                style={{
                  color: "white",
                  backgroundColor: "#0a2870  ",
                }}
              >
                <img src={TestPreparation} style={{ height: "360px" }} />

                <Card.Title
                  className="p-3 text-center"
                  style={{
                    color: "white",
                  }}
                >
                  TEST PREPARATION
                </Card.Title>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register