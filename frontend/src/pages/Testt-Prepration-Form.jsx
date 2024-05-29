import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Model from "../components/Model.jsx"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import { testPreparation } from "../axios.service";

export default function TestPreparationForm() {
  const [data, setFormData] = useState({
    full_name: "",
    address: "",
    contact_number: "",
    passed_year: "",
    gpa_percentage: "",
    faculty: "",
    desired_country: "",
    email: "",
    desired_course: "",
  });
  const [formerror, setFormerror] = useState({});
  const [isSubmit, setSubmit] = useState(false);
   const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
      setShowModal(false);
    };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
    console.log("hello1");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormerror(validate(data));
    console.log(formerror);
    setSubmit(true);
 
    console.log("hello2");
  };

  // useEffect(() => {
  //   console.log("hello4");

  //   if (Object.keys(formerror).length === 0 && isSubmit) {
  //     console.log("done");

  //     // Define an inner asynchronous function
  //     const submitForm = async () => {
  //       try {
  //         // Await the testPreparation function call
  //         const response = await testPreparation(
  //           "contact/test-prepration/", // Adjust the URL accordingly
  //           data
  //         );

  //         console.log("Form submitted successfully");
  //          setShowModal(true);

  //         // alert( Model());

  //         // Assuming you have a function to reset form data, replace setFormData with that function
  //       } catch (error) {
  //         console.error("Error submitting form:", error);
  //       }
  //     };

  //     // Call the inner asynchronous function
  //     submitForm();
  //     setFormData({
  //       full_name: "",
  //       address: "",
  //       contact_number: "",
  //       passed_year: "",
  //       gpa_percentage: "",
  //       faculty: "",
  //       desired_country: "",
  //       email: "",
  //       desired_course: "",
  //     });
  //   }
  // }, [formerror, isSubmit]);

  const validate = (values) => {
    console.log("hello3");
    const errors = {};
    if (!values.full_name) {
      errors.full_name = "Full Name is required";
    }
    if (!values.address) {
      errors.address = "Address is required";
    }
    if (!values.contact_number) {
      errors.contact_number = "Contact Number is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
 
    if (!values.passed_year) {
      errors.passed_year = "Passed Year is required";
    }
 
    if (!values.gpa_percentage) {
      errors.gpa_percentage = "GPA/Percentage  is required";
    }


    return errors;
  };

  return (
    <div>
      <Container fluid>
        <Container className="pt-lg-5">
          <div
            className="d-flex w-100 flex-column align-items-center"
            style={{ paddingBottom: "30px" }}
          >
            <span
              className="primary fs-35 pt-5 pt-lg-3"
              style={{ color: "#0d4a76 " }}
            >
              TEST PREPATION FORM
            </span>
            <span style={{ color: "#000000", fontSize: "18px" }}>
              Thank you for choosing to connect with us. Please Take a moment to
              fill out the form.
            </span>
          </div>

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
                      <Form.Group className="mb-3" controlId="fullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="full_name"
                          placeholder="Enter Your Full Name"
                          onChange={handleInputChange}
                          value={data.full_name}
                        />
                      </Form.Group>
                      <p className="error">{formerror.full_name}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          name="address"
                          type="text"
                          placeholder="Enter Your Address"
                          onChange={handleInputChange}
                          value={data.address}
                        />
                      </Form.Group>
                      <p className="error">{formerror.address}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="number"
                          name="contact_number"
                          placeholder="Enter Your Contact"
                          onChange={handleInputChange}
                          value={data.contact_number}
                        />
                      </Form.Group>
                      <p className="error">{formerror.contact_number}</p>
                    </Col>

                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Enter Your Email"
                          onChange={handleInputChange}
                          value={data.email}
                        />
                      </Form.Group>
                      <p className="error">{formerror.email}</p>
                    </Col>

                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Passed Year</Form.Label>
                        <Form.Control
                          placeholder="Select a year"
                          name="passed_year"
                          onChange={handleInputChange}
                          value={data.passed_year}
                        />
                      </Form.Group>
                      <p className="error">{formerror.passed_year}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>GPA Percentage</Form.Label>
                        <Form.Control
                          type="text"
                          name="gpa_percentage"
                          placeholder="Enter Your GPA / Percentage"
                          onChange={handleInputChange}
                          value={data.gpa_percentage}
                        />
                      </Form.Group>
                      <p className="error">{formerror.gpa_percentage}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Faculty</Form.Label>
                        <Form.Control
                          type="text"
                          name="faculty"
                          placeholder="Enter Faculty"
                          onChange={handleInputChange}
                          value={data.faculty}
                        />
                      </Form.Group>

                      <p className="error">{formerror.faculty}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Desired Course</Form.Label>
                        <Form.Control
                          type="text"
                          name="desired_course"
                          placeholder="Enter Desired Course"
                          onChange={handleInputChange}
                          value={data.desired_course}
                        />
                      </Form.Group>
                      <p className="error">{formerror.desired_course}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Desired Country</Form.Label>
                        <Form.Control
                          type="text"
                          name="desired_country"
                          placeholder="Enter Desired Country"
                          onChange={handleInputChange}
                          value={data.desired_country}
                        />
                      </Form.Group>
                      <p className="error">{formerror.desired_country} </p>
                    </Col>
                    {/* <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Desired Country</Form.Label>
                        <Dropdown
                          onSelect={(eventKey) => {
                            const { code, title } = countries.find(
                              ({ code }) => eventKey === code
                            );

                            setSelectedCountry(eventKey);
                            setToggleContents(<>{title}</>);
                          }}
                        >
                          <Dropdown.Toggle
                            id="dropdown-flags"
                            style={{ width: "100%", textAlign: "start" }}
                          >
                            {toggleContents}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {countries.map(({ code, title }) => (
                              <Dropdown.Item key={code} eventKey={code}>
                                {title}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </Col> */}
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <Button
                      className="bg-sec"
                        style={{
                          width: "220px",
                          marginTop: "10px",
                          padding: "5px 0 20px 0",
                          height: "45px",
                          
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
        </Container>
      </Container>
    </div>
  );
}
