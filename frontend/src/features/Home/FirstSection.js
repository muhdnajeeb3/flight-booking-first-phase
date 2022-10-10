import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import "./FirstSection.css";
import Navbar from "react-bootstrap/Navbar";
// import Select from "react-select";
// import Records from "../records.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBus,
  faHotel,
  faParachuteBox,
  faPlaneDeparture,
  faTrain,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function FirstSection() {
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState("");
  const [multiCity, setMultiCity] = useState("");
  const [newCity, setNewCity] = useState([]);
  const [from, setFrom] = useState("Delhi");
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const FLIGHTHANDLER = () => {
    navigate("/flights");
  };
  const HOTELHANDLER = () => {
    navigate("/hotels");
  };
  const TRAINHANDLER = () => {
    navigate("/trains");
  };
  const BUSESHANDLER = () => {
    navigate("/buses");
  };
  const VISASHANDLER = () => {
    navigate("/visas");
  };
  const HOLIDAYPACKAGES = () => {
    navigate("/holidaypackages");
  };
  const MULTICITYHANDLER = () => {
    setOneWay("");
    setRoundTrip("");
  };
  const ROUNDTRIP = () => {
    setMultiCity("");
    setOneWay("");
  };

  const ONEWAY = (e) => {
    setMultiCity("");
    setRoundTrip("");
  };
  const HANDLEADD = () => {
    const newcity = [...newCity, []];
    setNewCity(newcity);
  };
  const DELETEHANDLER = (i) => {
    const deletenewcity = [...newCity];
    deletenewcity.splice(i, 1);
    setNewCity(deletenewcity);
  };
  const options = [
    { value: "Dubai", label: "Dubai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Kannur", label: "Kannur" },
    { value: "Kolkata", label: "Kolkata" },
  ];
  const FROMHANDLER = () => {
    // setFrom(true)
  };

  const SELECTHANDLER = (e) => {
    setFrom(e.value);
    if(from){
      // setFrom(false)
    }
  };
  const SEARCHHANDLER = () => {
    navigate('/search')
  }

  return (
    <div className="FirstSection" style={{display:"flex",flexDirection:"row"}}>
      {/*  */}
      {/* <Navbar expand="lg">
        <Navbar.Brand href="/" className="logo">
          LOGO
        </Navbar.Brand>
      </Navbar> */}
      <Container className="con">
        <Row className="roww1" >
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={FLIGHTHANDLER}>
              <FontAwesomeIcon icon={faPlaneDeparture} size="xl" />
              <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Flights
              </span>
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
              <FontAwesomeIcon
                icon={faHotel}
                onClick={HOTELHANDLER}
                size="xl"
              />{" "}
              <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Hotels
              </span>
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit">
              <FontAwesomeIcon
                icon={faTrain}
                onClick={TRAINHANDLER}
                size="xl"
              />
              <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Trains
              </span>
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={BUSESHANDLER}>
              <FontAwesomeIcon icon={faBus} size="xl" />
              <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Buses
              </span>
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={VISASHANDLER}>
              <FontAwesomeIcon icon={faAddressCard} size="xl" /> <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Visas
              </span>
            </Button>
          </Col>
          <Col className="hover-underline-animation">
            {" "}
            <Button variant="" type="submit" onClick={HOLIDAYPACKAGES}>
              <FontAwesomeIcon icon={faParachuteBox} size="xl" />
              <br />
              <span style={{ fontSize: "14px", lineHeight: "12px" }}>
                Holiday Packages
              </span>
            </Button>
          </Col>
        </Row>
        {/* one way roundtrip multicity */}
        <Row className="roww">
          <Button className="radiobutton" variant="">
            <input
              type="radio"
              value="select"
              name="select"
              className="onewaytitle"
              onChange={ONEWAY}
              onClick={() => setOneWay(true)}
            />
            <span className="onewaytitle">ONE WAY</span>
          </Button>
          <Button className="radiobutton1" variant="">
            <input
              type="radio"
              className="onewaytitle"
              value="select1"
              name="select"
              onChange={ROUNDTRIP}
              onClick={() => setRoundTrip(true)}
            />
            <span className="onewaytitle">ROUND TRIP</span>
          </Button>
          <Button className="radiobutton2" variant="">
            <input
              type="radio"
              className="onewaytitle"
              value="select2"
              name="select"
              onClick={() => setMultiCity(true)}
              onChange={MULTICITYHANDLER}
            />
            <span className="onewaytitle">MULTI CITY</span>
          </Button>
          <Row className="bidf1">
            <h5 className="bidf">Book International and Domestic Flights</h5>
          </Row>

          <Row>
            {/* oneway */}
            {oneWay && (
              <>
                <Row className="oneway">
                  <Col className="col-3" >
                    <span className="from">FROM</span>
                    {/* {from && (
                      <>
                        <Select
                          options={options}
                          onChange={SELECTHANDLER}
                          value={options.filter(function (option) {
                            return option.value === from;
                          })}
                          label="Single select"
                        />
                      </>
                    )} */}
                    <br />
                    <span className="start">{from}</span>
                    <p className="subfrom">DEL,AIRPORT</p>
                  </Col>

                  <div className="row vertical-line"></div>

                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">TO</span>
                    <br />
                    <span className="start">DUBAI</span>
                    <p className="subfrom">DxB,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from">DEPARTURE</span>
                    <br />
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from" style={{ textAlign: "center" }}>
                      RETURN
                    </span>
                    <br />
                    <p className="returnparag">
                      Tap to add a return date for bigger
                    </p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-2" onClick={() => alert("hey")}>
                    <span className="from">TRAVELLERS &CLASS</span>
                    <br />
                  </Col>
                </Row>
              </>
            )}
            {/* round trip */}
            {roundTrip && (
              <>
                <Row className="oneway">
                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">FROM</span>
                    <br />
                    <span className="start">Delhi</span>
                    <p className="subfrom">DEL,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">TO</span>
                    <br />
                    <span className="start">DUBAI</span>
                    <p className="subfrom">DxB,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from">DEPARTURE</span>
                    <br />
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from" style={{ textAlign: "center" }}>
                      RETURN
                    </span>
                    <br />
                    <p className="returnparag">
                      Tap to add a return date for bigger
                    </p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-2" onClick={() => alert("hey")}>
                    <span className="from">TRAVELLERS &CLASS</span>
                    <br />
                  </Col>
                </Row>
              </>
            )}
            {/* mutli city */}
            {multiCity && (
              <>
                <Row className="oneway">
                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">FROM</span>
                    <br />
                    <span className="start">Delhi</span>
                    <p className="subfrom">DEL,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">TO</span>
                    <br />
                    <span className="start">DUBAI</span>
                    <p className="subfrom">DxB,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from">DEPARTURE</span>
                    <br />
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-3">
                    <h4>RETURN</h4>
                  </Col>
                </Row>
                <Row className="oneway">
                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">FROM</span>
                    <br />
                    <span className="start">Delhi</span>
                    <p className="subfrom">DEL,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-3" onClick={() => alert("hey")}>
                    <span className="from">TO</span>
                    <br />
                    <span className="start">DUBAI</span>
                    <p className="subfrom">DxB,AIRPORT</p>
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="coloneway1" onClick={() => alert("hey")}>
                    <span className="from">DEPARTURE</span>
                    <br />
                  </Col>
                  <div className="row vertical-line"></div>

                  <Col className="col-3">
                    <Button
                      className="anothercity"
                      // onClick={() => setNewCity(!newCity)}
                      onClick={() => HANDLEADD()}
                    >
                      {" "}
                      +Add ANOTHER CITY
                    </Button>
                  </Col>

                  {/* <Col>
                    <Button variant="" className="onewaybutton">
                      <h1>TRAVELLERS AND CLASS</h1>
                    </Button>
                  </Col> */}
                </Row>
                {newCity.map((data, i) => {
                  return (
                    <>
                      <Row className="oneway">
                        <Col className="col-3" onClick={() => alert("hey")}>
                          <span className="from">FROM</span>
                          <br />
                          <span className="start">Delhi</span>
                          <p className="subfrom">DEL,AIRPORT</p>
                        </Col>
                        <div className="row vertical-line"></div>

                        <Col className="col-3" onClick={() => alert("hey")}>
                          <span className="from">TO</span>
                          <br />
                          <span className="start">DUBAI</span>
                          <p className="subfrom">DxB,AIRPORT</p>
                        </Col>
                        <div className="row vertical-line"></div>

                        <Col
                          className="coloneway1"
                          onClick={() => alert("hey")}
                        >
                          <span className="from">DEPARTURE</span>
                          <br />
                        </Col>
                        <div className="row vertical-line"></div>

                        <Col className="col-3">
                          <Button variant="" className="deletebutton">
                            <Button
                              variant="dark"
                              onClick={() => DELETEHANDLER(i)}
                            >
                              x
                            </Button>
                          </Button>
                        </Col>
                      </Row>
                    </>
                  );
                })}
              </>
            )}
            {/* FARE TYPES */}
            <Row className="row3">
              <span className="faretypes">
                Select A <br />
                Fare Type:
              </span>
              <Button className="faretypesbutton" style={{backgroundColor:"rgb(237, 235, 235)"}} variant="">
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Regular
                  <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton1" variant="" style={{backgroundColor:"rgb(237, 235, 235)"}}>
                {" "}
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Armed Forces
                  <br />
                  Fares <span className="new">NEW</span>
                </span>{" "}
              </Button>
              <Button className="faretypesbutton2" variant="" style={{backgroundColor:"rgb(237, 235, 235)"}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Student <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton3" variant="" style={{backgroundColor:"rgb(237, 235, 235)"}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Senior Citizen <br />
                  Fares
                </span>{" "}
              </Button>
              <Button className="faretypesbutton4" variant="" style={{backgroundColor:"rgb(237, 235, 235)"}}>
                {/* <input type="radio" name="fare" className="fareradio"/> */}
                <span className="farespan">
                  Doctor & Nurses <br />
                  Fares
                </span>{" "}
              </Button>
              {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
            </Row>
          </Row>
          {/* <br /> */}
          {/* one way */}
        </Row>
        <Button className="searchbutton" onClick={SEARCHHANDLER}>
          <span className="search">SEARCH</span>
        </Button>
      </Container>
    </div>
  );
}

export default FirstSection;
