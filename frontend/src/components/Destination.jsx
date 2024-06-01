import "../styles/destination.css";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alabama from "../assets/cities/alabama.jpg";
import Califorina from "../assets/cities/calif.jpg"
import Colorado from "../assets/cities/colorado.jpg"
import massachets from "../assets/cities/massachets.jpg"
import Michigan from "../assets/cities/michigan.jpg"
import Misouri from "../assets/cities/Misouri.jpg"
import Northcarolina  from "../assets/cities/North-carloina.jpg"
import Pensylvania from "../assets/cities/Pensylvania.jpg"
import Texas from "../assets/cities/texas.jpg"
import washington from "../assets/cities/washington.jpg"

 const citydestinationData = [
   { id: 1, title: "Alabama", imge: Alabama },
   { id: 2, title: "California", imge: Califorina },
   { id: 3, title: "Colorado", imge: Colorado },
   {
     id: 4,
     title: "Massachusetts",
     imge: massachets,
   },
   { id: 5, title: "Misouri", imge:Misouri },
   { id: 6, title: "North Carolina", imge:Northcarolina },
   { id: 7, title: "Pennsylvania", imge: Pensylvania },
   {
     id: 8,
     title: "Texas",
     imge: Texas,
   },
   { id: 9, title: "Washinton", imge: washington },
   { id: 10, title: "Michigan", imge: Michigan },
 ];


export default function Destination() {
 
 const citydestination1=citydestinationData.slice(0,4);

  const citydestination2 = citydestinationData.slice(4);


  return (
    <div className="destination-wrapper">
      <div className=" container-lg">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <span className="color-main  mb-4 mt-2   desti-header fs-35">
              <p style={{ lineHeight: "35px" }}>
                <span style={{ fontSize: "45px" }}> TOP CITIES </span>
                <br></br> <span className="color-red">TO STUDY IN USA </span>
              </p>
            </span>
            <div className="text-justify pt-3  col-12">
              <p className="text-justify">
                Discover the top states to study in the USA: California, New
                York, Texas, Massachusetts, and Pennsylvania, offering
                prestigious universities, diverse cultures, and vibrant student
                life.
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="d-flex pt-lg-5 mt-lg-5 pt-sm-0 gap-3 animate__animated animate__fadeInRightBig animate__delay-1.5s">
              <Row className="w-100">
                {citydestination1.map((item) => (
                  <Col xs={6} sm={6} cla lg={3} key={item.title}>
                    <Card
                      className="bg-sec mt-lg-0 mt-2"
                      style={{
                        width: "auto",
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                    >
                      <Card.Img src={item.imge} style={{ height: "140px" }} />
                      <Card.Text className="color-white text-center">
                        {item.title}
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="d-flex gap-3 pt-lg-3 pt-3 animate__animated animate__fadeInLeftBig animate__delay-1.5s">
            <Row className="w-100">
              {citydestination2.map((item) => (
                <Col xs={6} sm={6} lg={2} key={item.title}>
                  <Card
                    className="bg-main mt-lg-0 mt-2"
                    style={{
                      width: "auto",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.imge}
                      style={{ height: "120px" }}
                    />
                    <Card.Text className="color-white text-center">
                      {item.title}
                    </Card.Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
