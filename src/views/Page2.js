import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import laminaat from "../../src/assets/img/Laminaat.png";
import hout from "../../src/assets/img/Hout.png";
import pvc from "../../src/assets/img/PVC.png";
import hpl from "../../src/assets/img/hpl.png";
import { useState } from "react";

const page2 = (props) => {
  return (
    <Container fluid className="trap_container py-5">
      <Container className="d-flex justify-content-center">
        <div className="center-div">
          <Col>
            <Row className="py-3">
              <Col lg="4" m>
                <div className="text-md-center  text-lg-right">
                  <h3>
                    {" "}
                    <b>KOSTEN TRAPRENOVATIE</b>
                    <div>
                      <hr className="trap-hr  float-lg-right"></hr>
                    </div>
                  </h3>
                </div>
              </Col>
              <Col lg="8">
                <p className="text-left">
                  Helaas is het niet mogelijk om een exact kostenplaatje te
                  geven van traprenovatie. Dit komt doordat er veel bepalende
                  factoren zijn. Denk hierbij aan het type trap, de gewenste
                  trapbekleding, de hoeveelheid treden en de arbeidskosten.
                  <br />
                  <br /> Om je een indicatie te geven van de kosten, vind je
                  hieronder een tabel met daarin de gemiddelde kosten voor een
                  open trap inclusief btw en plaatsing
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg="8" className="text-left p-0">
                <div className="p-2" style={{ backgroundColor: "#d6d5d2" }}>
                  <table class="table table-sm table-borderless p-1 ">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col" className="border-bottom border-dark">
                          Gemiddelde kosten traprenovatie
                        </th>
                        <th scope="col" className="border-bottom border-dark">
                          Prijs per trede*
                        </th>
                        <th scope="col" className="border-bottom border-dark">
                          Prijs per trap*
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope="row">
                          <img className="img-resize" src={laminaat}></img>
                        </th>
                        <td>Laminaat</td>
                        <td>€ 160</td>
                        <td>vanaf € 2.500</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img className="img-resize" src={hpl}></img>
                        </th>
                        <td>HPL / CPL</td>
                        <td>€ 160</td>
                        <td>vanaf € 2.500</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img className="img-resize" src={pvc}></img>
                        </th>
                        <td>PVC (kunststof)</td>
                        <td>€ 160</td>
                        <td>vanaf € 2.500</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img className="img-resize" src={hout}></img>
                        </th>
                        <td>Hout</td>
                        <td>€ 160</td>
                        <td>vanaf € 2.500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col lg="4">
                <p className="pt-5 text-left">
                  * Een trap heeft meestal 13 treden. Bovengenoemde prijzen
                  gelden slechts als een indicatie. Om prijzen op maat te
                  ontvangen van betrouwbare specialisten, raden wij je aan om
                  een vrijblijvende offerteaanvraag doen.
                </p>
              </Col>
            </Row>
          </Col>
          <span>
            <p className="p-3 p-lg-5 text-left">
              Traprenovatie is maatwerk. Hierdoor verschillen de kosten per
              specialist aanzienlijk. Vergelijk daarom altijd meerdere offertes.
              Een offerteaanvraag via Offertevergelijker is gratis, vrijblijvend
              en helpt je bij het vinden van de beste deal voor jouw trap!
            </p>
          </span>
          <Row>
            <Col lg="4" md="3" xs="0"></Col>
            <Col>
            
                <button className="btn-card-content2 p-2 mt-2"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>
                GRATIS OFFERTES VERGELIJKEN{" "}
                  <span>
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              
            </Col>
            <Col lg="4" md="3" xs="0"></Col>
          </Row>
          <br></br>
        </div>
      </Container>
    </Container>
  );
};

export default page2;
