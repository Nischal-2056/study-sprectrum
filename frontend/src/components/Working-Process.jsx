
import "../styles/workingprocess.css";

import talkwithconselor from "../assets//workprocess/talkwithconselor.png";
import Testpreparationclass from "../assets/workprocess/Testpreparationclass.png";
import Applytoinstitution from "../assets/workprocess/Applytoinstitution.png";
import Studyaboard from "../assets/workprocess/Studyaboard.png";

export default function WorkingProcess() {
  const workProcessingImgs = [
    { id: 0, image: talkwithconselor, title: "Talk With Conselor" },
    { id: 1, image: Testpreparationclass, title: "Test Preparation Class" },
    { id: 2, image: Applytoinstitution, title: "Apply To Institution" },
    { id: 3, image: Studyaboard, title: "Visa lodge and Go for the Study" },
  ];
  return (
    <div>
      <div className="wrok-process-wrapper">
        <div className="container-fluid">
          <span className="color-main  mb-4 fs-35 mt-2 d-flex justify-content-center wp-header ">
            WORKING PROCESS
          </span>
          <div className="container wp-description">
            We assess individual needs, provide tailored solutions, and guide
            our clients through every step of their educational journey,
            ensuring a seamless and successful experience.
          </div>
          <div className="d-flex flex-wrap wp-card-wrapper ">
            {workProcessingImgs.map((img) => (
              <div key={img.id} className="wp-card">
                <div className="wp-card-img">
                  <img src={img.image} alt="" style={{ height: "200px " ,width:"200px" }} />
                </div>
                <div className="wp-card-text text-center fw-bold">{img.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
         
    </div>
  );
}
