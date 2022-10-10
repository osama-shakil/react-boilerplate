// import {Container,Row,Col} from 'reactstrap'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import promotion_logo from "../../assets/img/hero_section_Col_6_text_logo.png";
import Headercard from "./HeaderCardp1";

const Header = () => {
  return (
    <Container fluid className="headerImg">
      <Container>
        <Row>
          <Col  className="col-gap-header"></Col>
          <Col>
            <img className="img-fluid ml-4" src={logo} />
            <h5 className="Bespaar-text pt-2">
            <b
              className="inside-text-prop"
            >
              Bespaar 30%{" "}

            </b>
            in slechts 2 minuten
          </h5>
          </Col>
        </Row>
        <Row>
          <Col  lg='6' md='12'>
           <div className="adj-col-promotion-image ">
                
                  <img className="img-fluid promotion_logo" src={promotion_logo}></img>
                

                <h3 className="Gratis-txt">
                  Gratis en vrijblijvend offertes aanvragen bij een netwerk van
                  specialistan?
                </h3>
                <p className="Zo-text">
                  Zo krijg je de beste prijs voor jouw traprenovatie!
                </p>
                <p className="Isjouw-txt">
                  Is jouw trap ook toe aan een opknapbeurt? Dan is dit jouw
                  kans. Het kost je niets en je zit nergens aan vast. Zo kies
                  jij zelf de beste aanbieder. Moeiteloos en zonder
                  verplichtingen. Laat snel je gegevens achter en pak deze kans.
                </p>
                </div>
          </Col>
          <Col lg='6' md='10'>
            <Headercard ></Headercard>
          </Col>
        </Row>
        <br></br>
      </Container>
    </Container>
  );
};
export default Header;
