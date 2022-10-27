// import {Container,Row,Col} from 'reactstrap'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import promotion_logo from "../../assets/img/hero_section_Col_6_text_logo.png";
import Headercard from "./HeaderCardp1";
import { useState } from "react";

const Header = () => {
  return (
    <Container fluid className="headerImg d-flex flex justify-content-center">
      {/* <Container className='d-flex justify-content-center'> */}
      <div className="center-div">
        <Row>
          <Col className="col-gap-header"></Col>
          <Col>
            <img className="img-fluid ml-lg-3 ml-md-3" src={logo} />
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <div className="adj-col-promotion-image ">
              <span className="img-fluid p-0">
                <img
                  className="promotion_logo img-fluid "
                  src={promotion_logo}
                ></img>
              </span>

              <h3 className="Gratis-txt">
                <span>
                  Gratis en vrijblijvend offertes aanvragen bij een netwerk van
                  specialistan?
                </span>
              </h3>
              <p className="Zo-text">
                Zo krijg je de beste prijs voor jouw traprenovatie!
              </p>
              <p className="Isjouw-txt">
                Is jouw trap ook toe aan een opknapbeurt? Dan is dit jouw kans.
                Het kost je niets en je zit nergens aan vast. Zo kies jij zelf
                de beste aanbieder. Moeiteloos en zonder verplichtingen. Laat
                snel je gegevens achter en pak deze kans.
              </p>
            </div>
          </Col>
          <Col>
            <Headercard></Headercard>
          </Col>
        </Row>

        <br></br>
      </div>
      {/* </Container> */}
    </Container>
  );
};
export default Header;
