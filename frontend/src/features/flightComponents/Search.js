import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
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
import { useLocation } from "react-router-dom";
// import Slider from "react-slick";
import "./Search.css";

function Search() {
  const location = useLocation();
  const [oneway, setOneway] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);

  const [from, setFrom] = React.useState(location.state.from);
  const [to, setTo] = React.useState(location.state.to);
  const [departure, setDeparture] = React.useState(location.state.departure);
  const [retrn, setRetrn] = React.useState(location.state.retrn);
  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
  };
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
  };
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <div className="searchfirstsec" style={{ paddingBottom: "80px" }}>
        {/* <Container className="searchcontainer"> */}
        <Row
          className="searchrow"
          style={{
            paddingLeft: "2rem",
            paddingRight: "2rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className="col-1"
            style={{
              background: "#0a223d",
              borderRadius: "10px",
              width: "130px",
              padding: "4px 9px 0",
              // padding:"5px",
              marginLeft: "",
            }}
          >
            <h5
              style={{
                fontWeight: "700",
                fontSize: "14px",
                lineHeight: "12px",
                marginBottom: "5px",
                color: "#008cff",
              }}
            >
              TRIP TYPE
            </h5>

            <DropdownButton
              id="dropdown-basic-button"
              variant=""
              title="SELECT"
              style={{ color: "#fff", width: "8px", backgroundColor: "" }}
            >
              <Dropdown.Item onClick={OnewayHandler}> ONE WAY</Dropdown.Item>
              <Dropdown.Item onClick={RoundtripHandler}>
                ROUND TRIP
              </Dropdown.Item>
              <Dropdown.Item onClick={MulticityHandler}>
                MULTI CITY
              </Dropdown.Item>
            </DropdownButton>
          </div>
          {oneway && (
            <>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    style={{ color: "#fff", height: "20px" }}
                    fullWidth
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    label="from"
                    placeholder={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Pune"}>Pune</MenuItem>
                    <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    style={{ color: "#fff", height: "20px" }}
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={to}
                    label={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Pune"}>Pune</MenuItem>
                    <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>
                        
                < FormControl sx={{ width: "100%" }} className="datepicker">

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      
                      dateAdapter={AdapterDateFns}
                      className="datepicker"

                    >
                      <DatePicker
                        // label="Departure"
                        placeholder={departure}
                        className="datepicker"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
                < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        // label="Return"
                        placeholder={retrn}
                        value={retrn}
                        onChange={(newValue) => {
                          setRetrn(newValue);
                        }}

                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
          {roundTrip && (
            <>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <span className="searchstart">Kolkata,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>
                <span className="searchstart">Mon,Oct 23,2022</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
          {multiCity && (
            <>
              <div
                className="col-5"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "360px",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <span className="searchstart">New Delhi,India</span>
              </div>
              <div
                className="col-2"
                style={{
                  background: "#0a223d",
                  borderRadius: "10px",
                  width: "auto",
                  padding: "10px",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <span className="searchstart">1Adult,Economy</span>
              </div>
            </>
          )}
        </Row>
        <div className="farerow2">
          <Row
            style={{
              top: "3rem",
              position: "relative",
              minHeight: "3rem",
              background: "transparent",
              marginLeft: "6rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <span
              className="faretypes "
              style={{ marginTop: "", bottom: "17px", color: "#fff" }}
            >
              Fare Type:
            </span>
            <Button
              className="faretypesbutton"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: "6px 0 0 6px",
                maxWidth: "15%",
              }}
            >
              {/* <input type="checkbox" name="fare" className="fareradio" style={{borderRadius:"40px",marginRight:"5px"}} /> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Regular
                {/* <br />
                  Fares */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton1"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "15%",
              }}
            >
              {" "}
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Armed Forces
                <br />
                {/* Fares <span className="new">NEW</span> */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton2"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "15%",
              }}
            >
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Student <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton3"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "15%",
              }}
            >
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Senior Citizen <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton4"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "15%",
              }}
            >
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Doctor & Nurses <br />
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton4"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 6px 6px 0 ",
                maxWidth: "15%",
              }}
            >
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
