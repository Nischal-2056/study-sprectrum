import "../styles/pte.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import { FAQPTE, FAQ_TEST_PTE } from "../components/FAQ";

const Pte = () => {
    const scoringData = [
      { band: "86-90", description: "Expert User" },
      { band: "79-86", description: "Very Good User" },
      { band: "65-79", description: "Good User" },
      { band: "58-65", description: "Competent User" },
      { band: "50-58", description: "Competent User" },
      {
        band: "43-50",
        description: "Modest User",
      },
      {
        band: "36-43",
        description: "Modest User",
      },
      {
        band: "30-36",
        description: "Limited User",
      },

      // Add more rows as needed
    ];
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <section className="pteOverview container-fluid pt-lg-5 ">
          <div className="container pt-lg-5 pt-5 pt-sm-3 mt-lg-5 mt-sm-3 d-flex flex-column">
            <span>
              <h1 className="fs-35 color-white">PTE : AN OVERVIEW</h1>
            </span>
            <div className=" pt-lg-3 ">
              <p
                style={{
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "start",
                }}
              >
                PTE (Pearson Test of English) is a quick, two-hour
                computer-based English language proficiency test mostly attended
                by scholars who want to peruse their careers in international
                universities where English is considered to be the primary
                language for communication. People choose PTE for multiple
                reasons, primarily to achieve their academic and professional
                goals. Over the years, the attraction towards the PTE exam has
                escalated as it is considered to be accepted by many academic
                institutions around the globe. Also, a fair scoring system,
                quick result delivery, and flexible test dates are some of the
                impressive qualities of the PTE exam that gravitate students
                towards its testing system. PTE is conducted by Pearson PLC
                Group, and its certifications are widely accepted by academic
                institutions like Australia, the USA, the UK, Canada, Ireland,
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid pt-lg-5 pt-2 ">
          <div className="container">
            <div className="col-lg-12">
              <h1 className="section-heading color-main pt-lg-3 fs-35">
                TYPES OF PTE
              </h1>
            </div>
            <p>
              Principally, there are three types of PTE certifications. They are
              mentioned below.
            </p>
            <div className="row pt-lg-4 pt-2 d-flex justify-content-between">
              <div className="col-md-4 p-2">
                <Card
              
                  className="bg-main p-lg-4"
                  style={{
                    color: "white",
                    height: "300px",
                  }}
                >
                  <Card.Body className=" pt-3">
                    <Card.Title style={{ color: "white" }}>
                      PTE Academic
                    </Card.Title>
                    <Card.Text
                      className=""
                      style={{ textAlign: "left", fontSize: "14px" }}
                    >
                      This standard test is mostly preferred by students who
                      want to fulfill the language proficiency requirement of an
                      international academic institution to get admission. It
                      assesses the key language skills of a non-native speaker:
                      speaking, writing, reading, and listening.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 p-2">
                <Card
                  className="p-lg-4 bg-main"
                  style={{
                    
                    color: "white",

                    height: "300px",
                  }}
                >
                  <Card.Body className=" pt-3 bg-main">
                    <Card.Title style={{ color: "white" }}>
                      PTE General
                    </Card.Title>
                    <Card.Text
                      className=""
                      style={{ textAlign: "left", fontSize: "14px" }}
                    >
                      Motivated to assess the general English language
                      proficiency level, this test is mostly preferred by
                      individuals who want to apply for certain jobs,
                      promotions, or immigration purposes. It has six
                      proficiency levels ranging from A1 to C2 (beginner to
                      proficient) and allows individuals to choose the most
                      applicable level based on their situational requirements.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4 p-2">
                <Card
                  className="p-lg-4 bg-main"
                  style={{
                   
                    color: "white",

                    height: "300px",
                  }}
                >
                  <Card.Body className=" pt-2">
                    <Card.Title style={{ color: "white" }}>
                      PTE Young Learners
                    </Card.Title>
                    <Card.Text
                      className=""
                      style={{ textAlign: "left", fontSize: "14px" }}
                    >
                      This test is designed for school-aged children (between 8
                      and 13 years old). It assesses their English proficiency
                      based on three levels: first words (beginner), springboard
                      (elementary), and quick march (intermediate). Similar to
                      the others, this test also measures one’s ability to meet
                      four major communication criteria: listening, speaking,
                      reading, and writing skills. It is conducted in a
                      child-friendly format.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container-fluid   pt-lg-5  mt-lg-5 ptetestoverview"
          style={{ backgroundColor: "  #edf0f7" }}
        >
          <div className="container">
            {" "}
            <h1 className="section-heading d-flex justify-content-center color-main pt-3 fs-35">
              TEST OVERVIEW
            </h1>
            <p
              className="  d-flex pt-lg-3 d-flex justify-content-center text-align-center  "
              style={{ fontSize: "15px" }}
            >
              As PTE is divided into three types, all of them are subdivided
              into three major sections: listening, reading, writing, and
              speaking. It can be clarified by the table illustrated below:
            </p>
            <div className="   d-flex  row pt-lg-5">
              <div className=" text-center col-sm-12">
                <Table bordered className="table-responsive " responsive="sm">
                  <tr className=" border  text-center ">
                    <th
                      className="p-2 border bg-main"
                      colSpan={12}
                      style={{
                       
                        color: "white",
                        border: "2px solid black",
                      }}
                    >
                      PTE ACADEMIC
                    </th>
                  </tr>
                  <tr className="">
                    <th
                      className="p-2 bg-main"
                      style={{
                        
                        color: "white",
                      }}
                    >
                      WRITING & SPEAKING
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0a2870",
                        color: "white",
                      }}
                    >
                      READING
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0a2870",
                        color: "white",
                      }}
                    >
                      Listening
                    </th>
                  </tr>

                  <tbody>
                    <tr>
                      <td>
                        <div className=" p-lg-3">
                          <p> Task (5+2)</p>
                          <p> Time:30mins</p>
                        </div>
                      </td>
                      <td>
                        <div className=" p-lg-3">
                          <p> Task 5</p>
                          <p> Time: 29-30mins</p>
                        </div>
                      </td>
                      <td>
                        <div className=" p-lg-3">
                          <p> Task 8</p>
                          <p> Time: 30-34mins</p>
                        </div>
                      </td>
                    </tr>
                    <tr rowSpan={12} className="border">
                      <td colSpan={12}>
                        <div className="p-lg-3 ">
                          <div className=" fs-18 ">Total Test Time</div>
                          <p className="color-red">
                            <b>2 Hour 15 mins</b>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="container pb-lg-4">
            <div className="col-lg-12">
              <FAQ_TEST_PTE />
            </div>
          </div>
        </section>
        <section className="pt-lg-5 container-fluid  scoringbasispte">
          <div className="container">
            <div className="col-lg-12">
              <h1 className="section-heading  pt-3 fs-35">
                SCORING BASIS IN PTE
              </h1>
            </div>
            <p style={{ fontSize: "14px" }}>
              PTE results are reported on a nine-band scale, covering overall
              band scores and individual scores for listening, reading, writing,
              and speaking. The bands and their descriptors are as follows:
            </p>
            <Table bordered className=" table-responsive" responsive="sm">
              <thead>
                <tr className="text-center">
                  <th
                    colSpan={2}
                    style={{ backgroundColor: "#0a2870", color: "white" }}
                  >
                    SCORING BASIS IN PTE
                  </th>
                </tr>
              </thead>

              <tbody>
                {scoringData.map((row, index) => (
                  <tr className="text-center" key={index}>
                    <td style={row.style}>{row.band}</td>
                    <td style={row.style}>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
        <section className=" container-fluid  mt-lg-4 pt-lg-5">
          <div className=" container pt-4 p-3 ">
            <h2 className="fs-35" style={{ color: "#0a2870" }}>
              FAQ
            </h2>

            <FAQPTE />
          </div>
        </section>
      </Container>
    </>
  );
}

export default Pte