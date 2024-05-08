import Card from "react-bootstrap/Card";
import "../styles/uk.css";

import { FAQUK } from "../components/FAQ";
// import visaukimg from "../assets/visauk/Vector.png"
// import visaprocess from "../../public/asset/visaapplication.json";
import {uk} from "../assets/visaapplication.js"
import acamic from "../assets/academic.png"
import { uk_popularcourses } from "../assets/popularcourses.js";
const coursesGroups = Array.from(
  { length: Math.ceil(uk_popularcourses.length / 3) },
  (_, index) => uk_popularcourses.slice(index * 3, index * 3 + 3)
);
const StudyUK = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div className="background-image  studyuk container-fluid pt-lg-5 mt-sm-5 ">
          <div className=" container mt-lg-5 pt-lg-5 pt-3">
            <span style={{ color: "#fea201" }}>
              <h1 className="fs-32">STUDY IN UK</h1>
            </span>

            <div className=" pt-lg-3 row">
              <p
                className="fs-14"
                style={{ width: "100%", textAlign: "start" }}
              >
                In recent years, the United Kingdom has boasted of being one of
                the most renowned study destinations for international students
                due to its strong emphasis on academic excellence and innovative
                culture. Universities in the United Kingdom offer a diverse
                range of courses, which provides students with ample opportunity
                to tailor their education standards to meet their desired
                academic goals. Moreover, the international degree in the United
                Kingdom allows students to delve into a wide range of
                opportunities, which helps them foster the most competitive
                professional career.
              </p>
            </div>
          </div>
        </div>

        <div className="  why-usa  container-fluid pt-lg-5  ">
          <div className="container   ">
            <div className="  pt-3 text-center">
              <h1 className="section-heading fs-35">WHY UK?</h1>
            </div>
            <div className="d-flex row mt-lg-5 px-lg-4 position-relative ">
              <div className=" whyusa_description  row  ">
                <div
                  className="col-11 line position-relative"
                  style={{
                    backgroundColor: "red",
                    marginLeft: "35px",
                    top: "20px",
                    padding: "1px", // Adjust padding for a thinner appearance
                  }}
                ></div>
                <div
                  className="col-md-4  circle "
                  style={{ zIndex: "2", paddingLeft: "30px" }}
                >
                  <div className="outer-circle  d-flex  justify-content-center align-items-center ">
                    <div className="inner-circle"></div>
                  </div>
                </div>
                <div
                  className="col-md-4 circle"
                  style={{ zIndex: "2", paddingLeft: "35px" }}
                >
                  <div className="outer-circle  d-flex  justify-content-center align-items-center">
                    <div className="inner-circle "></div>
                  </div>
                </div>

                <div
                  className="col-md-4 circle"
                  style={{ zIndex: "2", paddingLeft: "40px" }}
                >
                  <div className="outer-circle d-flex  justify-content-center align-items-center ">
                    <div className="inner-circle"></div>
                  </div>
                </div>
              </div>

              <div className="col-md-4   px-3  ">
                <Card
                  style={{
                    maxheight: "360px",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="pb-lg-4"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <b>Superior Education</b>
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className="  d-flex desc  pt-lg-3 "
                    >
                      <p>
                        The United Kingdom has a robust reputation for providing
                        first-class education to international students. Many
                        universities in the UK constantly range among the best
                        in the world, and academic degrees obtained in the UK
                        are widely recognized and respected by academic
                        institutions all around the globe.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-4   px-3  ">
                <Card
                  style={{
                    maxheight: "360px",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="pb-lg-4"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <b> Diverse Range of Programs</b>
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className="  d-flex desc  pt-lg-3 "
                    >
                      <p>
                        UK universities offer a diverse range of courses,
                        including many specialized programs for a particular
                        field. Students can navigate programs that cater to
                        their precise academic and career interests to meet
                        their desired goal by studying the subject of their
                        choice.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4   px-lg-3  ">
                <Card
                  style={{
                    maxheight: "360px",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title
                      className="pb-lg-4"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <b> Post-Study Work Options </b>
                    </Card.Title>
                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className=" d-flex  desc  pt-lg-3   "
                    >
                      <p>
                        The UK has announced post-study work visas that allow
                        international students to work in the country for a
                        limited period of time after completing their studies.
                        This provides an opportunity to gain work experience and
                        explore career options to shape their professional
                        career.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className=" popular-courses container-fluid pt-3 pt-lg-4  ">
          <div className="container  ">
            <div className=" pt-lg-3  text-center">
              <h1 className="section-heading  pt-lg-5 fs-35">
                POPULAR COURSES
              </h1>
            </div>
            <p className="px-3 pt-lg-2" style={{ fontSize: "14px" }}>
              While the UK offers a wide variety of subjects to study for
              students from any academic background, the following is a list of
              some popular courses students mostly prefer to apply to:
            </p>
            {coursesGroups.map((group, groupIndex) => (
              <div key={groupIndex} className=" row mx-auto  mt-4 d-flex      ">
                {group.map((course) => (
                  <div
                    key={course.id}
                    className="col-md-4 p-3 d-flex  coursehover  "
                  >
                    <img
                      className="px-2 "
                      style={{ width: "45px", height: "30px" }}
                      src={course.url}
                    />
                    <p className="px-2">{course.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className=" major-intake  container-fluid pt-lg-5 p-lg-5">
          <div className="container ">
            <div className="    text-center pt-lg-4">
              <h1 className="section-heading fs-35">MAJOR INTAKE</h1>
            </div>
            <div className=" d-flex row justify-content-between pt-3 p-lg-4">
              <p className="fs-15">
                Usually, there are two major intakes that offer a wide range of
                study options for international students. However, some of the
                institutions in the UK also offer flexible intakes, like Summer
              </p>
              <div className="col-md-4   ">
                <Card
                  className="mb-2 text-center "
                  style={{ backgroundColor: "#0d4a76" }}
                >
                  <p
                    style={{
                      color: "#fea201",
                      fontSize: "18px",
                      marginBottom: "0px",
                      margin: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    FALL
                  </p>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white  ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>Septemer/October</p>
                  </Card.Header>
                </Card>
              </div>
              <div className="col-md-4  ">
                <Card
                  className="mb-2 text-center "
                  style={{ backgroundColor: "#0d4a76" }}
                >
                  <p
                    style={{
                      color: "#fea201",
                      fontSize: "18px",
                      marginBottom: "0px",
                      margin: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    SPRING
                  </p>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white  ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>Janurary/February</p>
                  </Card.Header>
                </Card>
              </div>
              <div className="col-md-4   ">
                <Card
                  className="mb-2 text-center color-red"
                  style={{ backgroundColor: " #c80104" }}
                >
                  <p
                    style={{
                      color: "white",
                      fontSize: "18px",
                      marginBottom: "0px",
                      margin: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    SUMMER
                  </p>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>August/Septemer</p>
                  </Card.Header>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-lg-3 p-2 p-lg-5 academicrequirments">
          <div className="pt-lg-5 d-flex justify-content-center align-items-center flex-column container">
            <div className="col-12 pt- text-center">
              <h1 className="section-heading pt-3 fs-35">
                ACADEMIC REQUIREMENTS
              </h1>
            </div>
            <Card
              className="mt-lg-5 p-lg-4  align-items-center justify-content-center"
              style={{
                backgroundColor: "#0d4a76",
                color: "white",
              }}
            >
              <Card.Body className="d-flex align-items-center  col-lg-10  col-sm-12 justify-content-center">
                <span>
                  <Card.Img
                    className="academicimg"
                    src={acamic}
                    style={{ width: "70px", height: "80px" }}
                  />
                </span>
                <span>
                  <Card.Text className="px-lg-2 fs-14" style={{}}>
                    Based on the institution and the courses the student
                    chooses, universities in the United Kingdom typically accept{" "}
                    <span style={{ color: "#fea201", fontSize: "17px" }}>
                      <b>2.6 to 3.0 </b>
                    </span>
                    on the scale of 4.0 GPA.
                  </Card.Text>
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className=" pt-lg-5   languageproficiency ">
          <div className="container p-lg-4">
            <div className="col-12   text-center">
              <h1 className="section-heading  pt-3 fs-35">
                LANGUAGE PROFICIENCY
              </h1>
            </div>

            <p
              className="  col-12 pt-4 p-lg-4   "
              style={{ fontSize: "15px", lineHeight: "25px" }}
            >
              Preferably, the UK Visa and Immigration Authority (UKVI) requires
              an IELTS score of 6.5 overall and 6.0 in each band to enroll in
              the academic institutions. As per the PTE test, the student must
              have an overall score of 59 for a UK visa. Alternatively, some
              institutions may accept applications from students who have a
              medium of instruction in English and have secured at least a B+ in
              English.
            </p>
          </div>
        </div>

        <div className="  pt-lg-5  container-fluid scholarshipUK p-lg-5 ">
          <div className="  container p-4 ">
            <div className="  text-center">
              <h1 className="section-heading  pt-3 fs-35">SCHOLARSHIP IN UK</h1>
            </div>
            <div className="col-12  p-lg-4 ">
              <p
                className="     "
                style={{ fontSize: "15px", width: "100%", lineHeight: "25px" }}
              >
                Scholarships at UK institutions are very common among
                international students if they plan ahead for their applications
                before the deadline. Depending upon the criteria, chosen
                courses, and university policy, students may receive 100%
                scholarships, which are mostly funded by the UK government. Some
                of the common scholarships are the Chevening Scholarship (based
                on academic excellence), the Erasmus Mundus Scholarship (for
                competent students), and the Commonwealth Split-Site
                Scholarships (mainly for PhD students).
              </p>
            </div>
          </div>
        </div>
        <div className="  pt-lg-5 container-fluid   visaUK ">
          <div className="  container pt-4 ">
            <div className="row  text-center">
              <h1 className="section-heading  pt-3 fs-35">
                VISA APPLICATION PROCESS
              </h1>
            </div>
            <div className="pt-lg-5">
              {uk.map((index) => (
                <Card
                  key={index.id}
                  className="m-2 p-lg-2 "
                  style={{ backgroundColor: "#edf0f7", width: "100%" }}
                >
                  <Card.Body className="d-flex p-lg-2">
                    <img
                      src={index.url}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <Card.Text className="px-lg-2">
                      <b> {index.step}:</b>
                      <span className="p-lg-2  " style={{ width: "90%" }}>
                        {index.definition}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="  container-fluid  jobUK pt-lg-5  ">
          <div className="backimage"></div>
          <div className=" container jobcontent ">
            <div className="row  text-center ">
              <h1
                className="section-heading  pt-3 fs-35"
                style={{ color: "#fea201" }}
              >
                JOB OPPORTUNITIES IN UK
              </h1>
            </div>
            <div className="col-md-8 col-sm-12">
              <p
                className=" pt-4"
                style={{ fontSize: "15px", lineHeight: "30px", color: "white" }}
              >
                The visa issued to most of the Tier-4 Nepalese students only
                allows them to work 20 hours per week in the term period and
                full-time during the vacation period if they have completed
                level 6 or above. However, if the student’s academics are below
                the HEI level, he or she is only allowed to work for 10 hours a
                week. Students below level 6 are not allowed to work in the UK.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="  pt-lg-5   container-fluid    faq ">
          <div className=" container pt-4 p-3 ">
            <h2 className="fs-35" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>

            <FAQUK />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyUK;
