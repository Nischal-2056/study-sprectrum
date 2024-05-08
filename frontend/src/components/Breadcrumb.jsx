
import Breadcrumb from "react-bootstrap/Breadcrumb";



export const BreadcrumbUSA = () => {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="">Study Abroad</Breadcrumb.Item>
      <Breadcrumb.Item active>USA</Breadcrumb.Item>
    </Breadcrumb>
  );
};