import "../styles/duolingo.css";
import Container from "react-bootstrap/Container";


import { FAQ_TEST_DUOLINGO, FAQDUOLINGO } from "../components/FAQ";
import Table from "react-bootstrap/Table";
const Duolingo = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <section className="duoOverview container-fluid pt-lg-5 ">
          <div className="container pt-5 pt-lg-5 pt-sm-3 mt-lg-5 mt-sm-3 d-flex flex-column">
            <span style={{ color: "#fea201" }}>
              <h1 className="fs-35">DUOLINGO : AN OVERVIEW</h1>
            </span>
            <div className=" pt-lg-3 ">
              <p
                style={{
                  fontSize: "14px",
                  width: "100%",
                  textAlign: "start",
                }}
              >
                The Duo Lingo English Test (DET) is a widely recognized and
                accepted English proficiency test designed for non-native
                English speakers. It is often used by educational institutions
                and employers as an alternative to other standardized English
                language tests like the TOEFL and IELTS.
              </p>
            </div>
          </div>
        </section>
        <section className="typesofduolingo d-flex  sec-400  align-items-center container-fluid">
          <div className="container">
            <div className="col-lg-12">
              <h1 className="section-heading  pt-3 fs-35">TYPES OF DUOLINGO</h1>
            </div>
            <p
              className="  col-12 pt-lg-3  d-flex  "
              style={{ fontSize: "14px" }}
            >
              The main objective of the Duolingo English Test (DET) is to
              evaluate overall English skills. The Duolingo English Test does
              not have separate versions for academic or general purposes, in
              contrast to other standardized English examinations such as the
              IELTS, which has both Academic and General Training editions.
              Nonetheless, a lot of businesses and educational institutions
              worldwide accept the Duolingo English Test for admissions
              purposes. It evaluates a test taker's total English language
              ability by analyzing their reading, writing, speaking, and
              listening skills.
            </p>
          </div>
        </section>

        <section
          className="container-fluid  testoverview"
          style={{ backgroundColor: "  #edf0f7" }}
        >
          <div className="container">
            <div className="col-12   ">
              <h1 className="section-heading  pt-3 fs-35">TEST OVERVIEW</h1>
              <p
                className="  col-12 pt-4  d-flex text-center "
                style={{ fontSize: "14px" }}
              >
                Duolingo has been subdivided into four major sections:
                listening, reading, writing, and speaking. It can be clarified
                by the table illustrated below:
              </p>
            </div>
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
                      LITERACY
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0d4a76",
                        color: "#fea201",
                        padding: "5px",
                      }}
                    >
                      COMPHREHENSION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className=" p-lg-3">
                        <p> Score 10-160</p>
                      </div>
                    </td>
                    <td>
                      <div className=" p-lg-3">
                        <p> Score 10-160</p>
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
                      LITERACY
                    </th>
                    <th
                      style={{
                        backgroundColor: "#0d4a76",
                        color: "#fea201",
                        padding: "5px",
                      }}
                    >
                      COMPHREHENSION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className=" p-lg-3">
                        <p> Score 10-160</p>
                      </div>
                    </td>
                    <td>
                      <div className=" p-lg-3">
                        <p> Score 10-160</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
                <tr rowSpan={12} className="border">
                  <td colSpan={12}>
                    <div className="p-lg-3 ">
                      <div className=" fs-18 ">Total Test Time</div>
                      <p className="color-red">
                        <b>1 Hour</b>
                      </p>
                    </div>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
          <div className="container pb-lg-4">
            <div className="col-lg-12">
              <FAQ_TEST_DUOLINGO />
            </div>
          </div>
        </section>

        <section className="container-fluid   pt-lg-5 scoringbasisduolingo">
          <div className="container">
            {" "}
            <h1 className="section-heading d-flex justify-content-center pt-3 fs-35">
              SCORING BASIS IN DUOLINGO
            </h1>
            <p
              className="  d-flex pt-lg-3 d-flex justify-content-center text-align-center  "
              style={{ fontSize: "15px" }}
            >
              Duolingo results are reported on a 160-point scale, covering
              overall scores and individual scores for literacy, comprehension,
              conversation, and production. The scores and their descriptors are
              as follows:
            </p>
            <div className="   d-flex justify-content-between row pt-lg-5">
              <div className="col-md-6  text-center col-sm-12">
                <Table bordered className="table-responsive " responsive="sm">
                  <thead>
                    <tr className="   ">
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        CEFR
                      </th>
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        SCORE SCALE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> A1 and A2</td>
                      <td>10-55</td>
                    </tr>
                    <tr>
                      <td> B1</td>
                      <td>60-85</td>
                    </tr>
                    <tr>
                      <td> B2</td>
                      <td>90-115</td>
                    </tr>
                    <tr>
                      <td> C1</td>
                      <td>120-160</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="col-md-6  text-center col-sm-12">
                <Table bordered className="table-responsive " responsive="sm">
                  <thead>
                    <tr className="  ">
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        SCALE
                      </th>
                      <th
                        style={{ backgroundColor: "#0d4a76", color: "#fea201" }}
                      >
                        SCORE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Basic</td>
                      <td>10-55</td>
                    </tr>
                    <tr>
                      <td> Intermediate</td>
                      <td>60-85</td>
                    </tr>
                    <tr>
                      <td> Upper Intermediate</td>
                      <td>90-115</td>
                    </tr>
                    <tr>
                      <td> Advanced</td>
                      <td>120-160</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        <section className=" container-fluid  mt-lg-4 pt-lg-5">
          <div className=" container pt-4 p-3 ">
            <h2 className="fs-35" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>

            <FAQDUOLINGO />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Duolingo;
