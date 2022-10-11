import { Container, Row, Col } from "react-bootstrap";
import check_img from "../../src/assets/img/CheckBox.png";

const page = () => {
  return (
    <Container fluid style={{ backgroundColor: "#48cae4" }}>
      <Container>
        <Row className="content1-page1">
          <Col lg="3" md="6" sm="6" xs="12" className="p-0">
           
              <div className="d-flex">
                
                 <div> <img src={check_img}></img>
                 </div>                
                
                  <b className="d-flex Gratis-text-main-view ml-2">
                    Gratis en <br></br> vrijblijvend<br></br> vergelijken
                  </b>
                
              </div>
            
          </Col>

          <Col lg="3" md="6" sm="6" xs="12" className="p-0">
          
              <div className="d-flex">
                <div >
                  <img src={check_img}></img>
                </div>
                <b className="d-flex Gratis-text-main-view ml-2">
                    BESPAAR 30%<br></br>in slecht 2 minuten
                  </b>
                
              </div>
            
          </Col>
          <Col lg="3" md="6" sm="6" xs="12" className="p-0">
           
              <div className="d-flex">
                <div>
                  <img src={check_img}></img>
                </div>
                
                  <b className="d-flex Gratis-text-main-view ml-2">
                    TRAPRENOVATIE<br></br> al vanaf € 2.500
                  </b>
                
              </div>
            
          </Col>
          <Col lg="3" md="6" sm="6" xs="12" className="p-0">
          <div className="d-flex">
              <div>
                <img  src={check_img}></img>
              </div>
            
                <b className="d-flex Gratis-text-main-view ml-2">
                  Binnen<br></br> 1 werkdag <br></br>geplaatst
                </b>
                </div>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default page;
