import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Input,
  Button,
  FormFeedback,
  Modal,
} from "reactstrap";
import arrow_hand_p1 from "../../assets/img/hand_1.png";
import ok from "../../assets/img/ok_hand.png";
import laminaat from "../../assets/img/Laminaat.png";
import hout from "../../assets/img/Hout.png";
import pvc from "../../assets/img/PVC.png";
import hpl from "../../assets/img/hpl.png";
import tapijt from "../../assets/img/tapjit.png";
import laag56 from "../../assets/img/laag56.png";
import laag57 from "../../assets/img/laag57.png";
import laag58 from "../../assets/img/laag58.png";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import { Link } from "react-router-dom";

export default function HeaderCardp1() {
  const [active, setActive] = useState(1);
  const [checkboxarr, setCheckboxarr] = useState([]);
  const [error, setError] = useState(false);

  const [postcode, setPostcode] = useState("");
  const [straat, setStraat] = useState("");
  const [huisnummer, setHuisnummer] = useState("");
  const [woonplaats, setWoonplaats] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoonnummer, setTelefoonnummer] = useState("");

  const [validationerror, setValidationerror] = useState(true);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPostcode = new RegExp("^[0-9]{4}[a-zA-Z]{2}$");
  const validtext = new RegExp("^[a-zA-Z]*$");
  const validnumber = new RegExp("^[0-9]*$");

  const checkvalidPostcode = (postcode) => {
    if (validPostcode.test(postcode)) {
      return false;
    }

    return true;
  };
  const checkvalidstraat = (straat) => {
    if (validtext.test(straat)) {
      return false;
    }

    return true;
  };

  const checkvalidHuisnummer = (huisnummer) => {
    if (validnumber.test(huisnummer)) {
      return false;
    }

    return true;
  };
  const checkvalidWoonplaats = (woonplaats) => {
    if (validtext.test(woonplaats)) {
      return false;
    }

    return true;
  };
  let valerror1 = checkvalidPostcode();
  let valerror2 = checkvalidstraat();
  let valerror3 = checkvalidHuisnummer();
  let valerror4 = checkvalidWoonplaats();

  const checkvalidVoornaam = () => {
    if (voornaam !== "" && validtext.test(voornaam)) {
      return false;
    }

    return true;
  };
  const checkvalidAchternaam = () => {
    if (achternaam !== "" && validtext.test(achternaam)) {
      return false;
    }

    return true;
  };
  const checkvalidEmail = () => {
    if (email !== "" && validEmail.test(email)) {
      return false;
    }

    return true;
  };
  const checkvalidTelefoonnummer = () => {
    if (telefoonnummer !== "" && validnumber.test(telefoonnummer)) {
      return false;
    }

    return true;
  };
  // let e =
  //   checkvalidPostcode() &&
  //   checkvalidstraat() &&
  //   checkvalidHuisnummer() &&
  //   checkvalidWoonplaats();
  const history = useHistory();
  const btnClick = (e) => {
    e.preventDefault();

    setActive(active + 1);

    const btnchecked = [];

    setError(false);

    let obj = {
      postcode,
      straat,
      huisnummer,
      woonplaats,
      btnchecked,
      voornaam,
      email,
      achternaam,
      telefoonnummer,
    };

    if (active === 8) {
      if (checkboxarr.includes(1)) {
        btnchecked.push("Ja");
      }
      if (checkboxarr.includes(2)) {
        btnchecked.push("Na");
      }
      if (checkboxarr.includes(3)) {
        btnchecked.push("Hout");
      }
      if (checkboxarr.includes(4)) {
        btnchecked.push("Laminaat CPL/HPL");
      }
      if (checkboxarr.includes(5)) {
        btnchecked.push("PVC/Vinyl");
      }
      if (checkboxarr.includes(6)) {
        btnchecked.push("Tapijt");
      }
      if (checkboxarr.includes(7)) {
        btnchecked.push("Geen");
      }
      if (checkboxarr.includes(8)) {
        btnchecked.push("Overig");
      }

      if (checkboxarr.includes(9)) {
        btnchecked.push("Laminaat CPL/HPL");
      }
      if (checkboxarr.includes(10)) {
        btnchecked.push("Hout");
      }
      if (checkboxarr.includes(11)) {
        btnchecked.push("PVC/Vinyl");
      }
      if (checkboxarr.includes(12)) {
        btnchecked.push("Geen idee, adviseer mij");
      }

      if (checkboxarr.includes(13)) {
        btnchecked.push("Rechte trap");
      }
      if (checkboxarr.includes(14)) {
        btnchecked.push("Kwart draai");
      }
      if (checkboxarr.includes(15)) {
        btnchecked.push("Dubbele draai");
      }
      if (checkboxarr.includes(16)) {
        btnchecked.push("Overig");
      }

      if (checkboxarr.includes(17)) {
        btnchecked.push("Gesloten");
      }
      if (checkboxarr.includes(18)) {
        btnchecked.push("Open");
      }

      if (checkboxarr.includes(19)) {
        btnchecked.push("In overleg");
      }
      if (checkboxarr.includes(20)) {
        btnchecked.push("Binnen 3 maanden");
      }
      if (checkboxarr.includes(21)) {
        btnchecked.push("Binnen 3 tot 6 maanden");
      }

      console.log(obj);
    }
  };
  if (active === 2) {
    history.push("./page2");
  }
  const checkBoxHandle = (e, val) => {
    e.preventDefault();

    setCheckboxarr(
      checkboxarr.filter((e, index) => {
        return e !== val;
      })
    );
  };

  return (
    <>
      <Container className="d-flex flex justify-content-center">
        <Col className="p-0">
          <Row>
            <Col>
              <h5 className="Bespaar-text pt-2">
                <b className="inside-text-prop">Bespaar 30% </b>
                in slechts 2 minuten
              </h5>
              <h4 className="Vraag-text ml-4 ">
                Vraag nu gratis offertes aan <br />
                voor jouw{" "}
                <span className="inside-text-prop">TRAPRENOVATIE</span>
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form
                onSubmit={(e) => {
                  btnClick(e);
                }}
                className="card"
              >
                {active === 1 && (
                  <Container>
                    <Row>
                      <Col lg="8" md="6" sm="6" xs="6">
                        <h5 className="naar-text-card pt-3">
                          Naar wie mogen we de gratis offertes sturen?
                        </h5>
                      </Col>
                      <Col lg="4" md="6" sm="6" xs="6">
                        <img
                          className="float-right pt-1"
                          height={70}
                          src={arrow_hand_p1}
                        ></img>
                      </Col>
                    </Row>
                    <hr></hr>

                    <Row className="mt-3">
                      <Col>
                        <div className="d-flex">
                          <span>
                            <p className="input-text-heading">Postcode</p>
                            <Input
                              required
                              invalid={
                                postcode === ""
                                  ? false
                                  : checkvalidPostcode(postcode)
                              }
                              onChange={(e) => {
                                setPostcode(e.target.value);
                              }}
                              className="inputs-adj"
                            ></Input>
                            <FormFeedback invalid>
                              <small>Invalid Format</small>
                            </FormFeedback>
                          </span>

                          <span className="pr-1 pl-1">
                            <p className="input-text-heading">Straat</p>
                            <Input
                              required
                              invalid={
                                straat === "" ? false : checkvalidstraat(straat)
                              }
                              onChange={(e) => {
                                e.preventDefault();
                                setStraat(e.target.value);
                              }}
                              className="inputs-adj"
                            ></Input>
                            <FormFeedback invalid>
                              <small>Invalid Format</small>
                            </FormFeedback>
                          </span>

                          <span>
                            <p className="input-text-heading">Huisnummer</p>
                            <Input
                              required
                              invalid={
                                huisnummer == null
                                  ? false
                                  : checkvalidHuisnummer(huisnummer)
                              }
                              onChange={(e) => {
                                setHuisnummer(e.target.value);
                              }}
                              className="inputs-adj"
                            ></Input>
                            <FormFeedback invalid>
                              <small>Invalid Format</small>
                            </FormFeedback>
                          </span>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p className="input-text-heading mt-2">Woonplaats</p>
                        <Input
                          required
                          invalid={
                            woonplaats == null
                              ? false
                              : checkvalidWoonplaats(woonplaats)
                          }
                          onChange={(e) => {
                            setWoonplaats(e.target.value);
                          }}
                          className="inputs-adj"
                        ></Input>
                        <FormFeedback invalid>
                          <small>Invalid Format</small>
                        </FormFeedback>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <p className="door-text mt-4">
                          Door vrijblijvend offertes aan te vragen ga je akkoord
                          met onze{" "}
                          <span style={{ color: "#48cae4" }}>
                            algemene voorwaarden
                          </span>
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="d-flex justify-content-center">
                        {!(
                          checkvalidPostcode(postcode) ||
                          checkvalidstraat(straat) ||
                          checkvalidHuisnummer(huisnummer) ||
                          checkvalidWoonplaats(woonplaats)
                        ) ? (
                          <button
                            type="submit"
                            className="img-fluid px-2 py-3 mt-2text-center btn-card "
                          >
                            GRATIS OFFERTES VERGELIJKEN
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            disabled
                            type="submit"
                            className="img-fluid px-2 py-3 mt-2text-center btn-card "
                          >
                            GRATIS OFFERTES VERGELIJKEN
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 2 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text pt-3">
                          Ben je eigenaar van de woning?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>

                    <Row className="pt-5 pb-5 mb-5">
                      <Col className="p-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setError(false);
                            checkboxarr.includes(1)
                              ? checkBoxHandle(e, 1)
                              : setCheckboxarr([...checkboxarr, 1]);
                          }}
                          className={
                            checkboxarr.includes(1)
                              ? "py-3 btn-click"
                              : "py-3 btn"
                          }
                        >
                          Ja
                        </button>
                      </Col>

                      <Col className="p-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setError(false);
                            checkboxarr.includes(2)
                              ? checkBoxHandle(e, 2)
                              : setCheckboxarr([...checkboxarr, 2]);
                          }}
                          className={
                            checkboxarr.includes(2)
                              ? "py-3 btn-click"
                              : "py-3 btn"
                          }
                        >
                          Nee
                        </button>
                      </Col>
                    </Row>
                    <Row>
                      {" "}
                      {error ? (
                        <span style={{ color: "#FF0000", fontSize: 15 }}>
                          Select atleast one*
                        </span>
                      ) : (
                        <span style={{ color: "#03223f", fontSize: 15 }}>
                          Select atleast one*
                        </span>
                      )}
                    </Row>

                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(1) || checkboxarr.includes(2) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 3 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Wat is de huidige trapbekleding?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="pb-2">
                      <Col className="">
                        <Row>
                          <Col className="p-1">
                            {" "}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(3)
                                  ? checkBoxHandle(e, 3)
                                  : setCheckboxarr([...checkboxarr, 3]);
                              }}
                              className={
                                checkboxarr.includes(3)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img height={40} src={hout}></img>
                                </div>
                                <div className="ml-4 ml-lg-0  pt-2">Hout</div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(4)
                                  ? checkBoxHandle(e, 4)
                                  : setCheckboxarr([...checkboxarr, 4]);
                              }}
                              className={
                                checkboxarr.includes(4)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <div>
                                    <img height={40} src={laminaat}></img>
                                  </div>
                                  <div>
                                    <img
                                      className="ml-1"
                                      height={40}
                                      src={hpl}
                                    ></img>
                                  </div>
                                </div>

                                <div>
                                  Laminaat <br />
                                  CPL / HPL
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>
                          </Col>
                        </Row>

                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(5)
                                  ? checkBoxHandle(e, 5)
                                  : setCheckboxarr([...checkboxarr, 5]);
                              }}
                              className={
                                checkboxarr.includes(5)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img height={40} src={pvc}></img>
                                </div>
                                <div className="ml-4 ml-lg-0  pt-2 ">
                                  PVC / Vinyl
                                </div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(6)
                                  ? checkBoxHandle(e, 6)
                                  : setCheckboxarr([...checkboxarr, 6]);
                              }}
                              className={
                                checkboxarr.includes(6)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img height={40} src={pvc}></img>
                                </div>

                                <div>
                                  <div className="ml-4 ml-lg-0  pt-2 ">
                                    Tapijt
                                  </div>
                                </div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(7)
                                  ? checkBoxHandle(e, 7)
                                  : setCheckboxarr([...checkboxarr, 7]);
                              }}
                              className={
                                checkboxarr.includes(7)
                                  ? "p-3 btn-click"
                                  : "p-3 btn"
                              }
                            >
                              Green
                            </button>{" "}
                          </Col>
                          <Col className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(8)
                                  ? checkBoxHandle(e, 8)
                                  : setCheckboxarr([...checkboxarr, 8]);
                              }}
                              className={
                                checkboxarr.includes(8)
                                  ? "p-3 btn-click"
                                  : "p-3 btn"
                              }
                            >
                              Overig
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      {" "}
                      {error ? (
                        <span style={{ color: "#FF0000", fontSize: 15 }}>
                          Select atleast one*
                        </span>
                      ) : (
                        <span style={{ color: "#03223f", fontSize: 15 }}>
                          Select atleast one*
                        </span>
                      )}
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(3) ||
                        checkboxarr.includes(4) ||
                        checkboxarr.includes(5) ||
                        checkboxarr.includes(6) ||
                        checkboxarr.includes(7) ||
                        checkboxarr.includes(8) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 4 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Wat is de gewenste trapbekleding?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="pb-4 mb-5">
                      <Col>
                        <Row>
                          <Col className="p-1">
                            {" "}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(9)
                                  ? checkBoxHandle(e, 9)
                                  : setCheckboxarr([...checkboxarr, 9]);
                              }}
                              className={
                                checkboxarr.includes(9)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                  <div>
                                    <img height={40} src={laminaat}></img>
                                  </div>
                                  <div>
                                    <img
                                      className="ml-1"
                                      height={40}
                                      src={hpl}
                                    ></img>
                                  </div>
                                </div>

                                <div>
                                  Laminaat <br />
                                  CPL / HPL
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>
                          </Col>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(10)
                                  ? checkBoxHandle(e, 10)
                                  : setCheckboxarr([...checkboxarr, 10]);
                              }}
                              className={
                                checkboxarr.includes(10)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img height={40} src={hout}></img>
                                </div>
                                <div className="ml-4 ml-lg-0  pt-2">Hout</div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                        </Row>

                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(11)
                                  ? checkBoxHandle(e, 11)
                                  : setCheckboxarr([...checkboxarr, 11]);
                              }}
                              className={
                                checkboxarr.includes(11)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img height={40} src={pvc}></img>
                                </div>
                                <div className="ml-4 ml-lg-0  pt-2 ">
                                  PVC / Vinyl
                                </div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(12)
                                  ? checkBoxHandle(e, 12)
                                  : setCheckboxarr([...checkboxarr, 12]);
                              }}
                              className={
                                checkboxarr.includes(12)
                                  ? "p-3 btn-click"
                                  : "p-3 btn"
                              }
                            >
                              Geen idee,adviseer mij
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {error ? (
                      <span style={{ color: "#FF0000", fontSize: 15 }}>
                        Select atleast one*
                      </span>
                    ) : (
                      <span style={{ color: "#03223f", fontSize: 15 }}>
                        Select atleast one*
                      </span>
                    )}
                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(9) ||
                        checkboxarr.includes(10) ||
                        checkboxarr.includes(11) ||
                        checkboxarr.includes(12) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 5 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Wat is het model van de trap?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="pb-5 mb-2">
                      <Col className="pb-3">
                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(13)
                                  ? checkBoxHandle(e, 13)
                                  : setCheckboxarr([...checkboxarr, 13]);
                              }}
                              className={
                                checkboxarr.includes(13)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img
                                    src={laag56}
                                    height={40}
                                    width={30}
                                  ></img>
                                </div>
                                <div></div>
                                <div className=" pt-2">Rechte trap</div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col sm="6" className="p-1">
                            {" "}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(14)
                                  ? checkBoxHandle(e, 14)
                                  : setCheckboxarr([...checkboxarr, 14]);
                              }}
                              className={
                                checkboxarr.includes(14)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img src={laag57} height={40}></img>
                                </div>
                                <div></div>
                                <div className="pt-2">Kwart draai</div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(15)
                                  ? checkBoxHandle(e, 15)
                                  : setCheckboxarr([...checkboxarr, 15]);
                              }}
                              className={
                                checkboxarr.includes(15)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <img src={laag58} height={40}></img>
                                </div>
                                <div></div>
                                <div className="pt-2">Dubbele draai</div>
                                <div></div>
                                <div></div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(16)
                                  ? checkBoxHandle(e, 16)
                                  : setCheckboxarr([...checkboxarr, 16]);
                              }}
                              className={
                                checkboxarr.includes(16)
                                  ? "p-3 btn-click"
                                  : "p-3 btn"
                              }
                            >
                              Overig
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {error ? (
                      <span style={{ color: "#FF0000", fontSize: 15 }}>
                        Select atleast one*
                      </span>
                    ) : (
                      <span style={{ color: "#03223f", fontSize: 15 }}>
                        Select atleast one*
                      </span>
                    )}
                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(13) ||
                        checkboxarr.includes(14) ||
                        checkboxarr.includes(15) ||
                        checkboxarr.includes(16) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 6 && (
                  <Container className="pb-5">
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Betreft het een gesloten of open trap?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col className="pb-5 pt-4">
                        <Row>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(17)
                                  ? checkBoxHandle(e, 17)
                                  : setCheckboxarr([...checkboxarr, 17]);
                              }}
                              className={
                                checkboxarr.includes(17)
                                  ? "p-2  btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex">
                                <div>
                                  <img src={icon1} height={45}></img>
                                </div>
                                <div className="pl-4 pt-2">Gesloten</div>
                              </div>
                            </button>{" "}
                          </Col>
                          <Col sm="6" className="p-1">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setError(false);
                                checkboxarr.includes(18)
                                  ? checkBoxHandle(e, 18)
                                  : setCheckboxarr([...checkboxarr, 18]);
                              }}
                              className={
                                checkboxarr.includes(18)
                                  ? "p-2 btn-click"
                                  : "p-2 btn"
                              }
                            >
                              <div className="d-flex">
                                <div>
                                  <img src={icon2} height={45}></img>
                                </div>
                                <div className="pl-4 pt-2">Open</div>
                              </div>
                            </button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mt-5">
                        {error ? (
                          <span style={{ color: "#FF0000", fontSize: 15 }}>
                            Select atleast one*
                          </span>
                        ) : (
                          <span style={{ color: "#03223f", fontSize: 15 }}>
                            Select atleast one*
                          </span>
                        )}
                      </Col>
                    </Row>

                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(17) ||
                        checkboxarr.includes(18) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 7 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Wat is de uitvoerdatum?
                        </h6>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col className="text-center pb-2">
                        <div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(false);
                              checkboxarr.includes(19)
                                ? checkBoxHandle(e, 19)
                                : setCheckboxarr([...checkboxarr, 19]);
                            }}
                            className={
                              checkboxarr.includes(19)
                                ? "py-3 btn-click"
                                : "py-3 btn"
                            }
                          >
                            In overleg
                          </button>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(false);
                              checkboxarr.includes(20)
                                ? checkBoxHandle(e, 20)
                                : setCheckboxarr([...checkboxarr, 20]);
                            }}
                            className={
                              checkboxarr.includes(20)
                                ? "py-3 btn-click"
                                : "py-3 btn"
                            }
                          >
                            Binnen 3 maanden
                          </button>
                        </div>
                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(false);
                              checkboxarr.includes(21)
                                ? checkBoxHandle(e, 21)
                                : setCheckboxarr([...checkboxarr, 21]);
                            }}
                            className={
                              checkboxarr.includes(21)
                                ? "py-3 btn-click"
                                : "py-3 btn"
                            }
                          >
                            Binnen 3 tot 6 maanden
                          </button>
                        </div>
                      </Col>
                    </Row>
                    {error ? (
                      <span
                        className="mt-1"
                        style={{ color: "#FF0000", fontSize: 15 }}
                      >
                        Select atleast one*
                      </span>
                    ) : (
                      <span
                        className="mt-1"
                        style={{ color: "#03223f", fontSize: 15 }}
                      >
                        Select atleast one*
                      </span>
                    )}
                    <Row>
                      <Col className="d-flex justify-content-center mt-4">
                        {checkboxarr.includes(19) ||
                        checkboxarr.includes(20) ||
                        checkboxarr.includes(21) ? (
                          <button
                            onClick={(e) => {
                              btnClick(e);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setError(true);
                            }}
                            className="img-fluid px-3 py-3 text-center btn-card "
                          >
                            VENDER
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </button>
                        )}
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 8 && (
                  <Container>
                    <Row>
                      <Col>
                        <h6 className="naar-text-card pt-3">
                          Jouw contactgegevens
                        </h6>
                      </Col>
                      <Col>
                        <img
                          className="float-right"
                          height={45}
                          src={arrow_hand_p1}
                        ></img>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row className="pt-4 pb-5">
                      <Col>
                        <Row>
                          <Col className="p-1">
                            <div className="w-100 h-100">
                              <p className="input-text-heading">Voornaam*</p>
                              <Input
                                required
                                invalid={
                                  voornaam === "" ? false : checkvalidVoornaam()
                                }
                                onChange={(e) => {
                                  e.preventDefault();
                                  setVoornaam(e.target.value);
                                }}
                                className="inputs-adj"
                              ></Input>
                              <FormFeedback invalid>
                                <small>Invalid Format</small>
                              </FormFeedback>
                            </div>
                          </Col>
                          <Col className="p-1">
                            <div className="w-100 h-100">
                              <p className="input-text-heading">Achternaam*</p>
                              <Input
                                required
                                invalid={
                                  achternaam == ""
                                    ? false
                                    : checkvalidAchternaam()
                                }
                                onChange={(e) => {
                                  e.preventDefault();
                                  setAchternaam(e.target.value);
                                }}
                                className="inputs-adj"
                              ></Input>
                              <FormFeedback invalid>
                                <small>Invalid Format</small>
                              </FormFeedback>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="p-1">
                            <div className="w-100 h-100">
                              <p className="input-text-heading"> E-mail*</p>
                              <Input
                                required
                                invalid={
                                  email == "" ? false : checkvalidEmail()
                                }
                                onChange={(e) => {
                                  e.preventDefault();
                                  setEmail(e.target.value);
                                }}
                                className="inputs-adj"
                              ></Input>
                              <FormFeedback invalid>
                                <small>Invalid Format</small>
                              </FormFeedback>
                            </div>
                          </Col>
                          <Col className="p-1">
                            <div className="w-100 h-100">
                              <p className="input-text-heading">
                                Telefoonnummer*
                              </p>
                              <Input
                                required
                                invalid={
                                  telefoonnummer == ""
                                    ? false
                                    : checkvalidTelefoonnummer()
                                }
                                onChange={(e) => {
                                  e.preventDefault();
                                  setTelefoonnummer(e.target.value);
                                }}
                                className="inputs-adj"
                              ></Input>
                              <FormFeedback invalid>
                                <small>Invalid Format</small>
                              </FormFeedback>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center mt-2">
                     { !(
                          checkvalidVoornaam() ||
                          checkvalidAchternaam() ||
                          checkvalidEmail() ||
                          checkvalidTelefoonnummer()
                        ) ?<button
                        
                        type="submit"
                        className="img-fluid px-3 py-3 text-center btn-card "
                      >
                        VENDER
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>:<button
                        disabled
                        type="submit"
                        className="img-fluid px-3 py-3 text-center btn-card "
                      >
                        VENDER
                        <span>
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </button>}
                        
                      </Col>
                    </Row>
                    <p className="door-text mt-3  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
                {active === 9 && (
                  <Container className=" pb-5 ">
                    <Row>
                      <Col lg="8" xs="8" className="pr-0">
                        <h5 className="naar-text-card pt-3">
                          Bedankt voor je aanvraag!
                        </h5>
                      </Col>
                      <Col>
                        <img className="float-right" height={45} src={ok}></img>
                      </Col>
                    </Row>
                    <hr></hr>
                    <Row>
                      <Col>
                        <div className="py-2 mb-5">
                          <h6 className="pr-5">
                            We hebben jouw gegevens ontvangen.
                            <br />
                            <br />
                            We sturen je op korte termijn de offertes van de
                            traprenovatie-specialisten in jouw buurt toe.{" "}
                          </h6>
                        </div>
                      </Col>
                    </Row>
                    <p className="door-text mt-5 pt-5  text-center">
                      Meer dan 109.000 mensen gingen je voor!
                    </p>
                  </Container>
                )}
              </Form>
            </Col>
          </Row>
        </Col>
      </Container>
    </>
  );
}
