
import "../styles/contact.css";
// import { postMessagenow } from "../axios.service";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import location from "../assets/Place Marker.png"
import call from "../assets/Call.png";
import mail from "../assets/Envelope.png"
import messagesus from "../assets/messagenow.png"
import { postMessagenow } from "../axios.service";
import Model from "../components/Model";
const Contact = () => {
  const initialvalues={first_name:"", last_name:"", email:"", message:"" };
  const [formvalues, setformvalues]=useState(initialvalues);
  const [formerror, setFormerror]=useState({});
  const [isSubmit, setSubmit]=useState(false);
  const handleChange=(e)=>{
console.log("hello1")
    const{name, value}=e.target;
    setformvalues({...formvalues, [name]:value})
   
  }

  const handleSubmit = (e) => {
  
    console.log(formvalues);
    e.preventDefault();
    setFormerror(validate(formvalues));
    console.log(formerror)
    setSubmit(true);
  };


    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
      setShowModal(false);
    };
  const validate=(values)=>{
    console.log("hello3");
    const errors={};
    if(!values.first_name){
      errors.first_name="First Name is required"
    }
     if (!values.last_name) {
       errors.last_name = "Last Name is required";
     }
      if (!values.email) {
        errors.email = "Email is required";
      }
       if (!values.message) {
         errors.message = "Comment is required";
       }
return errors
  }
useEffect(() => {
  console.log("hello4");
  if (Object.keys(formerror).length === 0 && isSubmit) {
    const submitForm = async () => {
      try {
        // Await the testPreparation function call
        const response = await postMessagenow(
          "contact/contact/", // Adjust the URL accordingly
          formvalues
        );

        console.log("Form submitted successfully");
          setShowModal(true);

        // Assuming you have a function to reset form data, replace setFormData with that function
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    // Call the inner asynchronous function
    submitForm();
    setformvalues({
      first_name: "",
      last_name:"",
      email: "",
      message:""
    });
  }
}, [formerror, isSubmit]);

  return (
    <div
      className="container-fluid  "
      style={{ padding: "0px", margin: "0px" }}
    >
      {" "}
      <div className="contactbackground  container-fluid pt-lg-5  ">
        <div className="  mt-lg-5 pt-lg-5 contactdescription container  ">
          <span className="fs-35" style={{ color: "#fea201" }}>
            <h1>CONTACT US</h1>
          </span>

          <div className=" pt-lg-3 ">
            <p style={{ fontSize: "15px", width: "100%", textAlign: "start" }}>
              "Reach out to us at Presidential Education Network, located in
              Santinagar, Kathmandu. We really appreciate your questions, ideas,
              and comments as we work to create a better future. Together, let's
              establish a connection and set off on a path toward superior
              education."
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-lg-5 ">
        <div className="container">
          <span className="d-flex justify-content-center fs-35    color-main ">
            LET US KNOW WHAT WE CAN DO FOR YOU
          </span>

          <div className="card-container border p-3">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-4 px-lg-5 p-3">
                <Card className="text-center align-items-center  justify-content-center">
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center   text-align-center align-items-center"
                      style={{
                        width: "100px", // Adjust the size as needed
                        height: "100px", // Adjust the size as needed
                        borderRadius: "50%",
                        border: "2px solid #FEA201",
                      }}
                    >
                      <Card.Img
                        className="d-flex justify-content-center text-align-center"
                        src={mail}
                        style={{
                          width: "40px",
                          height: "40px",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      ></Card.Img>
                    </div>
                  </Card.Body>

                  <Card.Footer
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <small className="text-muted">
                      Presidentialedu@gmail.com
                    </small>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-md-4 px-lg-5 p-3">
                <Card className="text-center align-items-center  justify-content-center">
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center   text-align-center align-items-center"
                      style={{
                        width: "100px", // Adjust the size as needed
                        height: "100px", // Adjust the size as needed
                        borderRadius: "50%",
                        border: "2px solid #FEA201",
                      }}
                    >
                      <Card.Img
                        className="d-flex justify-content-center text-align-center"
                        src={call}
                        style={{
                          width: "40px",
                          height: "40px",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      ></Card.Img>
                    </div>
                  </Card.Body>

                  <Card.Footer
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <small className="text-muted">015904605</small>
                  </Card.Footer>
                </Card>
              </div>
              <div className="col-md-4 px-lg-5 p-3">
                <Card className="text-center align-items-center  justify-content-center">
                  <Card.Body>
                    <div
                      className="d-flex justify-content-center   text-align-center align-items-center"
                      style={{
                        width: "100px", // Adjust the size as needed
                        height: "100px", // Adjust the size as needed
                        borderRadius: "50%",
                        border: "2px solid #FEA201",
                      }}
                    >
                      <Card.Img
                        className="d-flex justify-content-center text-align-center"
                        src={location}
                        style={{
                          width: "40px",
                          height: "40px",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      ></Card.Img>
                    </div>
                  </Card.Body>

                  <Card.Footer
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <small className="text-muted">
                      {" "}
                      Shantinagar, Kathmandu, Nepal
                    </small>
                  </Card.Footer>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-4 pt-lg-5">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.81217876358193!2d85.34245883574064!3d27.686553735780734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191e581ce6cb%3A0xf6315c3532c7c505!2sInfoTechs%20Nepal!5e0!3m2!1sen!2snp!4v1706155736878!5m2!1sen!2snp"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="container-fluid  pt-4 pt-lg-5 ">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 imgmsg">
              <img src={messagesus} />
            </div>
            <div className="col-md-6">
              <span className="fs-35  color-main">Message Now</span>
              <Row>
                <Card
                  style={{
                    boxShadow:
                      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                    backgroundColor: "#EDF0F7",
                  }}
                >
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col sm="12" md="6" lg="6">
                          <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Your First Name"
                              name="first_name"
                              value={formvalues.first_name}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <p className="error">{formerror.first_name}</p>
                        </Col>
                        <Col sm="12" md="6" lg="6">
                          <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="last_name"
                              placeholder="Enter Your Last Name"
                              value={formvalues.last_name}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <p className="error">{formerror.last_name}</p>
                        </Col>
                        <Col md="12" lg="12">
                          <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter Your  Mail"
                              value={formvalues.email}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <p className="error">{formerror.email}</p>
                        </Col>
                        <Col md="12" lg="12">
                          <Form.Group className="mb-3" controlId="textarea">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                              as="textarea"
                              name="message"
                              style={{ height: "100px" }}
                              placeholder="Enter Your  Message"
                              value={formvalues.message}
                              onChange={handleChange}
                            />
                          </Form.Group>
                          <p className="error">{formerror.message}</p>
                        </Col>
                        <div style={{ width: "100%", textAlign: "center" }}>
                          <Button
                            style={{
                              width: "220px",
                              marginTop: "64px",
                              padding: "5px 0 20px 0",
                              height: "45px",
                              backgroundColor: "#C80104",
                              fontSize: "24px",
                              border: "none",
                            }}
                            type="submit"
                          >
                            Submit
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Row>
              {showModal && <Model closeModal={closeModal} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
