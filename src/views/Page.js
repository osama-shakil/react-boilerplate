import { Container, Row, Col } from "react-bootstrap";
import check_img from "../../src/assets/img/CheckBox.png";

const page = () => {
  return (
    <Container fluid style={{ backgroundColor: "#48cae4" }}>
      <Container>
        <Row className=" pt-5">


          <Col lg="3" md="6" sm="6" xs="12">
            <Row className="p-1">
              <Col>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col>
                <b className="d-flex Gratis-text-main-view">
                  
                    Gratis en vrijblijvend vergelijken
                </b>
              </Col>
            </Row>
          </Col>


          <Col lg="3" md="6" sm="6" xs="12">
          <Row className="p-1">
              <Col>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col>
              <b className="d-flex Gratis-text-main-view">
                
                  BESPAAR 30%<br></br>in slecht 2 minuten
              </b>
              </Col>
            </Row>
           
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">


          <Row className="p-1">
              <Col>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col>
                <b className="d-flex Gratis-text-main-view">
              
                  Traprenovatie  al vanaf € 2.500
                </b>
              </Col>
            </Row>


            
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">





          <Row className="p-1">
              <Col>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col>
                <b className="d-flex Gratis-text-main-view">
                Binnen 1 werkdag geplaatst
                </b>
              </Col>
            </Row>



            
            
          </Col>
        </Row>
      </Container>
      <br/>
    </Container>
  );
};

export default page;
