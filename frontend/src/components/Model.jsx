import Modal from "react-bootstrap/Modal";

import PropTypes from "prop-types"; // Import PropTypes
import image from "../assets/formcompletion.jpg";


const Model = ({ closeModal }) => {
  console.log("Model");


  return (
    <div className="" style={{ backgroundColor: "red" }}>
      <Modal className="models" show={true} onHide={closeModal}>
        <Modal.Header
          className="m-0 pt-2"
          style={{ border: "none" }}
          closeButton
        ></Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
          <img src={image} style={{ height: "300px", width: "350px" }} />
          <p  className="mb-0 m-text"style={{ fontSize: "40px" }}> Thank You </p>
          
          <div style={{ borderTop: "2px solid #fea201", borderBottom: "  2px  solid #fea201" }}>
            <p className="mb-0 p-1 m-text fw-bold"   >
              FOR COMPLETING THE FORM
            </p>
          </div>
          <p className="text-center pt-1 col-lg-8">
            Our team will get back to you shortly after reviewing your profile
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

// Add prop validation
Model.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Model;
