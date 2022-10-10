import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Content from './Page'
import Traprenovatiesection from "./Traprenovatie_section";

const AdminView = (props) => {
  return (
    <>
      <Content/>
	  <Traprenovatiesection/>
    </>
  );
};

export default AdminView;
