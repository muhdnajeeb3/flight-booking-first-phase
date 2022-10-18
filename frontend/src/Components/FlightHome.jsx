import React, { useState } from "react";
import styles from "./flight.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FareTypes from "./FareTypes";
import { useNavigate } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const FlightHome = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [departure, setDeparture] = React.useState(null);
  const [retrn, setRetrn] = React.useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1)
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState("");
  const [multiCity, setMultiCity] = useState("");
  const [newCity, setNewCity] = useState([]);

  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [openTravellers, setOpenTravellers] = useState(false);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const handleSubmit = () => {
    navigate("/flights",{ state: {from,to,departure,retrn,travellers,selectedButtonColor,openTravellers,togglePassengerColor}});
  };
  const MULTICITYHANDLER = () => {
    setOneWay("");
    setRoundTrip("");
  };
  const ROUNDTRIP = () => {
    setMultiCity("");
    setOneWay("");
    // setNewCity("")
  };

  const ONEWAY = (e) => {
    setMultiCity("");
    setRoundTrip("");
    // setNewCity("")
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
  return (
    <div className={styles.flight_wrapper}>
      <div className={styles.flight_container}>
        <div className={styles.tripInternational}>
          <div className={styles.multiple_trip}>
            
            <div className={styles.orm}>
              <Button className="radiobutton" style={{ border: "none" }} variant="">
                <input
                  type="radio"
                  value="select"
                  name="select"
                  className="onewayinput"
                  onChange={ONEWAY}
                  onClick={() => setOneWay(true)}
                />
                <b className="onewaytitle">ONE WAY</b>
              </Button>
            </div>
            <div>
              <Button className="radiobutton1" style={{ border: "none" }} variant="">
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
            </div>
            <div>
              <Button className="radiobutton2" style={{ border: "none" }} variant="">
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
            </div>
          </div>
          <div className={styles.book}>
            Book International and Domestic Flights
          </div>
        </div>

        {/* location of from and to  including date and passenger starts  */}
        {/* one way button */}
        {oneWay && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        From
                      </InputLabel>
                      <Select
                        fullWidth
                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="from"
                        onChange={(e) => setFrom(e.target.value)}
                      >
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        fullWidth
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        To
                      </InputLabel>
                      <Select

                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={to}
                        label="to"
                        onChange={(e) => setTo(e.target.value)}
                      >
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                
              </div>
              {/* return */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-4px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Return"
                        value={retrn}
                        onChange={(newValue) => {
                          setRetrn(newValue);
                        }}

                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>



              {/* departure and return date end */}

              {/* number of travellers start */}
              
              <div className={styles.travellerContainer} style={{ marginTop: "10px", right: "12px", position: "relative" }}>
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div className={styles.noOfTraveller} style={{ marginTop: "-6px" }}>
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
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
                        className={`${selectedButtonColor === val ? styles.clickPassenger : styles.passengerButton}`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val)
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>CHILDREN (2y - 12y )</div>
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
                      <div className={styles.adultChild} >INFANTS (below 2y)</div>
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

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* round trip button */}
        {roundTrip && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        From
                      </InputLabel>
                      <Select
                        fullWidth
                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="from"
                        onChange={(e) => setFrom(e.target.value)}
                      >
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        fullWidth
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        To
                      </InputLabel>
                      <Select

                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={to}
                        label="to"
                        onChange={(e) => setTo(e.target.value)}
                      >
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              {/* return */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Return"
                        value={retrn}
                        onChange={(newValue) => {
                          setRetrn(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>



              {/* departure and return date end */}

              {/* number of travellers start */}
              <div className={styles.travellerContainer} style={{ marginTop: "10px", right: "12px", position: "relative" }}>
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div className={styles.noOfTraveller} style={{ marginTop: "-6px" }}>
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
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
                        className={`${selectedButtonColor === val ? styles.clickPassenger : styles.passengerButton}`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val)
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>CHILDREN (2y - 12y )</div>
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
                      <div className={styles.adultChild} >INFANTS (below 2y)</div>
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

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* multi city */}
        {multiCity && (
          <>
            <div className={styles.bookingSearch}>
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        From
                      </InputLabel>
                      <Select
                        fullWidth
                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="from"
                        onChange={(e) => setFrom(e.target.value)}
                      >
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        fullWidth
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        To
                      </InputLabel>
                      <Select

                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={to}
                        label="to"
                        onChange={(e) => setTo(e.target.value)}
                      >
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContainer}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              {/* return */}




              {/* departure and return date end */}

              {/* number of travellers start */}
              <div className={styles.travellerContainer} style={{ marginTop: "-3px", right: "12px", }}>
                <div onClick={onClickModal}>
                  <div className={styles.travellersText}>TRAVELLERS</div>
                  <div className={styles.noOfTraveller} style={{ marginTop: "-6px" }}>
                    <span>{travellers}</span>
                    {travellers > 1 ? "Travellers" : ""}
                  </div>
                </div>

                <div
                  className={
                    multiCity && openTravellers ? styles.traveller_modalmulti : styles.noDisplay
                  }
                >
                  <div className={styles.adultChild}>ADULTS (12y +)</div>
                  <div className={styles.passengerButtonContainer}>
                    {arr.map((val) => (
                      <div
                        key={val}
                        className={`${selectedButtonColor === val ? styles.clickPassenger : styles.passengerButton}`}
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                          setSelectedButtonColor(val)
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>

                  {/* for children and inf */}
                  <div className={styles.infantChildren}>
                    <div>
                      <div className={styles.adultChild}>CHILDREN (2y - 12y )</div>
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
                      <div className={styles.adultChild} >INFANTS (below 2y)</div>
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

                  <div className={styles.modalApplyText} onClick={onClickModal}>
                    <div>Apply</div>
                  </div>
                </div>
              </div>
            </div>
            {/* add another city */}
            <div className={styles.bookingSearch} style={{ marginTop: "10px" }} >
              <div className={styles.fromToConnecting}>
                <div className={styles.fromTo}>
                  <div className={styles.from}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        From
                      </InputLabel>
                      <Select
                        fullWidth
                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={from}
                        label="from"
                        onChange={(e) => setFrom(e.target.value)}
                      >
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={styles.connectingIcon}>
                    <ConnectingAirportsIcon fontSize="large" color="grey" />
                  </div>
                  <div className={styles.to}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        fullWidth
                        sx={{ width: "100%" }}
                        id="demo-simple-select-label"
                      >
                        To
                      </InputLabel>
                      <Select

                        sx={{ width: "100%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={to}
                        label="to"
                        onChange={(e) => setTo(e.target.value)}
                      >
                        <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                        <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                        <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* departure and return date start */}
              <div className={styles.DepRetContaineraddcity} style={{ marginRight: "", }}>
                {/* departure date starts */}
                <div style={{ width: "96%", marginTop: "-5px" }}>
                  < FormControl sx={{ width: "100%" }}>

                    <LocalizationProvider
                      sx={{ width: "100%" }}
                      dateAdapter={AdapterDateFns}
                    >
                      <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={(newValue) => {
                          setDeparture(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                {/* departure date end */}

                {/* return date starts (just for ui purpose)*/}
                {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
                {/* return date starts (just for ui purpose)*/}
              </div>
              <div style={{ borderColor: "black", display: "grid", justifyContent: "start", marginTop: "" }}>
                <Button
                  style={{ height: "auto", border: "none", color: "green", fontFamily: "sans-serif" ,display:"grid",justifyContent:"center"}}
                  onClick={() => HANDLEADD()} variant="" className={styles.addcitybtn}>
                  + ADD ANOTHER CITY
                </Button>
              </div>
              {/* return */}




              {/* departure and return date end */}

              {/* number of travellers start */}

            </div>
          </>
        )}
        {/* new city */}
        {multiCity && newCity.map((data, i) => {
          return (
            <>
              <div className={styles.bookingSearch} style={{ marginTop: "10px" }} >
                <div className={styles.fromToConnecting}>
                  <div className={styles.fromTo}>
                    <div className={styles.from}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel
                          sx={{ width: "100%" }}
                          id="demo-simple-select-label"
                        >
                          From
                        </InputLabel>
                        <Select
                          fullWidth
                          sx={{ width: "100%" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={from}
                          label="from"
                          onChange={(e) => setFrom(e.target.value)}
                        >
                          <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                          <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                          <MenuItem value={"Pune"}>Pune</MenuItem>
                          <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className={styles.connectingIcon}>
                      <ConnectingAirportsIcon fontSize="large" color="grey" />
                    </div>
                    <div className={styles.to}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel
                          fullWidth
                          sx={{ width: "100%" }}
                          id="demo-simple-select-label"
                        >
                          To
                        </InputLabel>
                        <Select

                          sx={{ width: "100%" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={to}
                          label="to"
                          onChange={(e) => setTo(e.target.value)}
                        >
                          <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                          <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                          <MenuItem value={"Pune"}>Pune</MenuItem>
                          <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>

                {/* departure and return date start */}
                <div className={styles.DepRetContaineraddcity} style={{ marginRight: "auto", }}>
                  {/* departure date starts */}
                  <div style={{ width: "96%", marginTop: "-5px" }}>
                    < FormControl sx={{ width: "100%" }}>

                      <LocalizationProvider
                        sx={{ width: "100%" }}
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          label="Departure"
                          value={departure}
                          onChange={(newValue) => {
                            setDeparture(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </div>
                </div>
                <div style={{ borderColor: "black", display: "grid", justifyContent: "start", marginTop: "5px" }}>
                  <Button style={{ height: "30px", borderRadius: "5px", borderColor: "Red", color: "red", fontFamily: "sans-serif", fontWeight: "600" ,fontSize:"14px",display:"grid",justifyContent:"center"}}
                    onClick={() => DELETEHANDLER(i)} variant="">
                    X REMOVE
                  </Button>
                </div>
                {/* return */}




                {/* departure and return date end */}

                {/* number of travellers start */}

              </div>
            </>
          )
        })}
        {/* location of departure and arrival  including date and passenger end  */}

        <FareTypes />

      </div>
      <div className={styles.buttonContainer}>
        <div type="submit" onClick={handleSubmit}>
          Search
        </div>
      </div>
    </div>
  );
};

export default FlightHome;