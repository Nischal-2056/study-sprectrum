
import "../styles/Ielts.css";

import Card from "react-bootstrap/Card";

import Table from "react-bootstrap/Table";
import { FAQ_TEST_IELTS, FAQIELTS } from "../components/FAQ";

const IELTS = () => {const scoringData = [
  { band: "Band 9", description: "Expert User" },
  { band: "Band 8", description: "Very Good User" },
  { band: "Band 7", description: "Good User" },
  { band: "Band 6", description: "Competent User" },
  { band: "Band 5", description: "Modest User" },
  { band: "Band 4", description: "Not Applicable", style: { color: "red", width:"50%" } },
  // Add more rows as needed
];
  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: "0px", margin: "0px" }}
      >
        <div className=" ieltsbackimage container-fluid pt-lg-5 ">
          <div className="container pt-5 pt-lg-5 mt-lg-5 d-flex flex-column    ">
            <span style={{ color: "#fea201" }}>
              <h1 className="fs-35">IELTS : AN OVERVIEW</h1>
            </span>

            <div className=" pt-lg-3 ">
              <p
                style={{
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "start",
                }}
              >
                The IELTS exam is jointly owned and administered by the British
                Council, IDP Australia, and Cambridge University Press. Being a
                standardized test that measures one’s English language
                proficiency, IELTS is accepted by more than 12,000 organizations
                around the globe in more than 140 countries. IELTS stands for
                International English Language Testing System.
                <br></br>
                <br></br>
                It is one of the most widely recognized English language
                proficiency tests that assesses an individual’s ability to
                understand, interpret, and communicate by analyzing four key
                language skills: listening, reading, writing, and speaking.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="   container-fluid d-flex pt-lg-4   ">
          <div className="container ">
            <BreadcrumbUSA />
          </div>
        </div> */}

        <div className="  pt-lg-5 typeofielts container-fluid ">
          <div className=" container  p-lg-3 ">
            <div className=" row text-center">
              <h1 className="section-heading  pt-3 fs-35">TYPE OF IELTS</h1>
              <p
                className=" px-lg-2 pt-3 "
                style={{ fontSize: "15px", width: "100%", lineHeight: "25px" }}
              >
                Depending upon the area of implication, there are two major
                types of IELTS: academic and general training.
              </p>
            </div>

            <div className="row pt-4  d-flex justify-content-between">
              <div className="col-md-5 ">
                <Card
                  className="p-lg-4"
                  style={{
                    height: "240px",
                    backgroundColor: " #0d4a76",
                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-3 p-lg-2">
                    <Card.Title style={{ color: "#fea201" }}>
                      IELTS ACADEMIC
                    </Card.Title>
                    <Card.Text
                      className="pt-lg-2"
                      style={{ textAlign: "left" }}
                    >
                      IELTS academic is typically designed for individuals who
                      want to apply for undergraduate and graduate programs in
                      an English-speaking environment. It ensures the capacity
                      of a student to adapt in an academic environment where
                      English is used as the primary language for communication.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-5  mt-2 ">
                <Card
                  className="p-lg-4"
                  style={{
                    height: "240px",
                    backgroundColor: " #0d4a76",
                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-2">
                    <Card.Title style={{ color: "#fea201" }}>
                      IELTS GENERAL TRAINING
                    </Card.Title>
                    <Card.Text className="pt-2" style={{ textAlign: "left" }}>
                      IELTS General Training is the version of IELTS that is
                      designed for people who are planning to migrate and join
                      employment in an English-speaking country. Unlike IELTS
                      academic, it assesses English language skills in a
                      practical, everyday context.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-lg-5  container-fluid testoverview ">
          <div className=" container">
            <div className="col-12   text-center">
              <h1 className="section-heading  pt-3 fs-35">TEST OVERVIEW</h1>
              <p
                className="  col-12 pt-4  d-flex text-center "
                style={{ fontSize: "15px" }}
              >
                Both IELTS academic and general training are subdivided into
                four major sections: listening, reading, writing, and speaking.
                It can be clarified by the table illustrated below:
              </p>
            </div>

            <div className="   row justify-content-center align-item-center m-lg-4 ">
              <div className="table-responsive">
                <Table
                  bordered
                  className=" table-responsive text-center  border "
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          backgroundColor: "#0d4a76",
                          color: "#fea201",
                          padding: "4px",
                        }}
                      >
                        Listening (Acamdemic & General)
                      </th>
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        Reading(Academic)
                      </th>
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        Writing (Academic)
                      </th>
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        Speaking (Acamdemic & General)
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex  pt-lg-4 flex-column ">
                          <div className="pt-lg-5">
                            <div>4 parts, 40 items</div>
                            <div>Time : 30mins</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex flex-column">
                          <div className="p-lg-4 ">
                            <div className=" ">3 sections, 40 items</div>
                            <div>Time : 60mins</div>
                          </div>

                          <td
                            className="p-lg-2 "
                            style={{
                              backgroundColor: "#0d4a76",
                              color: "#fea201",
                            }}
                          >
                            Speaking (Acamdemic & General)
                          </td>
                          <div className="  p-lg-4 ">
                            <div>3 sections, 40 items</div>
                            <div>Time : 60mins</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex flex-column">
                          <div className="p-lg-4 ">
                            <div className=" ">3 sections, 40 items</div>
                            <div>Time : 60mins</div>
                          </div>

                          <td
                            className="p-lg-2 "
                            style={{
                              backgroundColor: "#0d4a76",
                              color: "#fea201",
                            }}
                          >
                            Speaking (Acamdemic & General)
                          </td>
                          <div className="  p-lg-4 ">
                            <div>3 sections, 40 items</div>
                            <div>Time : 60mins</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex  justify-content-center align-items-center pt-lg-4 flex-column">
                          <div className="pt-lg-5">
                            <div>4 parts, 4000 items</div>
                            <div>Time : 30mins</div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr rowSpan={12} className="border">
                      <td colSpan={12}>
                        <div className="p-lg-4 ">
                          <div className=" fs-18 ">Total Test Time</div>
                          <p className="color-red">
                            <b>2 hrs 44 mins</b>
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        <div className="  pt-lg-5  container-fluid  totaltest  ">
          <div className="  pt-lg-3 container   ">
            <div className="col-12   ">
              <h1 className="section-heading  pt-3 fs-35">
                IELTS TOTAL TEST DURATION
              </h1>
            </div>

            <p
              className="  col-10 pt-lg-4  d-flex  "
              style={{ fontSize: "15px" }}
            >
              Both IELTS academic and general training are subdivided into four
              major sections: listening, reading, writing, and speaking. It can
              be clarified by the table illustrated below:
            </p>
            <div className="col-md-10   ">
              <FAQ_TEST_IELTS />
            </div>
          </div>
        </div>
        <div className="  pt-lg-5 container-fluid   scoringbasisielts ">
          <div className=" container text-center p-lg-3">
            <div className="col-12   ">
              <h1 className="section-heading  pt-3 fs-35">
                SCORING BASIS IN IELTS
              </h1>
            </div>
            <p className="  col-12  " style={{ fontSize: "15px" }}>
              IELTS results are reported on a nine-band scale, covering overall
              band scores and individual scores for listening, reading, writing,
              and speaking. The bands and their descriptors are as follows:
            </p>

            <Table bordered className=" table-responsive" responsive="sm">
              <thead>
                <tr className="text-center">
                  <th
                    colSpan={2}
                    style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                  >
                    SCORING BASIS IN IELTS
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
        </div>
        <div className="  pt-lg-5   container-fluid    faq ">
          <div className=" container pt-4 p-3">
            <h2 className="fs-35" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>

            <FAQIELTS />
          </div>
        </div>
      </div>
    </>
  );
};
export default IELTS;
