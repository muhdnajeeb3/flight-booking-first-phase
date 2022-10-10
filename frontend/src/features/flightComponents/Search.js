import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Navbar,
  Row,
} from "react-bootstrap";
// import Slider from "react-slick";
import "./Search.css";

function Search() {
  const [oneway, setOneway] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);

  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
  }
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
  }
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="">
      <div className="searchfirstsec" style={{paddingBottom:"80px"}}>
        {/* <Container className="searchcontainer"> */}
        <Row className="searchrow" style={{ paddingLeft: "2rem", paddingRight: "2rem" ,display:"flex",flexDirection:"row"}}>
          <div
            className="col-1"
            style={{
              background: "#0a223d",
              borderRadius: "10px",
              width: "130px",
              padding: "4px 9px 0",
              // padding:"5px",
              marginLeft: ""

            }}
          >
            <h5 style={{
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "12px",
              marginBottom: "5px",
              color: "#008cff"
            }}>TRIP TYPE</h5>
            <Dropdown style={{ width: "8px" ,backgroundColor:"green"}}>
              <Dropdown.Toggle variant="" id="dropdown-basic" style={{ color: "#fff" }}>
                <span className="searchstart" style={{ fontSize: "17px", fontWeight: "500",backgroundColor:"transparent" }}>SELECT</span>

              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={OnewayHandler}>
                  ONE WAY
                </Dropdown.Item>
                <Dropdown.Item onClick={RoundtripHandler}>
                  ROUND TRIP
                </Dropdown.Item>
                <Dropdown.Item onClick={MulticityHandler}>
                  MULTI CITY
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {oneway && (
            <>

              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px",padding:"10px" }}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>TO</h5>
                <span className="searchstart">Kolkata,India</span>

              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>DEPART</h5>
                <span className="searchstart">Mon,Oct 23,2022</span>

              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px",padding:"10px" }}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>RETURN</h5>
              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "auto" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

              </div>
            </>
          )}
          {roundTrip && (
            <>

              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px",padding:"10px" }}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>TO</h5>
                <span className="searchstart">Kolkata,India</span>

              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>DEPART</h5>
                <span className="searchstart">Mon,Oct 23,2022</span>

              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "160px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>RETURN</h5>
              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "auto",padding:"10px" }}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

              </div>
            </>
          )}
          {multiCity && (
            <>
              <div
                className="col-5"
                style={{ background: "#0a223d", borderRadius: "10px", width: "360px" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>FROM</h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{ background: "#0a223d", borderRadius: "10px", width: "auto" ,padding:"10px"}}
              >
                <h5 style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "12px",
                  marginBottom: "5px",
                  marginTop: "5px",
                  color: "#008cff"
                }}>PASSENGERS&CLASS</h5>
                <span className="searchstart">1Adult,Economy</span>

              </div>
            </>
          )}

        </Row>
        <div className="farerow2"  >
          <Row style={{ top: "3rem", position: "relative",minHeight:"3rem" ,background: "transparent", marginLeft: "6rem",display:"flex",flexDirection:"row" }}>
            <span className="faretypes " style={{ marginTop: "", bottom: "17px" ,color:"#fff"}}>
              Fare Type:
            </span>
            <Button className="faretypesbutton" variant="" style={{ backgroundColor: "#364c63", borderRadius: "6px 0 0 6px" ,maxWidth:"15%"}}>
              {/* <input type="checkbox" name="fare" className="fareradio" style={{borderRadius:"40px",marginRight:"5px"}} /> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Regular
                {/* <br />
                  Fares */}
              </span>{" "}
            </Button>
            <Button className="faretypesbutton1" variant="" style={{ backgroundColor: "#364c63", borderRadius: " 0 0 "  ,maxWidth:"15%"}} >
              {" "}
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Armed Forces
                <br />
                {/* Fares <span className="new">NEW</span> */}
              </span>{" "}
            </Button>
            <Button className="faretypesbutton2" variant="" style={{ backgroundColor: "#364c63", borderRadius: " 0 0 "  ,maxWidth:"15%"}}>
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Student <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button className="faretypesbutton3" variant="" style={{ backgroundColor: "#364c63", borderRadius: " 0 0 "  ,maxWidth:"15%"}}>
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Senior Citizen <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button className="faretypesbutton4" variant="" style={{ backgroundColor: "#364c63", borderRadius: " 0 0 "  ,maxWidth:"15%",}}>
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Doctor & Nurses <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button className="faretypesbutton4" variant="" style={{ backgroundColor: "#364c63", borderRadius: " 0 6px 6px 0 "  ,maxWidth:"15%"}}>
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Double Seat <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            {/* <Button className="faretypesbutton5" variant=""><input type="radio" name="fare"/>1</Button> */}
          </Row>
        </div>

        {/* </Container> */}
      </div>
      {/* <div className="searchcenter"></div> */}
     

    
    </div>
  );
}

export default Search;
