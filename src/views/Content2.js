import { Container, Row, Col } from "react-bootstrap";

import laminaat from "../../src/assets/img/Laminaat.png";
import hout from "../../src/assets/img/Hout.png";
import pvc from "../../src/assets/img/PVC.png";

const traprenovatiesection = () => {
  return (
    <Container fluid className="trap_container">
      <Container  >

<div className="content2-p1">        
        <h3 className="traprenovatiesection">
          <b>TRAPRENOVATIE OFFERTES VERGELIJKEN</b>
        </h3>
        <hr className="trap-hr" />
        <h5>
          <b>Populairste materialen traprenovatie</b>
        </h5>

        <p className="trap-voor-text">
          Voorheen werd er vaak gekozen om de trap te bekleden met tapijt of hem
          te schilderen. Deze opties tonen echter snel gebruikssporen, waardoor
          de trap slordig oogt. Tegenwoordig kiest men het meest voor
          trapbekleding van laminaat, HPL/CPL, PVC of hout. Dit ziet er niet
          alleen ontzettend strak uit wanneer het wordt geplaatst; het blijft
          deze nieuwe look ook nog vele jaren houden!
        </p>

        <br />

        <div className="p-4">
        <Row className="text-justify">
          <Col lg='6' md='12' sm='12'>
            <Row className="p-1">
              <Col lg="2.5">
                <img src={laminaat}></img>
              </Col>
              <Col >
                <h4>LAMINAAT</h4>
                <p className="">
                  Dit materiaal wordt vaak gebruikt voor het renoveren van de
                  trap. Het voordeel van laminaat is dat het goedkoper is dan de
                  onderstaande materialen. Echter gaat het wel minder lang mee
                  en is laminaat van zichzelf vrij glad.
                </p>
              </Col>
            </Row>
          </Col>
          <Col   lg='6' md='12' sm='12'>
            <Row className="p-1">
              <Col lg="2.5">
                <img src={laminaat}></img>
              </Col>
              <Col>
                <h4>HPL/CPL</h4>
                <p>
                  Het meest gekozen materiaal bij traprenovatie is HPL/CPL. Dit
                  is een vorm van laminaat die speciaal is ontwikkeld voor het
                  renoveren van de trap. Het is slijtvast, erg duurzaam en bevat
                  een aluminium legering. Deze legering zorgt ervoor dat de
                  treden van zichzelf stroef zijn en je een zeer goede grip hebt
                  op de trap.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />

        <Row className="text-justify">
          <Col  lg='6' md='12' sm='12'>
            <Row className="p-1">
              <Col lg="2.5">
                <img src={hout}></img>
              </Col>
              <Col>
                <h4>HOUT</h4>
                <p>
                  Overzettreden van hout bieden een klassieke warme look. Ze
                  zijn slijtvast en erg sfeervol. Het nadeel van hout is dat dit
                  materiaal aanzienlijk duurder is dan andere opties en
                  daarnaast relatief veel periodiek onderhoud vereist
                </p>
              </Col>
            </Row>
          </Col>
          <Col  lg='6' md='12' sm='12'>
            <Row className="p-1">
              <Col lg="2.5">
                <img src={pvc}></img>
              </Col>
              <Col>
                <h4>PVC</h4>
                <p>
                  PVC (kunststof) heeft als grote voordeel dat het een
                  geluiddempend effect heeft. Daarnaast is het verkrijgbaar in
                  vele printen en bestand tegen vocht.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        </div>
        <button  className="img-fluid btn-card ">Gratis offertes vergelijken</button>
        </div>
      </Container>
     
      
    </Container>
  );
};

export default traprenovatiesection;
