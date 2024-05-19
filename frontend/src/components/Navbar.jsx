import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import  { useState, useEffect } from "react";
import "../styles/navbar.css";
import logos from "../assets/studyspectrumlogo.png";
import { useNavigate, Link } from "react-router-dom";



const Navs = () => {

const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const closeDropdown = () => {
    if (screenWidth <= 768) {
      const toggleBtn = document.getElementById("toggle-btn");
      toggleBtn.click();
    }
  };useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "#0a2870", color: "#ffff" }}
        collapseOnSelect="true"
      >
        <Container fluid>
          <Navbar.Brand
            onClick={handleNavigation}
            className="mx-lg-4 mx-sm-0"
            href="#"
          >
            <div
              className="d-flex   justify-content-between align-item-center "
              style={{ gap: "15px" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: "100px",
                  width: "100px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20%",
                  alignItems: "center",

                  padding: "7px",
                }}
              >
                <img
                  src={logos}
                  alt="Logo"
                  style={{
                    maxWidth: "110px",
                    maxHeight: "110px",
                  }}
                />
              </div>
              <div
                className="  pt-lg-5 justify-content-center  align-items-center"
                style={{
                  color: "#fea201",
                  fontFamily: "Impact",
                }}
              >
                <p
                  className="   namelogo "
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontSize: "24px",
                    color: "white",
                  }}
                >
                  USA STUDY SPECTRUM
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="toggle-btn" />
          <Navbar.Collapse id="navbarScroll"  style={{paddingRight:"60px"}}className="mx-lg-1 ">
            <Nav
              className="  ms-auto  px-lg-4 px-sm-0 my-2 my-lg-0 "
              //   style={{ maxHeight: "150px" }}
            >
              <Link
                className="nav-link mx-lg-1 mx-sm-0 color-secondary"
                id="nav"
                to="/"
                onClick={closeDropdown}
              >
                <b>HOME</b>
              </Link>
              <Link
                id="nav"
                className={`nav-link mx-lg-1 mx-sm-0 fw-bold ${
                  screenWidth < 1496 && "about-adjust"
                }`}
                to="/about"
                onClick={closeDropdown}
              >
                ABOUT US
              </Link>
              {/* <NavDropdown
                className="mx-lg-3 mx-sm-0 fw-bold "
                title="STUDY ABROAD"
                id="navbarScrollingDropdown"

                // Hide dropdown on mouse leave
              >
                <NavDropdown.Item style={{ padding: "unset", width: "100" }}> */}
              <Link
                // className=" fw-bold  dropdown-item d-flex justify-content-start"
                id="nav"
                className={`nav-link mx-lg-1 mx-sm-0 fw-bold ${
                  screenWidth < 1496 && "about-adjust"
                }`}
                to="/studyusa"
                onClick={closeDropdown}
              >
                <b>STUDY USA</b>
              </Link>
              {/* </NavDropdown.Item> */}

              {/* <NavDropdown.Item style={{ padding: "unset", width: "100" }}>
                  <Link
                    className=" fw-bold  dropdown-item d-flex justify-content-start"
                    to="/studycanada"
                    onClick={closeDropdown}
                  >
                    STUDY IN CANADA
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ padding: "unset", width: "100" }}
                  className="fw-bold"
                >
                  <Link
                    to="/studyUk"
                    className=" fw-bold  dropdown-item d-flex justify-content-start"
                    onClick={closeDropdown}
                  >
                    STUDY IN UK
                  </Link>
                </NavDropdown.Item> */}
              {/* </NavDropdown> */}
              <NavDropdown
                className="mx-lg-1 mx-sm-0  fw-bold "
                title={<span className="dp">TEST PREPARATION</span>}
                id="navbarScrollingDropdown"
                // show={dropdownOpen === "testPreparation"}
                // onToggle={() => handleDropdownToggle("testPreparation")}
              >
                <NavDropdown.Item style={{ padding: "unset", width: "100" }}>
                  <Link
                    id="nav"
                    className=" dropdown-item  bg-white  fw-bold"
                    style={{ color: "black" }}
                    to="/ielts"
                    onClick={closeDropdown}
                  >
                    IELTS
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={{ padding: "unset", width: "100" }}>
                  {" "}
                  <Link
                    id="nav"
                    className=" dropdown-item   bg-white fw-bold"
                    to="/tofel"
                    onClick={closeDropdown}
                  >
                    TOFEL
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={{ padding: "unset", width: "100" }}>
                  <Link
                    id="nav"
                    className=" dropdown-item  bg-white fw-bold"
                    to="/pte"
                    onClick={closeDropdown}
                  >
                    PTE
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item style={{ padding: "unset", width: "100" }}>
                  <Link
                    id="nav"
                    className=" dropdown-item  fw-bold"
                    to="/duolingo"
                    onClick={closeDropdown}
                  >
                    DUOLINGO
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link
                id="nav"
                className="nav-link mx-lg-1 mx-sm-0  fw-bold"
                to="/contactus"
                onClick={closeDropdown}
              >
                CONTACT
              </Link>
            </Nav>

            <Link to="/register">
              {" "}
              <Button
                className=""
                style={{
                  color: "white",
                  backgroundColor: "#C80104",
                  border: "none",
                }}
                onClick={closeDropdown}
              >
                {" "}
                Register
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
