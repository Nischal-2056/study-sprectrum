import "../styles/home.css";

import AboutUsImg from "../assets/h-abt-us.png";
import Adsection from "../components/Ad.jsx"
import CarouselComponent from "../components/Carousel.jsx";
import Destination from "../components/Destination.jsx";
import WorkingProcess from "../components/Working-Process.jsx";
import OurStrength from "../components/Our-Strength.jsx";

import Sliders from "../components/Sliders.jsx";

const Home = () => {
  return (
    <div className="container-fluid" style={{ padding: "0px", margin: "0px" }}>
      <CarouselComponent />
      <div
        className="w-100  position-relative "
        style={{ margin: "-36px 0px 1% 0" }}
      >
        <Adsection className="add-section col-md-10  " />
      </div>
      <div className="container">
        <div className="h-about-us-wrapper">
          <div className="h-abt-us-description">
            <div className="h-abt-header color-main  fs-35">ABOUT US</div>
            <div className="h-abt-content">
            USA Study Spectrum is an educational consulting firm
              that specializes in offering top-notch academic advice services to
              students considering studying  the USA.
              With years of experience and a staff of qualified
              advisors,we provide excellent guidance services for
              studying in US. Our mission is to mentor our
              students from the start and accompany them every step of the way
              as they pursue their academic goals.
            </div>
          </div>
          <div className="">
            <img src={AboutUsImg} className="h-abt-img" alt="" />
          </div>
        </div>
      </div>

      <Destination />
      <WorkingProcess />

      <OurStrength />
      <Sliders />
    </div>
  );
};

export default Home;
