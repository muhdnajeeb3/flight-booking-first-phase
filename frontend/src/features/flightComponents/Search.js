import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import styles from "../../Components/flight.module.css";

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
import { useLocation, useNavigate } from "react-router-dom";
// import Slider from "react-slick";
import "./Search.css";

function Search() {
  const location = useLocation();
  const [selectedButtonColor, setSelectedButtonColor] = useState(
    location.state.selectedButtonColor
  );
  const [travellers, setTravellers] = React.useState(location.state.travellers);
  const [openTravellers, setOpenTravellers] = useState(
    location.state.openTravellers
  );
  const [togglePassengerColor, setTogglePassengerColor] = useState(
    location.state.togglePassengerColor
  );
  const [oneway, setOneway] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [multiCity, setMultiCity] = useState(false);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("ONEWAY");

  const [from, setFrom] = React.useState(location.state.from);
  const [to, setTo] = React.useState(location.state.to);
  const [departure, setDeparture] = React.useState(location.state.departure);
  const [retrn, setRetrn] = React.useState(location.state.retrn);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];

  // const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const OnewayHandler = () => {
    setOneway(true);
    setMultiCity(false);
    setRoundTrip(false);
    setTitle("ONEWAY")
  };
  const RoundtripHandler = () => {
    setOneway(false);
    setMultiCity(false);
    setRoundTrip(true);
    setTitle("ROUND TRIP")

  };
  const MulticityHandler = () => {
    setOneway(false);
    setMultiCity(true);
    setRoundTrip(false);
    setTitle("MULTI CITY")

  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/flights", {
      state: {
        from,
        to,
        departure,
        retrn,
        travellers,
        selectedButtonColor,
        openTravellers,
        togglePassengerColor,
      },
    });
  };
  const SEARCHFROMHANDLER = (e) => {
    setFrom(e.target.value);
    setQuery(e.target.value);
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
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  <Select
                    style={{
                      color: "#fff",
                      height: "20px",
                      borderColor: "white",
                    }}
                    fullWidth
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    // label="from"
                    placeholder={from}
                    // className="datepicker"
                    onChange={SEARCHFROMHANDLER}
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
                            input: { color: "#fff", height: "10px" },
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
                            input: { color: "#fff", height: "10px" },
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
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    margin: "5px",
                    right: "",
                    padding: "0",
                    height: "30px",
                  }}
                >
                  <div onClick={onClickModal}>
                    <div className={styles.travellersText}></div>
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff" }}>{travellers}</span>
                      {travellers > 1 ? (
                        <span style={{ color: "#fff" }}>Travellers</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val) => (
                        <div
                          key={val}
                          className={`${
                            selectedButtonColor === val
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                            setSelectedButtonColor(val);
                          }}
                        >
                          {val}
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
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
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
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button type="submit" onClick={handleSubmit} className={styles.buttonContainer1}
            style={{
              maxWidth: "130px",
              minWidth: "129px",
              borderRadius:"20px",
              fontSize:"16px",
              fontWeight:"bold",
              display: "grid",
              justifyContent: "center",
              // justifyItems: "end",
              // placeItems: "",
              // marginLeft: "",
            }}>Search</Button>
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
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  <Select
                    style={{
                      color: "#fff",
                      height: "20px",
                      borderColor: "white",
                    }}
                    fullWidth
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    // label="from"
                    placeholder={from}
                    // className="datepicker"
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
                            input: { color: "#fff", height: "10px" },
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
                            input: { color: "#fff", height: "10px" },
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
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    margin: "5px",
                    right: "",
                    padding: "0",
                    height: "30px",
                  }}
                >
                  <div onClick={onClickModal}>
                    <div className={styles.travellersText}></div>
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff" }}>{travellers}</span>
                      {travellers > 1 ? (
                        <span style={{ color: "#fff" }}>Travellers</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val) => (
                        <div
                          key={val}
                          className={`${
                            selectedButtonColor === val
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                            setSelectedButtonColor(val);
                          }}
                        >
                          {val}
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
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
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
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button type="submit" onClick={handleSubmit} className={styles.buttonContainer1}
            style={{
              maxWidth: "130px",
              minWidth: "129px",
              borderRadius:"20px",
              fontSize:"16px",
              fontWeight:"bold",
              display: "grid",
              justifyContent: "center",
              // justifyItems: "end",
              // placeItems: "",
              // marginLeft: "",
            }}>Search</Button>
              </div>
            </>
          )}
          {multiCity && (
            <>
              <div
                className="col-2"
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
                <FormControl
                  sx={{ width: "100%" }}
                  style={{ borderColor: "#fff" }}
                >
                  <Select
                    style={{
                      color: "#fff",
                      height: "20px",
                      borderColor: "white",
                    }}
                    fullWidth
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    // label="from"
                    placeholder={from}
                    // className="datepicker"
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
                <div
                  className={styles.travellerContainer}
                  style={{
                    width: "100%",
                    margin: "5px",
                    right: "",
                    padding: "0",
                    height: "30px",
                  }}
                >
                  <div onClick={onClickModal}>
                    <div className={styles.travellersText}></div>
                    <div
                      className={styles.noOfTraveller}
                      style={{ marginTop: "-26px" }}
                    >
                      <span style={{ color: "#fff" }}>{travellers}</span>
                      {travellers > 1 ? (
                        <span style={{ color: "#fff" }}>Travellers</span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div
                    className={
                      openTravellers ? styles.traveller_modal : styles.noDisplay
                    }
                  >
                    <div className={styles.adultChild}>ADULTS (12y +)</div>
                    <div className={styles.passengerButtonContainer}>
                      {arr.map((val) => (
                        <div
                          key={val}
                          className={`${
                            selectedButtonColor === val
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }`}
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                            setSelectedButtonColor(val);
                          }}
                        >
                          {val}
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
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className={styles.adultChild}>
                          INFANTS (below 2y)
                        </div>
                        <div className={styles.passengerButtonContainer}>
                          {ar1.map((val) => (
                            <div
                              key={val}
                              className={
                                val === 0
                                  ? styles.clickPassenger
                                  : styles.passengerButton
                              }
                              onClick={() => {
                                setTogglePassengerColor(!togglePassengerColor);
                                onClickNoOfPass(val);
                              }}
                            >
                              {val}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* for children and inf */}

                    <div
                      className={styles.modalApplyText}
                      onClick={onClickModal}
                    >
                      <div>Apply</div>
                    </div>
                  </div>

                  {/* <div className={styles.buttonContainer} style={{width:"100%",display:"grid",justifyContent:"center",marginLeft:"8rem"}}>
        <div type="submit"  onClick={handleSubmit}>
          Search
        </div>
      </div> */}
                </div>
              </div>
              <div
                // className="col-2"
                style={{
                  background: "",
                  borderRadius: "10px",
                  width: "160px",
                  padding: "10px",
                }}
              >
                <Button type="submit" onClick={handleSubmit} className={styles.buttonContainer1}
            style={{
              maxWidth: "130px",
              minWidth: "129px",
              borderRadius:"20px",
              fontSize:"16px",
              fontWeight:"bold",
              display: "grid",
              justifyContent: "center",
              // justifyItems: "end",
              // placeItems: "",
              // marginLeft: "",
            }}>Search</Button>
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
                Armed Forces <span style={{ color: "red" }}>New</span>
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
          {/* <div
            className={styles.buttonContainer}
            style={{
              maxWidth: "130px",
              minWidth: "129px",
              marginTop: "335rem",
              display: "grid",
              justifyContent: "center",
              justifyItems: "end",
              placeItems: "",
              marginLeft: "",
            }}
          >
            <div type="submit" onClick={handleSubmit}>
              Search
            </div>
          </div> */}
        </div>

        {/* </Container> */}
      </div>
      {/* <div className="searchcenter"></div> */}
    </div>
  );
}

export default Search;
