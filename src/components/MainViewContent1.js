import { Container, Row, Col } from "react-bootstrap";

import check_img from "../../src/assets/img/CheckBox.png";

const page = () => {
  return (
    <Container fluid className="contect1-container">
      <Container className="d-flex justify-content-center">
        <div className="d-md-flex d-col pt-2 pb-3">
          <div className="d-flex pt-3 px-3 pb-1">
            <div>
              <img className="pt-2" src={check_img}></img>
            </div>
            <b className="d-flex Gratis-text-main-view ml-2">
              Gratis en <br></br> vrijblijvend<br></br> vergelijken
            </b>
          </div>

          <div className="d-flex pt-3 px-3 pb-1">
            <div>
              <img className="pt-2" src={check_img}></img>
            </div>
            <b className="d-flex Gratis-text-main-view ml-2 pt-2">
              BESPAAR 30%<br></br>in slecht 2 minuten
            </b>
          </div>

          <div className="d-flex pt-3 px-3 pb-1">
            <div>
              <img className="pt-2" src={check_img}></img>
            </div>

            <b className="d-flex Gratis-text-main-view ml-2 pt-2">
              TRAPRENOVATIE<br></br> al vanaf € 2.500
            </b>
          </div>

          <div className="d-flex pt-3 px-3 pb-1">
            <div>
              <img className="pt-2" src={check_img}></img>
            </div>

            <b className="d-flex Gratis-text-main-view ml-2">
              Binnen<br></br> 1 werkdag <br></br>geplaatst
            </b>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default page;
