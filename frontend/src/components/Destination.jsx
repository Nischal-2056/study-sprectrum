import "../styles/destination.css";
import { Container, Card } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import USA from "../assets/usa.png";
import Canada from "../assets/canada.png";
import Uk from "../assets/uk.png";
import { useNavigate } from "react-router-dom";
export default function Destination() {
  const destinationData = [
    {
      id: 0,
      image: USA,
      title: "study in usa",
      location: "/studyusa",
      description:
        "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the.....",
    },
    {
      id: 1,
      image: Canada,
      title: "study in canada",
      location: "/studycanada",
      description:
        "Canada has numerous universities and colleges that offer a wide range of programs.....",
    },
    {
      id: 2,
      image: Uk,
      title: "study in uk",
      location: "/studyuk",
      description:
        "United Kingdom has boasted to be one of the most renowned study destinations  .....",
    },
  ];

  // const clickReadMore = (name) => {
  //   alert(`You have clicked ${name}`);
  // };
  const navigate = useNavigate();

  const handleNavigate = (location) => () => {
    navigate(location);
  };

  return (
    <div className="destination-wrapper">
      <Container>
        <span className="color-main  mb-4 mt-2 d-flex justify-content-center desti-header fs-35  
         ">
          CHOOSE YOUR DESTINATION
        </span>
        <div className="d-flex   card-wrapper " style={{justifyContent:"center",alignItems:"center" }}>
          {destinationData.map((destination) => (
            <Card
              onClick={handleNavigate(destination.location)}
              className="destination-card  "
              key={destination.id}
              style={{ width: "100%" }}
            >
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={destination.image}
                  alt={destination.title}
                />
                <div className="desti-badge text-white d-flex justify-content-center align-items-center">
                  2024
                </div>
              </div>
              <Card.Body>
                <Card.Title className="color-main">
                  {destination.title.toUpperCase()}
                </Card.Title>
                <Card.Text>{destination.description}</Card.Text>
                <span
                  className="read-more"
                  onClick={() => handleNavigate(destination.location)}
                >
                  {"Read More >>>"}
                </span>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
