import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import laminaat from "../../src/assets/img/Laminaat.png";
import hout from "../../src/assets/img/Hout.png";
import pvc from "../../src/assets/img/PVC.png";
import hpl from "../../src/assets/img/hpl.png";

const traprenovatiesection = () => {
  return (
    <Container fluid className="trap_container">
      <Container className="d-flex justify-content-center px-0">
        <div className="center-div mx-3 pt-5">
          <h3>
            <b>TRAPRENOVATIE OFFERTES VERGELIJKEN</b>
          </h3>
          <hr className="trap-hr" />
          <h5 className="pt-4">
            <b>Populairste materialen traprenovatie</b>
          </h5>

          <p className="trap-voor-text">
            Voorheen werd er vaak gekozen om de trap te bekleden met tapijt of
            hem te schilderen. Deze opties tonen echter snel gebruikssporen,
            waardoor de trap slordig oogt. Tegenwoordig kiest men het meest voor
            trapbekleding van laminaat, HPL/CPL, PVC of hout. Dit ziet er niet
            alleen ontzettend strak uit wanneer het wordt geplaatst; het blijft
            deze nieuwe look ook nog vele jaren houden!
          </p>

          <br />

          <div className="p-4">
            <Row className="text-justify">
              <Col lg="6" md="12" sm="12">
                <Row className="p-1">
                  <Col lg="2.5">
                    <img height={70} src={laminaat}></img>
                  </Col>
                  <Col>
                    <h5>LAMINAAT</h5>
                    <p className="p-content-2">
                      Dit materiaal wordt vaak gebruikt voor het renoveren van
                      de trap. Het voordeel van laminaat is dat het goedkoper is
                      dan de onderstaande materialen. Echter gaat het wel minder
                      lang mee en is laminaat van zichzelf vrij glad.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="12" sm="12">
                <Row className="p-1">
                  <Col lg="2.5">
                    <img height={70} src={hpl}></img>
                  </Col>
                  <Col>
                    <h5>HPL/CPL</h5>
                    <p className="p-content-2">
                      Het meest gekozen materiaal bij traprenovatie is HPL/CPL.
                      Dit is een vorm van laminaat die speciaal is ontwikkeld
                      voor het renoveren van de trap. Het is slijtvast, erg
                      duurzaam en bevat een aluminium legering. Deze legering
                      zorgt ervoor dat de treden van zichzelf stroef zijn en je
                      een zeer goede grip hebt op de trap.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />

            <Row className="text-justify">
              <Col lg="6" md="12" sm="12">
                <Row className="p-1">
                  <Col lg="2.5">
                    <img height={70} src={hout}></img>
                  </Col>
                  <Col>
                    <h5>HOUT</h5>
                    <p className="p-content-2">
                      Overzettreden van hout bieden een klassieke warme look. Ze
                      zijn slijtvast en erg sfeervol. Het nadeel van hout is dat
                      dit materiaal aanzienlijk duurder is dan andere opties en
                      daarnaast relatief veel periodiek onderhoud vereist
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg="6" md="12" sm="12">
                <Row className="p-1">
                  <Col lg="2.5">
                    <img height={70} src={pvc}></img>
                  </Col>
                  <Col>
                    <h5>PVC</h5>
                    <p className="p-content-2">
                      PVC (kunststof) heeft als grote voordeel dat het een
                      geluiddempend effect heeft. Daarnaast is het verkrijgbaar
                      in vele printen en bestand tegen vocht.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg="4" md="3" xs="0"></Col>
              <Col>
                <Link to="/page2">
                  <button className="btn-card-content2 p-2 mt-2">
                    GRATIS OFFERTES VERGELIJKEN{" "}
                    <span>
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </button>
                </Link>
              </Col>
              <Col lg="4" md="3" xs="0"></Col>
            </Row>
          </div>
          <br />
        </div>
      </Container>
    </Container>
  );
};

export default traprenovatiesection;
