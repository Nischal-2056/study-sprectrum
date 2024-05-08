import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import "../styles/canada.css";
import acamic from "../assets/academic.png";
import { canada_popularcourses } from "../assets/popularcourses.js";
import { canada } from "../assets/visaapplication.js";
import { FAQCANADA } from "../components/FAQ";
const coursesGroups = Array.from(
  { length: Math.ceil(canada_popularcourses.length / 3) },
  (_, index) => canada_popularcourses.slice(index * 3, index * 3 + 3)
);
const Studycanada = () => {
  return (
    <>
      <Container fluid style={{ padding: "0px", margin: "0px" }}>
        <section className="canadaOverview  studycanada container-fluid pt-lg-5 ">
          <div className="container  pt-lg-5 pt-sm-3 mt-lg-5 p-2 ">
            <div className="" style={{ color: "#fea201" }}>
              <h1 className="fs-35">STUDY IN CANADA</h1>
            </div>
            <div className=" pt-lg-3 ">
              <p
                className="fs-14"
                style={{
                  width: "100%",
                  textAlign: "start",
                }}
              >
                Canada offers an exceptional education experience that
                seamlessly balances academic excellence with career
                opportunities. Well-known for its world-class academic
                institutions, Canada provides a friendly and inclusive
                atmosphere for international students to peruse their further
                studies. Boasting a diverse and rich multicultural lifestyle,
                Canada has become a beacon for those aspirants who strive for
                quality education with engrossing career opportunities.
              </p>
            </div>
          </div>
        </section>
        <section className="why-canada container-fluid  pt-lg-5">
          <div className="container pt-2 ">
            <div className="text-center">
              <h1 className="section-heading fs-35">WHY CANADA?</h1>
            </div>
            <div className="d-flex row mt-lg-2  position-relative ">
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
                      <b>Academic Excellence</b>
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className="  d-flex desc align-content-center justify-content-center pt-lg-3 "
                    >
                      <p>
                        Home to some of the world’s top-ranked universities and
                        colleges, Canada offers high-quality education to
                        international students with its widely recognized
                        degrees. The academic culture of Canada emphasizes
                        research, innovation, and practical insights, which
                        helps students foster a more challenging environment for
                        their future success.
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
                      <b> Affordable Tuition Fees</b>
                    </Card.Title>

                    <div
                      style={{
                        fontSize: "14px",
                        lineHeight: "25px",
                      }}
                      className="  d-flex desc align-content-center justify-content-center pt-lg-3 "
                    >
                      <p>
                        Canada offers a wide range of courses with reasonable
                        tuition fees, which makes it one of the most preferred
                        study destinations amongst other countries. Compared to
                        the education institutions in the USA, Australia, and
                        the UK, the tuition fee in Canada is relatively low, and
                        the students can receive financial aid from
                        scholarships, grants, and public funding to support
                        their studies financially.
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
                      <b> Post-Study Work Options</b>
                    </Card.Title>
                    <div
                      style={{
                        fontSize: "14px",

                        lineHeight: "25px",
                      }}
                      className=" d-flex  desc align-content-center justify-content-center pt-lg-3   "
                    >
                      <p>
                        Along with the internationally recognized degree
                        Canadian institutions offer, students can enjoy the
                        privilege of up to 3 years of post-study work (PSW)
                        after completing their graduation. A candidate can apply
                        for PGWP within the duration of 180 days after
                        successfully completing graduation from a designated
                        learning institution (DLI).
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-courses container-fluid pt-lg-5">
          <div className="container">
            <div className="pt-lg-3 text-center">
              <h1 className="section-heading  pt-lg-5 fs-35">
                POPULAR COURSES
              </h1>
            </div>
            <p className="px-3 pt-lg-2" style={{ fontSize: "14px" }}>
              While Canada offers a wide variety of subjects to study for
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
        </section>
        <section className="major-intake container-fluid  p-lg-5 ">
          <div className="container">
            <div className="    text-center pt-lg-4">
              <h1 className="section-heading fs-35">MAJOR INTAKE</h1>
            </div>

            <div className=" d-flex row justify-content-between p-lg-4 ">
              <p>
                {" "}
                In general, Canadian institutions offer three intakes for
                international students:
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
                    <p>Septemer</p>
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
                    <p>Janurary</p>
                  </Card.Header>
                </Card>
              </div>
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
                    SUMMER
                  </p>
                </Card>
                <Card className="mb-2 text-center  ">
                  <Card.Header className="bg-white ">
                    <p>
                      <b>Month</b>
                    </p>
                    <p>May</p>
                  </Card.Header>
                </Card>
              </div>
            </div>
            <div className=" col-lg-12 container pt-lg-2">
              <p style={{ fontSize: "15px" }}>
                If a student misses the fall intake, he/she can apply for the
                winter and summer intakes, where the student has relatively
                fewer study options.
              </p>
            </div>
          </div>
        </section>
        <section
          className="
          container-fluid
          pt-lg-3
          p-2
          p-lg-5 
          academicrequirments"
        >
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
                      chooses, universities in the Canada typically accept{" "}
                      <span style={{ color: "#fea201", fontSize: "17px" }}>
                        <b>2.6 to 3.0 </b>
                      </span>
                      on a scale of 4.0 GPA.
                    </Card.Text>
                  </span>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>
        <section className="container-fluid pt-lg-5  languageproficiency">
          <div className="container p-lg-4">
            <div className="col-12   text-center">
              <h1 className="section-heading  pt-3 fs-35">
                LANGUAGE PROFICIENCY
              </h1>
            </div>
            <p
              className="  col-12 pt-4 p-lg-4  fs-14  "
              style={{ lineHeight: "25px" }}
            >
              Typically, Canadian institutions demand a minimum band score of
              6.0 in the IELTS exam for undergraduate courses and a band score
              of 6.5 for postgraduate courses. By the same token, the students
              need to have an overall IELTS score of at least 6.5 for both UG
              and PG courses. As per the other PTE test, the student must secure
              the minimum score of 59–75, as a score less than 55–58 is rarely
              accepted.
            </p>
          </div>
        </section>
        <section className="container-fluid pt-lg-3  pt-2   scholarshipcanada ">
          <div className="  container  pt-lg-3 ">
            <div className="row  text-center">
              <h1 className="section-heading  pt-lg-3 fs-35">
                SCHOLARSHIP IN CANADA
              </h1>
            </div>
            <p
              className=" px-lg-2 pt-3 "
              style={{ fontSize: "14px", lineHeight: "25px" }}
            >
              Scholarships in Canada are available to domestic and international
              students across various fields of study and academic levels. These
              scholarships are offered by universities, government agencies,
              non-profit organizations, and private institutions.
            </p>

            <div className="row pt-4 d-flex justify-content-between">
              <div className="col-md-5 mt-lg-3">
                <Card
                  className="p-lg-4"
                  style={{
                    height: "300px",
                    backgroundColor: " #0d4a76",
                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-3">
                    <Card.Title style={{ color: "#fea201" }}>
                      Merit-Based Scholarship
                    </Card.Title>
                    <Card.Text className="pt-3" style={{ textAlign: "left" }}>
                      These scholarships are awarded to students based on their
                      academic achievements, extracurricular activities,
                      leadership qualities, and other accomplishments.
                      Merit-based scholarships often require applicants to have
                      a high GPA or demonstrate exceptional talent in a
                      particular field.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-5  mt-3 ">
                <Card
                  className="p-lg-4"
                  style={{
                    height: "300px",
                    backgroundColor: " #0d4a76",
                    color: "white",
                  }}
                >
                  <Card.Body className="text-center pt-3">
                    <Card.Title style={{ color: "#fea201" }}>
                      Need Based Scholarship
                    </Card.Title>
                    <Card.Text className="pt-3" style={{ textAlign: "left" }}>
                      Need-based scholarships are awarded to students who
                      demonstrate financial need. These scholarships aim to
                      provide assistance to students who may not have the
                      financial resources to fund their education fully.
                      Eligibility for need-based scholarships is usually
                      determined based on factors such as family income, assets,
                      and other financial obligations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="visacanada  containe-fluid pt-lg-5  ">
          <div className="container ">
            <div className="text-center">
              <h1 className="section-heading  pt-5 fs-35">
                VISA APPLICATION PROCESS
              </h1>
            </div>
            <div className="pt-lg-5 pt-2">
              {canada.map((index) => (
                <Card
                  key={index.id}
                  className="m-2 p-lg-2 "
                  style={{ backgroundColor: "#edf0f7" }}
                >
                  <Card.Body className="d-flex p-lg-2">
                    <img
                      src={index.url}
                      style={{ width: "30px", height: "30px" }}
                    />
                    <Card.Text className="p-lg-2">
                      <b> {index.step}: </b>
                      <span className="p-lg-2  " style={{ width: "90%" }}>
                        {index.definition}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="jobcanada pt-lg-5  mt-lg-5 container-fluid">
          <div className="canadabackimage"></div>
          <div className="container jobcontent">
            <div className="row  text-center">
              <h1
                className="section-heading  pt-3 fs-35"
                style={{ color: "#fea201" }}
              >
                JOB OPPORTUNITIES IN CANADA
              </h1>
            </div>
            <div className="p-3 col-sm-12">
              <p
                className=" pt-4"
                style={{ fontSize: "15px", lineHeight: "30px", color: "white" }}
              >
                Canada offers a wide range of career options to international
                students. Without a separate work permit, on-campus occupations
                are those that are associated with the student's topic of study
                on the university or college campus. During the academic year,
                employees are permitted to work off-campus for up to 20 hours
                per week, and during breaks, they are required to work full-time
                and get a work permit. Numerous colleges provide co-ops and
                internships that give students practical job experience related
                to their academic disciplines. In addition, the Post-Graduation
                Work Permit (PGWP) facilitates the employment of qualified
                graduates in Canada following degree completion, therefore
                providing them with significant.
              </p>
            </div>
          </div>
        </section>
        <section className="pt-lg-5 conatiner-fluid faq">
          <div className="container pt-4 p-3">
            <h2 className="fs-35" style={{ color: "#0d4a76" }}>
              FAQ
            </h2>
            <FAQCANADA />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Studycanada;
