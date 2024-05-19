
import "../styles/studyUSA.css";
import Card from "react-bootstrap/Card";
import { usa } from "../assets/visaapplication.js";
import Table from "react-bootstrap/Table";
import { FAQUSA } from "../components/FAQ";
import acamic from "../assets/academic.png";
import { usa_popularcourses } from "../assets/popularcourses.js";


const coursesGroups = Array.from(
  { length: Math.ceil(usa_popularcourses.length / 3) },
  (_, index) => usa_popularcourses.slice(index * 3, index * 3 + 3)
);
const Studyusa = () => {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0px" }}>
        <div className=" bgimage studyusa container-fluid pt-lg-5 mt-sm-5  ">
          <div className="   pt-2 mt-lg-5 pt-lg-5 container  ">
            <span style={{ color: "white" }}>
              <h1 className="fs-32">STUDY IN USA</h1>
            </span>
            <div
              className=" pt-lg-3 row "
              style={{ fontFamily: "Italianno, cursive" }}
            >
              <h2>A land of opportunity and freedom</h2>
            </div>
            <div className=" pt-lg-3 row">
              <p
                className=" fs-14 "
                style={{
                  width: "100%",
                  textAlign: "start",
                }}
              >
                The United States offers a supreme opportunity for academic
                improvement, cultural involvement, and personal development.
                Renowned for its outstanding educational institutions, advanced
                coaching methods, and diverse student communities, the USA
                stands as an inspiration for ambitious students seeking a
                transformative learning experience. Embracing a spirit of
                academic excellence and innovation, pursuing studies in the USA
                promises a journey of discovery and endless possibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="  why-usa pt-2  container-fluid pt-lg-5 ">
          <div className=" container-fluid  px-lg-4  ">
            <div className="   text-center">
              <h1 className="section-heading fs-35 color-main">WHY USA ?</h1>
            </div>
            <div className="d-flex row mt-lg-5  position-relative ">
              <div className=" whyusa_description  row ">
                <div
                  className="col-11  line position-relative"
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

              <div className="col-md-4    ">
                <Card
                  style={{
                    maxheight: "360px",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="pb-lg-4">
                      <b>Academic Excellence</b>
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className="  d-flex align-content-center justify-content-center pt-lg-3 "
                    >
                      <p>
                        The USA boasts a world-renowned education system, with
                        top-ranking universities offering a wide array of
                        programs. These institutions are known for their
                        cutting-edge research facilities, expert faculty, and
                        innovative teaching methods, ensuring a high-quality
                        education that's recognized worldwide.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-4     ">
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
                        fontWeight: "bold !important",
                      }}
                    >
                      Diverse Range of Programs
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className="  d-flex align-content-center justify-content-center pt-lg-3 "
                    >
                      <p>
                        American universities provide a vast range of programs
                        and majors, allowing students to tailor their education
                        to their interests and career goals. Whether it's STEM
                        fields, liberal arts, business, or specialized courses,
                        there's an extensive selection to choose from.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4   ">
                <Card
                  style={{
                    maxheight: "360px",
                    border: "none",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="pb-lg-4 ">
                      Opportunities for Research & Innovation
                    </Card.Title>
                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className=" d-flex align-content-center justify-content-center pt-lg-3  "
                    >
                      <p>
                        The USA is at the forefront of groundbreaking research
                        and technological advancements. Students have access to
                        state-of-the-art labs, resources, and opportunities to
                        collaborate on pioneering projects, fostering creativity
                        and innovation.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className=" popular-courses container-fluid  pt-lg-5 ">
          <div className="container">
            <div className="col-12     text-center">
              <h1 className="section-heading fs-35 pt-lg-5 ">
                POPULAR COURSES
              </h1>
            </div>{" "}
            <span>
              <p className="fs-14 pt-lg-3 pt-sm-2">
                While the USA offers a wide variety of subjects to study for
                students from any academic background, the following is a list
                of some popular courses students mostly prefer to apply to:
              </p>
            </span>
            {coursesGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className=" row  d-flex  mt-lg-4 d-flex  pt-lg-4     "
              >
                {group.map((course) => (
                  <div
                    key={course.id}
                    className="col-md-4  d-flex   coursehover "
                  >
                    <img
                      className="px-2 "
                      style={{ width: "45px", height: "30px" }}
                      src={course.url}
                    />
                    <p className="px-2 fs-14">{course.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className=" major-intake  container-fluid   pt-lg-5 ">
          <div className=" container ">
            <div className="    text-center">
              <h1 className="section-heading fs-32">MAJOR INTAKE</h1>
            </div>
            <div className="d-flex row  pt-lg-5 justify-content-between ">
              <p className="fs-14 " style={{ fontSize: "15px" }}>
                Most of the colleges and universities in the United States start
                enrollment for the major three intakes.
              </p>
              <div className="col-md-4   ">
                <Card
                  className="mb-2 text-center "
                  style={{ backgroundColor: "  #0a2870 " }}
                >
                  <Card.Text>
                    <p
                      className=" "
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
                  </Card.Text>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>August/Septemer</p>
                  </Card.Header>
                  <Card.Header className="bg-white ">
                    <p>
                      <b style={{ color: " #b31942" }}>Application Deadline</b>
                    </p>
                    <p>December/January</p>
                  </Card.Header>
                </Card>
              </div>
              <div className="col-md-4  ">
                <Card
                  className="mb-2 text-center "
                  style={{ backgroundColor: "#0a2870" }}
                >
                  <Card.Text>
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
                  </Card.Text>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>January</p>
                  </Card.Header>
                  <Card.Header className="bg-white ">
                    <p>
                      <b style={{ color: "#b31942" }}>Application Deadline</b>
                    </p>
                    <p>May/June</p>
                  </Card.Header>
                </Card>
              </div>
              <div className="col-md-4   ">
                <Card
                  className="mb-2 text-center "
                  style={{ backgroundColor: " #0a2870" }}
                >
                  <Card.Text>
                    <p
                      className=""
                      style={{
                        color: "#fea201",
                        fontSize: "18px",
                        marginBottom: "0px",
                        margin: "5px",
                        fontWeight: "bold",
                      }}
                    >
                      SUMMER
                    </p>
                  </Card.Text>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>May</p>
                  </Card.Header>
                  <Card.Header className="bg-white ">
                    <p>
                      <b style={{ color: " #b31942" }}>Application Deadline</b>
                    </p>
                    <p>September/October</p>
                  </Card.Header>
                </Card>
              </div>{" "}
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
              className="mt-lg-5 p-lg-4 bg-main  align-items-center justify-content-center"
              style={{
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
                  <Card.Text
                    className="px-lg-2"
                    style={{ width: "", fontSize: "15px" }}
                  >
                    Based on the institution and the courses the student
                    chooses, universities in the United States typically accept{" "}
                    <span
                      className="color-secondary"
                      style={{ fontSize: "17px" }}
                    >
                      <b>2.6 to 3.0 </b>
                    </span>
                    on the scale of 4.0 GPA.
                  </Card.Text>
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="   container-fluid  pt-lg-5   languageproficiency ">
          <div className="container ">
            <div className="col-12   text-center">
              <h1 className="section-heading fs-35 pt-3">
                LANGUAGE PROFICIENCY
              </h1>
            </div>

            <p
              className="    mx-auto  col-11 d-flex justify-content-center align-items-center pt-4    "
              style={{ fontSize: "14px" }}
            >
              Ideally, students must have a 6.5 overall score in IELTS with a
              band score not less than 6. However, some of the institutions can
              take 6 into consideration based on the student’s profile. To
              obtain the scholarships, students might have to score an overall
              score of 7.0, with each band score not less than 6.5.
            </p>
            <div className=" mx-auto pt-4 col-10 d-flex justify-content-center align-items-center ">
              <Table
                bordered
                className="  text-center"
                style={{ tableLayout: "fixed" }}
              >
                <thead>
                  <tr>
                    <th className="bg-main  color-white">TEST</th>
                    <th className="bg-main  color-white">OVERALL SCORE</th>
                    <th className="bg-main  color-white">EACH BAND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TOFEL</td>
                    <td>100</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>PTE</td>

                    <td>58-65</td>
                    <td>59</td>
                  </tr>
                  <tr>
                    <td>DUOLINGO</td>
                    <td>120</td>
                    <td>100</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="     container-fluid pt-lg-5 scholarshipinUSa ">
          <div className="  container  p-lg-3 ">
            <div className="row  text-center pt-2">
              <h1 className="section-heading  pt-lg-3 fs-35">
                SCHOLARSHIP IN USA
              </h1>
              <p
                className="  pt-3 "
                style={{ fontSize: "15px", lineHeight: "25px" }}
              >
                Although tuition fees in the United States are relatively higher
                than in other countries, students can apply for different
                scholarship programs to support their studies financially.
                Students might have to score better in exams like the SAT and
                ACT to claim merit-based scholarships. Students must have a GPA
                of at least 3.0 to claim scholarships for Bachelor's and
                master's programs.
              </p>
            </div>

            <div className="row pt-4 d-flex justify-content-between">
              <div className="col-md-5 mt-lg-3">
                <Card
                  className="p-lg-4 bg-main"
                  style={{
                    height: "260px",

                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-2">
                    <Card.Title className="color-secondary">
                      Merit-Based Scholarship
                    </Card.Title>
                    <Card.Text
                      className="pt-2 fs-14"
                      style={{ textAlign: "left" }}
                    >
                      The most common scholarship for international students,
                      these scholarships are granted to the students based on
                      their academic performance, extracurricular activities,
                      and leadership skills. Some examples of merit-based
                      scholarships are the Foreign Fullbright Scholarship
                      Program and the Hubert Humphrey Fellowship Program.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-5  mt-3 ">
                <Card
                  className="p-lg-4 bg-main"
                  style={{
                    height: "260px",

                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-2">
                    <Card.Title className="color-secondary">
                      Need Based Scholarship
                    </Card.Title>
                    <Card.Text
                      className="pt-2 fs-14"
                      style={{ textAlign: "left" }}
                    >
                      Provided to the students who have weak financial
                      backgrounds and justifiable financial hardships to
                      continue their studies. These scholarships are often
                      funded by the US government, institutions, and
                      organizations in order to support underprivileged students
                      who can’t afford to pay tuition fees.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="      container-fluid pt-lg-5 pt-sm-3 pt-2 visausa ">
          <div className=" container ">
            <div className="  text-center">
              <h1 className="section-heading  color-main pt-3 fs-32">
                VISA APPLICATION PROCESS
              </h1>
            </div>
            <div className="pt-4">
              {usa.map((index) => (
                <Card
                  key={index.id}
                  className=" m-2   p-lg-2"
                  style={{ backgroundColor: "#edf0f7", width: "100%" }}
                >
                  <Card.Body className="d-flex  p-lg-2 ">
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
            <p className="p-2 fs-15 fw-bold">
              Congratulations on your visa. If you are refused, you can reapply
              with the same SEVIS fee, which is valid for one year.
            </p>
          </div>
        </div>

        <div className="    container-fluid jobusa pt-lg-5  mt-lg-5  ">
          <span className="usabackimage"></span>
          <div className=" container jobcontent ">
            <div className="  text-center">
              <h1
                className="section-heading  pt-3 fs-35"
                style={{ color: "white" }}
              >
                JOB OPPORTUNITIES IN USA
              </h1>
            </div>
            <div>
              <div className="col-md-10 col-sm-12">
                <p
                  className=" pt-lg-3"
                  style={{
                    fontSize: "15px",
                    lineHeight: "30px",
                    color: "white",
                  }}
                >
                  F-1 Students with active SEVIS status can apply for on-campus
                  or off-campus jobs that have a direct affiliation with the
                  academic institution. Students can contact the Designated
                  School Official (DSO) to gain an approval letter from the
                  employer so that they can apply for the Social Security Number
                  (SSN). Typically, students can apply for jobs like
                  receptionist, teaching assistant, library assistant, barista,
                  and research assistant.
                  <br />
                  <p
                    className="pt-lg-3 pt-sm-0"
                    style={{
                      fontSize: "15px",
                      lineHeight: "30px",
                      color: "white",
                    }}
                  >
                    All the F-1 students can work up to 20 hours per week for
                    both on-campus and off-campus jobs. On-campus jobs can be
                    applied for 30 days before the class starts, whereas
                    off-campus jobs can only be applied after completing one
                    full academic year and must be qualified by the Department
                    of Homeland Security’s emergent circumstances (example:
                    financial hardships).
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="  container-flud pt-lg-5     faq ">
          <div className=" container pt-4  ">
            <div className="row  text-center"></div>

            <h2 className="fs-35  color-main" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>

            <FAQUSA />
          </div>
        </div>
      </div>
    </>
  );
};

export default Studyusa;
