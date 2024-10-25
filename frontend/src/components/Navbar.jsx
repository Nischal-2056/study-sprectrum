import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import "../styles/navbar.css"; // Import your CSS file
import logos from "../assets/studyspectrumlogo.png"; // Logo image
import { useNavigate, NavLink } from "react-router-dom"; // Use NavLink for active links

const Navs = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  const closeDropdown = () => {
    if (screenWidth <= 768) {
      const toggleBtn = document.getElementById("toggle-btn");
      toggleBtn && toggleBtn.click();
    }
  };

  useEffect(() => {
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
        style={{ backgroundColor: "#0a2870", color: "#fff" }}
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand onClick={handleNavigation} className="mx-lg-4 mx-sm-0">
            <div
              className="d-flex justify-content-between align-item-center"
              style={{ gap: "15px" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  height: "80px",
                  width: "80px",
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
                  style={{ maxWidth: "90px", maxHeight: "90px" }}
                />
              </div>
              <div
                className="pt-lg-3 justify-content-center align-items-center"
                style={{ color: "#fea201", fontFamily: "Impact" }}
              >
                <p
                  className="namelogo"
                  style={{
                    margin: "0px",
                    padding: "0px",
                    fontSize: "34px",
                    color: "white",
                    lineHeight: "30px",
                  }}
                >
                  USA STUDY <br /> SPECTRUM
                </p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" id="toggle-btn" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ paddingRight: "60px" }}
            className="mx-lg-1"
          >
            <Nav className="ms-auto px-lg-4 px-sm-0 my-2 my-lg-0">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link color-red" : "nav-link"
                }
                id="nav"
                to="/"
                onClick={closeDropdown}
              >
                <b>HOME</b>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link color-red" : "nav-link"
                }
                id="nav"
                to="/about"
                onClick={closeDropdown}
              >
                <b>ABOUT US</b>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link color-red" : "nav-link"
                }
                id="nav"
                to="/studyusa"
                onClick={closeDropdown}
              >
                <b>STUDY USA</b>
              </NavLink>
              <NavDropdown
                className="mx-lg-1 mx-sm-0 fw-bold"
                title={<span className="dp">TEST PREPARATION</span>}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    id="nav"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item color-red" : "dropdown-item"
                    }
                    to="/ielts"
                    onClick={closeDropdown}
                  >
                    IELTS
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    id="nav"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item color-red" : "dropdown-item"
                    }
                    to="/tofel"
                    onClick={closeDropdown}
                  >
                    TOEFL
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    id="nav"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item color-red" : "dropdown-item"
                    }
                    to="/pte"
                    onClick={closeDropdown}
                  >
                    PTE
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    id="nav"
                    className={({ isActive }) =>
                      isActive ? "dropdown-item color-red" : "dropdown-item"
                    }
                    to="/duolingo"
                    onClick={closeDropdown}
                  >
                    DUOLINGO
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link color-red" : "nav-link"
                }
                id="nav"
                to="/contactus"
                onClick={closeDropdown}
              >
                <b>CONTACT</b>
              </NavLink>
            </Nav>

            <NavLink to="/register">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#C80104",
                  border: "none",
                }}
                onClick={closeDropdown}
              >
                Register
              </Button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
