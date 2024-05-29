
// import Slider from "react-slick";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/sliders.css";
// import logo from "../assets/studyspectrumlogo.png";
// import { useState, useEffect } from "react";
// import { getTestimonial, getSuccessstores } from "../axios.service.js";
// import { FaStar, FaStarHalf } from "react-icons/fa";



// const Sliders = () => {
//   const [testimonial, setTestimonial]=useState([]);
//   const [sucessStories, setsuccessStories]=useState([])

//  const fetchSucccesstories = async () => {
//    try {
//      const response = await getSuccessstores("success-story/");
//      setsuccessStories(response);
//      console.log(response);
//    } catch (error) {
//      //error}
//    }
//  };
// const fetchTestimonial = async () => {
//   try {
//     const response = await getTestimonial("testimonial/");
//     setTestimonial(response);
//   } catch (error) {
//     //error}
//   }
// };
// useEffect(() => {
//   fetchTestimonial();
// fetchSucccesstories();
// }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     arrows: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // nextArrow: <SampleNextArrow />,
//     // prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//         },
//       },
//     ],
//   };
//   return (
//     <>
//       <div className=" mx-auto pt-lg-5" style={{ width: "80%" }}>
//         <div className="text-center">
//           <h2 className="color-main  mb-4 mt-2 d-flex justify-content-center fs-35">
//             TESTIMONIAL
//           </h2>
//         </div>
//         <div>
//           <Slider {...settings}>
//             {testimonial && testimonial.length > 0 ? (
//               testimonial.map((data) => (
//                 <Card key={data.id} className="custome-card">
//                   <img className="testo-user-image" src={data.image} alt="" />
//                   <Card.Body>
//                     <Card.Title style={{ textAlign: "end" }}>
//                       {data.title}
//                     </Card.Title>
//                     <Card.Text
//                       style={{
//                         marginTop: "38px",
//                         paddingLeft: "15px",
//                       }}
//                     >
//                       {data.description}
//                     </Card.Text>

//                     <div className="star-rating px-2">
//                       {Array.from({ length: Math.floor(data.rate) }, ( i) => (
//                         <FaStar key={i} className="fa-star" />
//                       ))}
//                       {/* {data.rating % 1 !== 0 && (
//                         <FaStarHalf className="fa-star" />
//                       )} */}
//                     </div>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p> Loading</p>
//             )}
//           </Slider>
//         </div>
//       </div>

//       <div className="mt-lg-5 pt-lg-5">
//         <div className="container-fluid  pt-lg-5 sucessstoreies">
//           <div className="col-12    text-center">
//             <h2 className="fs-35 color-main">
//               OUR SUCCESS STORIES
//             </h2>
//           </div>
//           <div className="row m-5 ">
//             <Slider {...settings}>
//               {sucessStories && sucessStories.length > 0 ? (
//                 sucessStories.map((index) => (
//                   <Card
//                     key={index.id}
//                     style={{
//                       width: "100%",
//                       maxWidth: "400px",
//                       maxheight: "360px",
//                     }}
//                   >
//                     <Card.Body style={{ backgroundColor: "#F8F6F6" }}>
//                       <div className="border-0  bg-transparent  d-flex  justify-content-center align-items-center  ">
//                         <span
//                           className="px-4 fs-32 color-red"
//                           style={{ fontFamily: "Italianno, cursive" }}
//                         >
//                           Congratulations
//                         </span>
//                         <img src={logo} style={{ height: "90px" }} />
//                       </div>
//                       <div className="  d-flex flex-column justify-content-center align-items-center">
//                         <div
//                           style={{
//                             width: "140px", // Adjust the size as needed
//                             height: "140px", // Adjust the size as needed
//                             borderRadius: "50%",
//                             border: "2px solid #FEA201",
//                           }}
//                         >
//                           <img
//                             src={index.image}
//                             style={{
//                               padding: "5px",
//                               width: "100%",
//                               height: "100%", // Adjust the size as needed
//                               borderRadius: "50%",
//                             }}
//                           ></img>
//                         </div>
//                         <Button
//                           className="p-1 mt-2"
//                           style={{
//                             whiteSpace: "nowrap",
//                             backgroundColor: "#fea201",
//                             width: "auto",
//                             height: "25px",
//                             border: "none",
//                             fontSize: "14px",
//                             color: "black",
//                             textOverflow: "ellipsis",
//                             alignItems: "center",
//                           }}
//                         >
//                           {index.name}
//                         </Button>
//                         <Card.Text
//                           className=" m-0"
//                           style={{
//                             fontSize: "14px",
//                           }}
//                         >
//                           Study Permit for
//                         </Card.Text>
//                         <Card.Title
//                           style={{
//                             fontSize: "16px",
//                           }}
//                           className=" p-0"
//                         >
//                           {index.country}
//                         </Card.Title>
//                       </div>
//                     </Card.Body>
//                     <Card.Footer className="text-center bg-white ">
//                       <b>{index.visa_status}</b>{" "}
//                     </Card.Footer>
//                   </Card>
//                 ))
//               ) : (
//                 <p>loading</p>
//               )}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// // function SampleNextArrow(props) {
// //   const { classname, style, onClick } = props;
// //   return (
// //     <div 
// //       className={classname}
// //       style={{
// //         ...style,
// //         display: "block",
// //         background: "#0D4A76",
// //         marginTop: "10px",
      
// //       }}
// //       onClick={onClick}
// //     >
      
// //     </div>
// //   );
// // }

// // function SamplePrevArrow(props) {
// //   const { classname, style, onClick } = props;
// //   return (
// //     <div
// //       className={classname}
// //       style={{
// //         ...style,
// //         display:"contents",
// //         background: "#0D4A76",
// //         marginTop: "10px",
// //       }}
// //       onClick={onClick}
// //     />
// //   );
// // }

// export default Sliders;
