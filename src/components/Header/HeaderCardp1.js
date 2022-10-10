import { Container, Row, Col, Card, Input, Button } from "reactstrap";
import arrow_hand_p1 from "../../assets/img/hand_1.png";

const headerCard = () => {
  return (
    <Container>
      <Row>
        <Col>
         
          <h4 className="Vraag-text ml-4 ">
            Vraag nu gratis offertes aan <br/>voor jouw <span className="inside-text-prop">TRAPRENOVATIE</span>
            
          </h4>
          <h4 >  </h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="card">
            <Row>
              <Col>
                <p>Naar wie mogen we de gratis offertes sturen?</p>
              </Col>
              <Col>
                <img className="img_hand_1" src={arrow_hand_p1}></img>
              </Col>
            </Row>
            <hr></hr>
            <Row className="mt-3"> 
              <Col>
              <div className="d-flex">
                <span><p className="input-text-heading">Postcode</p>
                <Input className="inputs-adj"></Input></span>
                
              <span className="pr-1 pl-1">
                <p className="input-text-heading">Straat</p>
                <Input className="inputs-adj"></Input>
                </span>

                <span>
                <p className="input-text-heading">Huisnummer</p>
                <Input className="inputs-adj"></Input>
                </span>
                </div>
              </Col>
            </Row>


            <Row>
              <Col>
              <p className="input-text-heading mt-2" >Woonplaats</p>
                <Input className="inputs-adj"></Input>
              </Col>
               
            </Row>

            <Row>
              <Col>
              <p className="door-text mt-4" >Door vrijblijvend offertes aan te vragen ga je akkoord met onze algemene voorwaarden</p>
             
                
              </Col>
               
            </Row>


            <Row >

              <Col className="d-flex justify-content-center mt-4" >
              <button  className="img-fluid btn-card ">Gratis offertes vergelijken</button>
              
              </Col>
              
              
            </Row>

            <p className="door-text  mt-4 text-center">Meer dan 109.000 mensen gingen je voor!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default headerCard;
