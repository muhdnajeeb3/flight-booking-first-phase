import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import styles from "../../Components/flight.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";

import Select from "react-select";
import "./FirstSection.css";
import { FormControl, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
// import Slider from "react-slick";
import "./Search.css";

function Search() {
  const location = useLocation();
  // const [selectedButtonColor, setSelectedButtonColor] = useState(
  //   location.state.selectedButtonColor
  // );
  const [travellers, setTravellers] = React.useState(location.state?.travellers);
  const [adult1, setAdult1] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1);
  const [selectedButtonColortwo, setSelectedButtonColortwo] = useState(0);
  const [selectedButtonColorthree, setSelectedButtonColorthree] = useState(0);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const [cabinClass, setCabinClass] = useState(false);
  const [cabinClassType, setCabinClassType] = useState("");

  const [openTravellers, setOpenTravellers] = useState(
    location.state?.openTravellers
  );
  // const [togglePassengerColor, setTogglePassengerColor] = useState(
  //   location.state.togglePassengerColor
  // );
  const [oneway, setOneway] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("ONEWAY");

  const [select, setSelect] = useState(false);
  const [selectTo, setSelectTo] = useState(false);
  const [selectOne, setSelectOne] = useState(false);
  const [selectTwo, setSelectTwo] = useState(false);
  const [selectOneto, setSelectOneto] = useState(false);
  const [selectTwoto, setSelectTwoto] = useState(false);

  const [from, setFrom] = React.useState(location.state?.from);
  const [to, setTo] = React.useState(location.state?.to);
  const [departure, setDeparture] = React.useState(location.state?.departure);
  const [retrn, setRetrn] = React.useState(location.state?.retrn);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  let ar2 = [0, 1, 2, 3, 4];

  // const navigate = useNavigate();
  const options = [
    {
      value: "Delhi",
      label: "Delhi",
      //    icon:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
      //    <path fill-rule="evenodd" fill="url(data:image/jpeg;base64,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)" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
      //  </svg>
    },
    { value: "Kochi", label: "Kochi" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Banglore", label: "Banglore" },
  ];
  const FROMHANDLER = (e) => {
    // setSelect(false);
    setFrom(e.value);
    // e.stopPropagation();
  };
  const TOHANDLER = (e) => {
    // setSelectTo(false);
    setTo(e.value);
  };
  const ROUNDTRIPFROMHANDLER = (e) => {
    setSelectOne(false);
    setFrom(e.value);
  };
  const MULTICITYFROMHANDLER = (e) => {
    setSelectTwo(false);
    setFrom(e.value);
  };
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
    setTitle("ONEWAY");
  };
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
    setTitle("ROUND TRIP");
  };
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
    setTitle("MULTI CITY");
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/flights");
  };
  const SEARCHFROMHANDLER = (e) => {
    setFrom(e.target.value);
    setQuery(e.target.value);
  };
  const onClickNoOfPass1 = (val1) => {
    setAdult1(val1);
    console.log("jjjjjj", val1);
  };
  const onClickNoOfPass2 = (val2) => {
    setChild(val2);
    console.log("llllll", val2);
  };
  const onClickNoOfPass3 = (val3) => {
    setInfant(val3);
    console.log("rrrrrrrr", val3);
  };
  useEffect(() => {
    const addedvalue = adult1 + child + infant;
    setTravellers(addedvalue);
    console.log("added", addedvalue);
  }, [adult1, child, infant]);

  const BUISSNESS = () => {
    setCabinClass(true);
    setCabinClassType("BUISNESS");
  };
  const ECONOMY = () => {
    setCabinClass(true);
    setCabinClassType("ECONOMY");
  };
  const PRIMIUMECONOMY = () => {
    setCabinClass(true);
    setCabinClassType("ECONOMY/PREMIUM ECONOMY");
  };
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const lap = window.innerWidth > 1071;
  const mobile = window.innerWidth < 600;

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
            // maxHeight:"2rem"
          }}
        >
          <div
            className="col-1"
            style={{
              background: "hsla(0,0%,100%,.1)",
              borderRadius: "4px",
              width: "130px",
              padding: "4px 9px 0",
              // padding:"5px",
              marginLeft: "",
              maxHeight: "4.5rem",
            }}
          >
            <h5
              style={{
                fontWeight: "700",
                fontSize: "12px",
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
              title={title}
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
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "4px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
                onClick={() => setSelect(!select)}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  {select ? (
                    <>
                      <Select
                        options={options}
                        styles={{ width: "100%" }}
                        menuIsOpen={true}
                        // onChange={() =>setSelect(null)}
                        onChange={FROMHANDLER}
                        // className={styles.select}
                        value={options.find(function (option) {
                          return option.value === from;
                        })}
                        components={{
                          IndicatorSeparator: () => null, // Remove separator
                        }}
                        getOptionLabel={(e) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {e.icon}
                            <span style={{ marginLeft: 5 }}>{e.label}</span>
                          </div>
                        )}
                      />
                    </>
                  ) : (
                    ""
                  )}

                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {from}
                  </span>
                </FormControl>
              </div>
              {/* <div
                        className={styles.connectingIcon} 
                        style={{width:"20px",height:"20px",background:"none",justifyContent:"center",top:"1rem",position:"relative"}}
                        onClick={SWITCHHANDLER}
                      >
                        <ConnectingAirportsIcon fontSize="large" style={{color:"darkblue"}}  />
                      </div> */}
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "4px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
                onClick={() => setSelectTo(!selectTo)}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <FormControl sx={{ width: "100%" }}>
                  {selectTo ? (
                    <>
                      <Select
                        options={options}
                        styles={{
                          width: "100%",
                          bottom: "2.9rem",
                          position: "relative",
                        }}
                        menuIsOpen={true}
                        // onChange={() =>setSelect(null)}
                        onChange={TOHANDLER}
                        // className={styles.select}
                        value={options.find(function (option) {
                          return option.value === to;
                        })}
                        components={{
                          DropdownIndicator: () => null,
                          IndicatorSeparator: () => null, // Remove separator
                        }}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {to}
                  </span>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "4px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>

                <FormControl sx={{ width: "100%" }} className="datepicker">
                  <LocalizationProvider
                    sx={{ width: "100%" }}
                    style={{
                      color: "#fff",
                      height: "20px",
                      borderColor: "white",
                    }}
                    dateAdapter={AdapterDateFns}
                    className="datepicker"
                  >
                    <DatePicker
                      // label="Departure"
                      // sx={{color:"#fff"}}
                      placeholder={departure}
                      className="datepicker"
                      value={departure}
                      onChange={(newValue) => {
                        setDeparture(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "#fff" },
                            input: {
                              color: "#fff",
                              height: "5px",
                              borderColor: "none",
                              fontSize: "13px",
                            },
                            label: { color: "#fff" },
                            borderColor: { color: "none" },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "4px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
                <FormControl sx={{ width: "100%", height: "-10px" }}>
                  <LocalizationProvider
                    sx={{ width: "100%", height: "-10px" }}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      // label="Return"

                      // InputProps={{
                      //   color:"green"
                      // }}
                      placeholder={retrn}
                      value={retrn}
                      onChange={(newValue) => {
                        setRetrn(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "#fff" },
                            input: {
                              color: "#fff",
                              height: "5px",
                              fontSize: "13px",
                            },
                            label: { color: "#fff" },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "auto",
                  padding: "10px",
                  minHeight: mobile ? "5rem" : "",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    minHeight: cabinClassType ? "5rem" : "",
                    margin: "5px",
                    border: "none",
                    right: "",
                    padding: "0",
                    height: "30px",
                    left: lap ? "-5px" : "0",
                    // marginRight:lap ? "" : "2.2rem",
                    // marginTop:"19px"
                    top: "25px",
                    // border:"none"
                  }}
                >
                  <div onClick={onClickModal}>
                    {/* <div className={styles.travellersText}></div> */}
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff" }}>{travellers}</span>

                      {travellers > 0 ? (
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Travellers
                        </span>
                      ) : (
                        ""
                      )}

                      <span
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "12px",
                          fontWeight: "400",
                          // bottom: "10px",
                          position: "relative",
                          color: "#fff",
                        }}
                      >
                        {cabinClassType}
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val1) => (
                        <div
                          key={val1}
                          className={`${
                            selectedButtonColor === val1
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass1(val1);
                            setSelectedButtonColor(val1);
                          }}
                        >
                          {val1}
                        </div>
                      ))}
                    </div>

                    {/* for children and inf */}
                    <div className={styles.infantChildren}>
                      <div>
                        <div className={styles.adultChild}>
                          CHILDREN (2y - 12y )
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val2) => (
                            <div
                              key={val2}
                              className={`${
                                selectedButtonColortwo === val2
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              // style={{background:child > 2 ? "lightblue" : "#fff"}}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                // setSelectedButtonColor(val2);

                                onClickNoOfPass2(val2);
                                setSelectedButtonColortwo(val2);

                                console.log(val2);
                              }}
                            >
                              {val2}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar2.map((val3) => (
                            <div
                              key={val3}
                              className={`${
                                selectedButtonColorthree === val3
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass3(val3);
                                setSelectedButtonColorthree(val3);
                              }}
                            >
                              {val3}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* cabin */}
                    <div
                      className={styles.passengerButtonContainer}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className={styles.adultChild}>
                        CHOOSE CABIN CLASS
                      </div>
                      <Row style={{ display: "flex", flexDirection: "column" }}>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={ECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Economy/Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={PRIMIUMECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "rgb(0, 140, 255)"
                                : "",
                            color:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={BUISSNESS}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Buisness
                          </span>
                        </Col>
                      </Row>
                    </div>
                    {/* for children and inf */}

                    <div
                      className={styles.modalApplyText}
                      onClick={onClickModal}
                    >
                      <div>Apply</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="Searchbtn"
                style={{
                  background: "",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.buttonContainer1}
                  style={{
                    maxWidth: "130px",
                    minWidth: "129px",
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "grid",
                    justifyContent: "center",
                    // justifyItems: "end",
                    // placeItems: "",
                    // marginLeft: "",
                  }}
                >
                  Search
                </Button>
              </div>
            </>
          )}
          {roundTrip && (
            <>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
                onClick={() => setSelectOne(!selectOne)}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  FROM
                </h5>
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  {selectOne ? (
                    <>
                      <Select
                        options={options}
                        styles={{ width: "100%" }}
                        menuIsOpen={true}
                        // onChange={() =>setSelect(null)}
                        onChange={ROUNDTRIPFROMHANDLER}
                        // className={styles.select}
                        value={options.find(function (option) {
                          return option.value === from;
                        })}
                        components={{
                          DropdownIndicator: () => null,
                          IndicatorSeparator: () => null, // Remove separator
                        }}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {from}
                  </span>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
                onClick={() => setSelectOneto(!selectOneto)}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  TO
                </h5>
                <FormControl sx={{ width: "100%" }}>
                  {selectOneto ? (
                    <>
                      <Select
                        options={options}
                        styles={{ width: "100%" }}
                        // onChange={() =>setSelect(null)}
                        menuIsOpen={true}
                        onChange={TOHANDLER}
                        // className={styles.select}
                        value={options.find(function (option) {
                          return option.value === from;
                        })}
                        components={{
                          DropdownIndicator: () => null,
                          IndicatorSeparator: () => null, // Remove separator
                        }}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {to}
                  </span>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  DEPART
                </h5>

                <FormControl sx={{ width: "100%" }} className="datepicker">
                  <LocalizationProvider
                    sx={{ width: "100%" }}
                    style={{
                      color: "#fff",
                      height: "20px",
                      borderColor: "white",
                    }}
                    dateAdapter={AdapterDateFns}
                    className="datepicker"
                  >
                    <DatePicker
                      // label="Departure"
                      // sx={{color:"#fff"}}
                      placeholder={departure}
                      className="datepicker"
                      value={departure}
                      onChange={(newValue) => {
                        setDeparture(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "#fff" },
                            input: {
                              color: "#fff",
                              height: "5px",
                              fontSize: "13px",
                            },
                            label: { color: "#fff" },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  RETURN
                </h5>
                <FormControl sx={{ width: "100%", height: "-10px" }}>
                  <LocalizationProvider
                    sx={{ width: "100%", height: "-10px" }}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      // label="Return"

                      // InputProps={{
                      //   color:"green"
                      // }}
                      placeholder={retrn}
                      value={retrn}
                      onChange={(newValue) => {
                        setRetrn(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color: "#fff" },
                            input: {
                              color: "#fff",
                              height: "5px",
                              fontSize: "13px",
                            },
                            label: { color: "#fff" },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "auto",
                  padding: "10px",
                  minHeight: mobile ? "5rem" : "",

                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    minHeight: cabinClassType ? "5rem" : "",
                    margin: "5px",
                    border: "none",
                    right: "",
                    padding: "0",
                    height: "30px",
                    left: lap ? "-5px" : "0",
                    // marginRight:lap ? "" : "2.2rem",
                    // marginTop:"19px"
                    top: "20px",
                    // border:"none"
                  }}
                >
                  <div onClick={onClickModal}>
                    {/* <div className={styles.travellersText}></div> */}
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff" }}>{travellers}</span>

                      {travellers > 0 ? (
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Travellers
                        </span>
                      ) : (
                        ""
                      )}
                      <br />
                      <span
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "12px",
                          fontWeight: "400",
                          bottom: "10px",
                          position: "relative",
                          color: "#fff",
                        }}
                      >
                        {cabinClassType}
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val1) => (
                        <div
                          key={val1}
                          className={`${
                            selectedButtonColor === val1
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass1(val1);
                            setSelectedButtonColor(val1);
                          }}
                        >
                          {val1}
                        </div>
                      ))}
                    </div>

                    {/* for children and inf */}
                    <div className={styles.infantChildren}>
                      <div>
                        <div className={styles.adultChild}>
                          CHILDREN (2y - 12y )
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val2) => (
                            <div
                              key={val2}
                              className={`${
                                selectedButtonColortwo === val2
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              // style={{background:child > 2 ? "lightblue" : "#fff"}}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                // setSelectedButtonColor(val2);

                                onClickNoOfPass2(val2);
                                setSelectedButtonColortwo(val2);

                                console.log(val2);
                              }}
                            >
                              {val2}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar2.map((val3) => (
                            <div
                              key={val3}
                              className={`${
                                selectedButtonColorthree === val3
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass3(val3);
                                setSelectedButtonColorthree(val3);
                              }}
                            >
                              {val3}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* cabin */}
                    <div
                      className={styles.passengerButtonContainer}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className={styles.adultChild}>
                        CHOOSE CABIN CLASS
                      </div>
                      <Row style={{ display: "flex", flexDirection: "column" }}>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={ECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Economy/Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={PRIMIUMECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "rgb(0, 140, 255)"
                                : "",
                            color:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={BUISSNESS}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Buisness
                          </span>
                        </Col>
                      </Row>
                    </div>
                    {/* for children and inf */}

                    <div
                      className={styles.modalApplyText}
                      onClick={onClickModal}
                    >
                      <div>Apply</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                // className="col-2"
                style={{
                  background: "",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.buttonContainer1}
                  style={{
                    maxWidth: "130px",
                    minWidth: "129px",
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "grid",
                    justifyContent: "center",
                    // justifyItems: "end",
                    // placeItems: "",
                    // marginLeft: "",
                  }}
                >
                  Search
                </Button>
              </div>
            </>
          )}
          {multiCity && (
            <>
              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "360px",
                  padding: "10px",
                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                  }}
                  onClick={() => setSelectTwo(!selectTwo)}
                >
                  FROM
                </h5>
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  {selectTwo ? (
                    <>
                      <Select
                        options={options}
                        styles={{ width: "100%" }}
                        menuIsOpen={true}
                        // onChange={() =>setSelect(null)}
                        onChange={MULTICITYFROMHANDLER}
                        // className={styles.select}
                        value={options.find(function (option) {
                          return option.value === from;
                        })}
                        components={{
                          DropdownIndicator: () => null,
                          IndicatorSeparator: () => null, // Remove separator
                        }}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  <span
                    style={{
                      color: "#fff",
                      fontFamily: "sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    {from}
                  </span>
                </FormControl>
              </div>

              <div
                className="col-2"
                style={{
                  background: "hsla(0,0%,100%,.1)",
                  borderRadius: "7px",
                  width: "auto",
                  padding: "10px",
                  minHeight: mobile ? "5rem" : "",

                  maxHeight: "4.5rem",
                }}
              >
                <h5
                  style={{
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "12px",
                    marginBottom: "5px",
                    // marginTop: "5px",
                    color: "#008cff",
                    maxHeight: "4.5rem",
                  }}
                >
                  PASSENGERS&CLASS
                </h5>
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    margin: "5px",
                    border: "none",
                    right: "",
                    padding: "0",
                    height: "30px",
                    minHeight: cabinClassType ? "5rem" : "",
                    left: lap ? "-5px" : "0",
                    // marginRight:lap ? "" : "2.2rem",
                    // marginTop:"19px"
                    top: "20px",
                    // border:"none"
                  }}
                >
                  <div onClick={onClickModal}>
                    {/* <div className={styles.travellersText} style={{display:"none"}}></div> */}
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff", fontFamily: "sans-serif" }}>
                        {travellers}
                      </span>

                      {travellers > 0 ? (
                        <span
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Travellers
                        </span>
                      ) : (
                        ""
                      )}
                      <br />
                      <span
                        style={{
                          fontFamily: "sans-serif",
                          fontSize: "12px",
                          fontWeight: "400",
                          bottom: "10px",
                          position: "relative",
                          color: "#fff",
                        }}
                      >
                        {cabinClassType}
                      </span>
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val1) => (
                        <div
                          key={val1}
                          className={`${
                            selectedButtonColor === val1
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass1(val1);
                            setSelectedButtonColor(val1);
                          }}
                        >
                          {val1}
                        </div>
                      ))}
                    </div>

                    {/* for children and inf */}
                    <div className={styles.infantChildren}>
                      <div>
                        <div className={styles.adultChild}>
                          CHILDREN (2y - 12y )
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val2) => (
                            <div
                              key={val2}
                              className={`${
                                selectedButtonColortwo === val2
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              // style={{background:child > 2 ? "lightblue" : "#fff"}}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                // setSelectedButtonColor(val2);

                                onClickNoOfPass2(val2);
                                setSelectedButtonColortwo(val2);

                                console.log(val2);
                              }}
                            >
                              {val2}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar2.map((val3) => (
                            <div
                              key={val3}
                              className={`${
                                selectedButtonColorthree === val3
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }`}
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass3(val3);
                                setSelectedButtonColorthree(val3);
                              }}
                            >
                              {val3}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* cabin */}
                    <div
                      className={styles.passengerButtonContainer}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div className={styles.adultChild}>
                        CHOOSE CABIN CLASS
                      </div>
                      <Row style={{ display: "flex", flexDirection: "column" }}>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass && cabinClassType === "ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={ECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Economy/Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "rgb(0, 140, 255)"
                                : "#fff",
                            color:
                              cabinClass &&
                              cabinClassType === "ECONOMY/PREMIUM ECONOMY"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={PRIMIUMECONOMY}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Premium Economy
                          </span>
                        </Col>
                        <Col
                          style={{
                            background:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "rgb(0, 140, 255)"
                                : "",
                            color:
                              cabinClass && cabinClassType === "BUISNESS"
                                ? "#fff"
                                : "black",
                          }}
                          className={styles.economybtn}
                          onClick={BUISSNESS}
                        >
                          <span
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: "400",
                            }}
                          >
                            Buisness
                          </span>
                        </Col>
                      </Row>
                    </div>
                    {/* for children and inf */}

                    <div
                      className={styles.modalApplyText}
                      onClick={onClickModal}
                    >
                      <div>Apply</div>
                    </div>
                  </div>

                </div>
              </div>
              <div
                // className="col-2"
                style={{
                  background: "",
                  borderRadius: "7px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className={styles.buttonContainer1}
                  style={{
                    maxWidth: "130px",
                    minWidth: "129px",
                    borderRadius: "20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "grid",
                    justifyContent: "center",
                    // justifyItems: "end",
                    // placeItems: "",
                    // marginLeft: "",
                  }}
                >
                  Search
                </Button>
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
              // maxHeight:"2rem",
              background: "transparent",

              display: "flex",
              flexDirection: "row",
            }}
            className="farerow3"
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
                maxWidth: "25%",
                maxHeight: "3rem",
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
              className="faretypesbutton2"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "25%",
                maxHeight: "3rem",
              }}
            >
              {/* <input type="radio" name="fare" className="fareradio"/> */}
              <span className="farespan" style={{ color: "#fff" }}>
                Student
                {/* Fares */}
              </span>{" "}
            </Button>
            <Button
              className="faretypesbutton3"
              variant=""
              style={{
                backgroundColor: "#364c63",
                borderRadius: " 0 0 ",
                maxWidth: "25%",
                maxHeight: "3rem",
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
                maxWidth: "25%",
                maxHeight: "3rem",
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
                maxWidth: "25%",
                maxHeight: "3rem",
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
