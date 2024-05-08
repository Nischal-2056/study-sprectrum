import "../styles/tofel.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { FAQTOFEL, FAQ_TEST_TOFEL } from "../components/FAQ";

const Tofel = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <section className="tofelOverview container-fluid pt-lg-5">
          <div className="container pt-lg-5 pt-5 pt-sm-3 mt-lg-5 mt-sm-3 d-flex flex-column">
            <span style={{ color: "#fea201" }}>
              <h1 className="fs-35">TOFEL : AN OVERVIEW</h1>
            </span>
            <div className=" pt-lg-3 ">
              <p
                style={{
                  fontSize: "15px",
                  width: "100%",
                  textAlign: "start",
                }}
              >
                The TOEFL, or Test of English as a Foreign Language, is a
                standardized assessment tool used to measure non-native English
                speakers' level of language competency. English-speaking
                institutions and colleges frequently utilize it as a
                prerequisite for entrance, especially in the US. The four
                language abilities required for efficient communication—reading,
                listening, speaking, and writing—are evaluated in the TOEFL
                exam.
              </p>
            </div>
          </div>
        </section>
        <section className="typesoftofel d-flex   align-items-center container-fluid">
          <div className="container">
            <div className="col-lg-12">
              <h1 className="section-heading  pt-3 fs-35">TYPES OF TOFEL</h1>
            </div>
            <p
              className="  col-12 pt-lg-3  d-flex  "
              style={{ fontSize: "14px" }}
            >
              Based on exam categories The test is available in three formats:
              paper version (PBT), computer version (CBT), and internet version
              (iBT).
            </p>
          </div>
        </section>
        <section
          className="container-fluid testoverview pt-lg-5 mt-lg-5 "
          style={{ backgroundColor: "  #edf0f7" }}
        >
          <div className="conatiner"></div>
          <div className="container">
            <div className="col-12   ">
              <h1 className="section-heading  pt-lg-3 fs-35">TEST OVERVIEW</h1>
              <p
                className="  col-12 pt-4  d-flex text-center "
                style={{ fontSize: "14px" }}
              >
                Both TOEFL academic and general training are subdivided into
                four major sections: listening, reading, writing, and speaking.
                It can be clarified by the table illustrated below:
              </p>
            </div>
            <div className="  d-flex row pt-lg-2">
              <div className="table-responsive">
                <Table
                  bordered
                  className="tabel-responsive text-center border "
                  responsive="sm"
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          backgroundColor: "#0d4a76",
                          color: "#fea201",
                          padding: "5px",
                        }}
                      >
                        READING
                      </th>
                      <th
                        style={{
                          backgroundColor: "#0d4a76",
                          color: "#fea201",
                          padding: "5px",
                        }}
                      >
                        LISTENING
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className=" p-lg-3">
                          <p>2 Sections, 20 items</p>
                          <p>Time: 60-80 mins</p>
                        </div>
                      </td>
                      <td>
                        <div className=" p-lg-3">
                          <p>2-3 Sections, 28 items</p>
                          <p>Time: 60-90 mins</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th
                        style={{
                          backgroundColor: "#0d4a76",
                          color: "#fea201",
                          padding: "5px",
                        }}
                      >
                        SPEAKING
                      </th>
                      <th
                        style={{
                          backgroundColor: "#0d4a76",
                          color: "#fea201",
                          padding: "5px",
                        }}
                      >
                        WRITING
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className=" p-lg-3">
                          <p>4 task</p>
                          <p>Time: 20 mins</p>
                        </div>
                      </td>
                      <td>
                        <div className=" p-lg-3">
                          <p>2 tasks</p>
                          <p>Time: 50 mins</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tr rowSpan={12} className="border">
                    <td colSpan={12}>
                      <div className="p-lg-3 ">
                        <div className=" fs-18 ">Total Test Time</div>
                        <p className="color-red">
                          <b>4 Hour</b>
                        </p>
                      </div>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
          </div>

          <div className="container pb-lg-4">
            <div className="col-lg-12">
              <FAQ_TEST_TOFEL />
            </div>
          </div>
        </section>
        <section className="container-fluid testoverview p-lg-5 p-sm-3">
          <div className="container">
            <div className="col-12   ">
              <h1 className="section-heading  pt-3 fs-35">SCORING BASIS</h1>
              <p
                className="  col-12 pt-4  d-flex "
                style={{ fontSize: "15px" }}
              >
                TOEFL results are reported on a 0-120 score range, covering
                every exam part with a score range of 0 to 30, i.e., listening,
                reading, writing, and speaking. The bands and their descriptors
                are as follows:
              </p>
            </div>
          </div>
          <div className="container">
            <div className="table-responsive">
              <Table bordered className="tabel-responsive text-center border">
                <thead>
                  <tr>
                    <th
                      style={{
                        backgroundColor: "#0d4a76",
                        color: "#fea201",
                        padding: "5px",
                      }}
                    >
                      SKILLS
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0d4a76",
                        color: "#fea201",
                        padding: "5px",
                      }}
                    >
                      ABILITY
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0d4a76",
                        color: "#fea201",
                        padding: "5px",
                      }}
                    >
                      SCORE
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="text-center align-middle"
                      rowSpan={4}
                      style={{ verticalAlign: "middle" }}
                    >
                      Reading
                    </td>
                    <td>High</td>
                    <td>22-30</td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td>15-21</td>
                  </tr>
                  <tr>
                    <td>Low</td>
                    <td>0-14</td>
                  </tr>{" "}
                </tbody>
                <tbody>
                  <tr>
                    <td
                      className="text-center align-middle"
                      rowSpan={4}
                      style={{ verticalAlign: "middle" }}
                    >
                      Listening
                    </td>
                    <td>High</td>
                    <td>22-30</td>
                  </tr>
                  <tr>
                    <td>Intermediate</td>
                    <td>14-21</td>
                  </tr>
                  <tr>
                    <td>Low</td>
                    <td>0-14</td>
                  </tr>{" "}
                </tbody>
                <tbody>
                  <tr>
                    <td
                      className="text-center align-middle"
                      rowSpan={4}
                      style={{ verticalAlign: "middle" }}
                    >
                      Speaking
                    </td>
                    <td>Good</td>
                    <td>26-30</td>
                  </tr>
                  <tr>
                    <td>Fair</td>
                    <td>18-30</td>
                  </tr>
                  <tr>
                    <td>Limited</td>
                    <td>10-17</td>
                  </tr>
                  <tr>
                    <td>Weak</td>
                    <td>0-16</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="fbold">Total</td>
                    <td  className ="fbold "  colSpan={2} >0-120</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </section>
        <section className=" container-fluid  mt-lg-4 pt-lg-5">
          <div className=" container pt-4 p-3 ">
            <h2 className="fs-35" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>

            <FAQTOFEL />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Tofel;
