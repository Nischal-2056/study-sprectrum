
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import "../styles/studyaboardform.css"
// import { studyaboardform } from "../axios.service";
import Model from "../components/Model";
export default function StudyAboardForm() {

 const [language_profiency, setlanguageScore] = useState({
   itels: {
     listening: "",
     speaking: "",
     reading: "",
     writing: "",
   },
   tofel: {
     listening: "",
     speaking: "",
     reading: "",
     writing: "",
   },
   pte: {
     listening: "",
     speaking: "",
     reading: "",
     writing: "",
   },
   duolingo: {
     listening: "",
     speaking: "",
     reading: "",
     writing: "",
   },
 });
 const [formerror, setFormerror] = useState({});
 const [isSubmit, setSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => {
      setShowModal(false);
    };
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
const handleInputChange = (exam, skill, value) => {
  setlanguageScore((prevState) => {
    const updatedState = {
      ...prevState,
      [exam]: {
        ...prevState[exam],
        [skill]: value,
      },
    };
    return updatedState;
  });
};


 const handleChange= async(e)=>{
  const {name, value}=e.target;
  setFormData({
    ...data,[name]:value,
  })
 }
 const handleSubmit = async (event) => {
    event.preventDefault();
setFormerror(validate(data));
console.log(formerror);
setSubmit(true);}

//  useEffect(() => {
//    console.log("hello4");
// if (Object.keys(formerror).length === 0 && isSubmit) {
//   const submitForm = async () => {
//     try {
//       // Filter out empty values from language proficiency
//       const filteredLanguageProficiency = Object.keys(
//         language_profiency
//       ).reduce((acc, exam) => {
//         const filledSkills = Object.keys(language_profiency[exam]).reduce(
//           (innerAcc, skill) => {
//             if (language_profiency[exam][skill] !== "") {
//               innerAcc[skill] = language_profiency[exam][skill];
//             }
//             return innerAcc;
//           },
//           {}
//         );
//         if (Object.keys(filledSkills).length > 0) {
//           acc[exam] = filledSkills;
//         }
//         return acc;
//       }, {});

//   //     const response = await studyaboardform("contact/study-abroad/", {
//   //       ...data,
//   //       language_profiency: filteredLanguageProficiency,
//   //     });
//   //     console.log(response);
//   //     console.log("Form submitted successfully");
//   //  setShowModal(true);
//   //     // Assuming you have a function to reset form data, replace setFormData with that function
//   //     setFormData({
//   //       full_name: "",
//   //       address: "",
//   //       contact_number: "",
//   //       passed_year: "",
//   //       gpa_percentage: "",
//   //       faculty: "",
//   //       desired_country: "",
//   //       email: "",
//   //       desired_course: "",
//   //     });
//   //     setlanguageScore({
//   //       itels: {
//   //         listening: "",
//   //         speaking: "",
//   //         reading: "",
//   //         writing: "",
//   //       },
//   //       tofel: {
//   //         listening: "",
//   //         speaking: "",
//   //         reading: "",
//   //         writing: "",
//   //       },
//   //       pte: {
//   //         listening: "",
//   //         speaking: "",
//   //         reading: "",
//   //         writing: "",
//   //       },
//   //       duolingo: {
//   //         listening: "",
//   //         speaking: "",
//   //         reading: "",
//   //         writing: "",
//   //       },
//   //     });
//   //   } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // Call the inner asynchronous function
//   submitForm();
// }
//  }, [formerror, isSubmit]);

   const validate = (values) => {
     console.log("hello3")
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
              className="color-main fs-35 pt-lg-2  pt-5 "
              style={{ color: "0d4a76 " }}
            >
              STUDY ABROAD FORM
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
                          placeholder="Enter Your Full Name"
                          name="full_name"
                          value={data.full_name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{formerror.full_name}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Address"
                          name="address"
                          value={data.address}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{formerror.address}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your Contact"
                          name="contact_number"
                          value={data.contact_number}
                          onChange={handleChange}
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
                          value={data.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <p className="error">{formerror.email}</p>
                    </Col>

                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Passed Year</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter your passed year"
                          name="passed_year"
                          value={data.passed_year}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                      <p className="error">{formerror.passed_year}</p>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>GPA Percentage</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Your GPA / Percentage"
                          name="gpa_percentage"
                          value={data.gpa_percentage}
                          onChange={handleChange}
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
                          value={data.faculty}
                          onChange={handleChange}
                        ></Form.Control>
                        <p className="error">{formerror.faculty}</p>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Desired Country</Form.Label>
                        <Form.Select
                          name="desired_country"
                          value={data.desired_country}
                          onChange={handleChange}
                        >
                          <option>Select Desired Country</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="canada">CANADA</option>
                        </Form.Select>
                        <p className="error">{formerror.desired_country}</p>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group>
                        <Form.Label>Language Proficiency</Form.Label>
                        <Dropdown style={{ width: "100%" }}>
                          <Dropdown.Toggle
                            className="toggle-btn "
                            variant="light"
                          >
                            Language Proficiency
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            className="px-2 py-2"
                            style={{ width: "100%" }}
                          >
                            {Object.keys(language_profiency).map(
                              (exam, index) => (
                                <div key={index}>
                                  <Row className="d-flex flex-column gap-1 ">
                                    <div className="label fs-16 d-flex align-items-center">
                                      <label>{exam.toUpperCase()}</label>
                                    </div>
                                    <div className="inputs d-flex gap-1">
                                      {Object.keys(
                                        language_profiency[exam]
                                      ).map((skill, idx) => (
                                        <input
                                          key={idx}
                                          type="number"
                                          className="form-control fs-16"
                                          placeholder={
                                            skill.charAt(0).toUpperCase() +
                                            skill.slice(1)
                                          }
                                          value={
                                            language_profiency[exam][skill]
                                          }
                                          name={`${exam}_${skill}`}
                                          onChange={(e) =>
                                            handleInputChange(
                                              exam,
                                              skill,
                                              e.target.value
                                            )
                                          }
                                        />
                                      ))}
                                    </div>
                                  </Row>
                                  <hr className="py-1"></hr>
                                </div>
                              )
                            )}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                      <Form.Group className="mb-3">
                        <Form.Label>Desired Course</Form.Label>
                        <Form.Control
                          type="text"
                          name="desired_course"
                          placeholder="Enter Desired Course"
                          value={data.desired_course}
                          onChange={handleChange}
                        ></Form.Control>
                      </Form.Group>
                      <p className="error">{formerror.desired_course}</p>
                    </Col>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <Button
                        className="bg-sec"
                        style={{
                          width: "220px",
                          marginTop: "64px",
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
