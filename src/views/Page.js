import { Container, Row, Col } from "react-bootstrap";
import check_img from "../../src/assets/img/CheckBox.png";

const page = () => {
  return (
    <Container fluid style={{ backgroundColor: "#48cae4" }}>
      <Container>
        <Row className=" ">
                      <div className="content1-page1">

          <Col lg="3" md="6" sm="6" xs="12">
            <Row className="p-1">
              <Col  lg='4'>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col  >
                <b className="d-flex Gratis-text-main-view">
                  
                    Gratis en <br></br> vrijblijvend<br></br> vergelijken
                </b>
              </Col>
            </Row>
          </Col>


          <Col lg="3" md="6" sm="6" xs="12">
          <Row className="p-1">
              <Col lg='4'>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col  >
              <b className="d-flex Gratis-text-main-view">
                
                  BESPAAR 30%<br></br>in slecht 2 minuten
              </b>
              </Col>
            </Row>
           
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">


          <Row className="p-1">
              <Col lg='4'>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col >
                <b className="d-flex Gratis-text-main-view">
              
                  Traprenovatie  al vanaf € 2.500
                </b>
              </Col>
            </Row>


            
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">





          <Row className="p-1">
              <Col lg='4'>
                
                  
                  <img className="float-right" src={check_img}></img>
                
              </Col>
              <Col >
                <b className="d-flex Gratis-text-main-view">
                Binnen<br></br> 1 werkdag <br></br>geplaatst
                </b>
              </Col>
            </Row>



            
            
          </Col>
          </div>
        </Row>
      </Container>
      
    </Container>
  );
};

export default page;
