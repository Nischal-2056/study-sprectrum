// import Button from "react-bootstrap/Button";


// import "../styles/carousel.css";

// import { useState, useEffect } from "react";
// import {useNavigate} from "react-router-dom"
// import { getCarousel } from "../axios.service";
// import { Carousel } from "react-bootstrap";
// export default function CarouselComponent() {
//   const [carousel, setCarousel] = useState([]);
// const navigate=useNavigate();
//   const navigatefunc = () => {
//     navigate("/contactus");
//   };
//   useEffect(() => {
//     async function fetchCarousel() {
//       try {
//         const response = await getCarousel("carousel/");
//         setCarousel(response);
//       } catch (error) {
//         // Error handling is already done inside viewAssignment function
//       }
//     }
//     console.log("hello");
//     fetchCarousel();
//   }, []);

//   return (
//     <>
//       <div
//         className="container-fluid"
//         style={{ padding: "0px", margin: "0px" }}
//       >
//         <Carousel controls={false}>
//           {carousel && carousel.length > 0 ? (
//             carousel.map((index) => (
//               <Carousel.Item key={index.id} interval={1000}>
//                 {index.image && (
//                   <img
//                     style={{
//                       width: "100%",
//                       height: "536px",
//                       objectFit: "cover",
//                       filter: "brightness(0.5)",
//                     }}
//                     src={index.image}
//                     alt=""
//                   />
//                 )}
//                 <div className="d-flex flex-column gap-2 position-absolute caption-wrapper">
//                   <div className="heading">{index.title}</div>
//                   <div className="description">{index.description}</div>
//                   <div className="desc-btn-wrapper">
//                     <Button className="btn" onClick={navigatefunc}>Contact Us</Button>
//                   </div>
//                 </div>
//               </Carousel.Item>
//             ))
//           ) : (
//             <p>loading</p>
//           )}
//         </Carousel>
//       </div>
//     </>
//   );
// }
