
import "../styles/footer.css";
import logos from "../assets/Penlogo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCall } from "react-icons/md";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import {  Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="row content pt-2 ">
          <div className="col-md-6 ">
            <div className="mb-2">
              <div
                style={{
                  backgroundColor: "white",
                  height: "70px",
                  width: "70px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <img
                  src={logos}
                  alt="Logo"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    marginTop: "10px   ",
                  }}
                />
              </div>
            </div>
            <div>
              <h5>Presidential Education Network</h5>
              <div className="contact-info">
                <p>
                  <IoLocationSharp /> Shanitnagar (Next to Aloknagar Gate),
                  Kathmandu, Nepal
                </p>
                <p>
                  <MdOutlineCall /> 010-5904605
                </p>
                <p>
                  <FaRegEnvelopeOpen /> Presedentialedu@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-lg-5 mt-sm-0">
              <p>Office Hours</p>
              <p>Sunday-Friday: 9 AM - 5 PM</p>
            </div>
          </div>
          <div className="col-md-6 mt-lg-5 mt-sm-0">
            <div className="row ">
              <div className="col-md-12 ">
                <b>Links</b>
              </div>
              <div className="col-md-4  ">
                <ul className="p-0 m-0">
                  <li>
                    <Link to="/about" className="nav-link  mx-sm-0">
                      About Us{" "}
                    </Link>
                  </li>
                  <li>TOFEL</li>
                  <li>
                    <Link to="/studyusa" className="nav-link  mx-sm-0">
                      Study in USA
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="p-0 m-0">
                  <li>
                    <Link to="/studycanada" className="nav-link  mx-sm-0">
                      Study in Canada
                    </Link>
                  </li>
                  <li>
                    <Link to="/studyUk" className="nav-link  mx-sm-0">
                      Study in UK
                    </Link>
                  </li>
                  <li>
                    <Link to="/ielts" className="nav-link  mx-sm-0">
                      IELTS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 ">
                <ul className="p-0 m-0 ">
                  <li>
                    <Link to="/pte" className="nav-link  mx-sm-0">
                      PTE
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="nav-link  mx-sm-0">
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="nav-link  mx-sm-0">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 pt-lg-5 pt-2">
              <span className=" p-0 m-0">Social Handles</span>
              <div className="col-md-3 d-flex p-2 ">
                <span className="px-lg-2">
                  <a
                    style={{ color: "white" }}
                     href="https://www.facebook.com/presidentialedunet"
                  >
                    <FaFacebook style={{ height: "40px", width: "40px" }} />
                  </a>
                </span>
                <span>
                  <FaInstagram style={{ height: "40px", width: "40px" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer