import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { getbanner } from "../axios.service.js";
const Ad = () => {


  const [banner, setbanner]=useState({});
  const [loading, setLoading] = useState(true);
  const fetchbanner=async()=>{

    try{
      const response =await getbanner("banner/");
      setbanner(response)
      console.log(response)
        setLoading(false);
     
    }catch(error){
  console.log(error)
    }
  }
   console.log("banner");

   console.log(banner);
  useEffect(()=>{
    fetchbanner();
  },[])
  return (

    <div className="container">
      <Card className="" >
        <div className="d-flex  justify-content-center adflex px-lg-5" >
          <div className="col-md-4 col-sm-12 p-2 flex justify-content-start" style={{height:"300px",  }}>
            <Card.Img
              className="img-fluid "
              src={banner.image}
              alt="Scholarship Ad"
              style={{ width: "200%", height: "100%", objectFit:"cover" }}
            />
          </div>
          <div className="col-md-8 col-sm-12 p-2">
            <div className="row pt-2">
              <div className="col-md-12">
                <h2 className="fs-32 color-red">{banner.title}</h2>
              </div>
              <div className="col-md-12">{banner.description}</div>
            </div>
          </div>
        </div>
        <CloseButton
          className="position-absolute closebtn top-0 end-0 m-3"
          aria-label="Hide"
          style={{ backgroundColor: "red" }}
        />
      </Card>
    </div>
  );
};

export default Ad;
