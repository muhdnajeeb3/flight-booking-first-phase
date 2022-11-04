import React, { useState } from "react";
import styles from "./singleflight.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  addBookingFlights,
  flightBookingError,
  flightBookingLoading,
} from "../flightBookingComponents/flightBookingSlice";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupeeSign, faRupeeSign, faUser } from "@fortawesome/free-solid-svg-icons";
export const SingleFlight = ({
  arrival,
  arrival_time,
  departure,
  departure_time,
  duration,
  fare,
  name,
  stops,
  _id,
}) => {
  // const [viewPrices, setViewPrices] = useState(false);
  const [flightDetails, setFlightDetails] = useState(true);
  const [fareSummary, setFareSummary] = useState(false);
  const [cancellation, setCancellation] = useState(false);
  const [dateChange, setDateChange] = useState(false);
  const dispatch = useDispatch();
  const handlePageChange = (id) => {
    dispatch(flightBookingLoading());
    fetch(`https://makemytripback.herokuapp.com/flights/${id}`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(addBookingFlights(r));
      })
      .catch((e) => {
        console.log(e);
        dispatch(flightBookingError());
      });
    navigate(`/flightBooking/${id}`);
  };
  // const VIEWPRICES = (_id) => {
  //   if (_id === viewPrices) {
  //     setViewPrices(true);
  //   }
  // };
  const buttonactionondiv = (id) => {
    if (window.innerWidth < 580) {
      dispatch(flightBookingLoading());
      fetch(`https://makemytripback.herokuapp.com/flights/${id}`)
        .then((r) => r.json())
        .then((r) => {
          dispatch(addBookingFlights(r));
        })
        .catch((e) => {
          console.log(e);
          dispatch(flightBookingError());
        });
      navigate(`/flightBooking/${id}`);
    }
  };
  const FLIGHTDETAILSHANDLER = () => {
    setFlightDetails(true);
    setFareSummary(false);
    setCancellation(false);
    setDateChange(false);
  };
  const FARESUMMARYHANDLER = () => {
    setFlightDetails(false);
    setFareSummary(true);
    setCancellation(false);
    setDateChange(false);
  };
  const CANCELLATIONHANDLER = () => {
    setFlightDetails(false);
    setFareSummary(false);
    setCancellation(true);
    setDateChange(false);
  };
  const DATECHANGEHANDLER = () => {
    setFlightDetails(false);
    setFareSummary(false);
    setCancellation(false);
    setDateChange(true);
  };
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.singleflight}
        key={_id}
        onClick={() => buttonactionondiv(_id)}
      >
        <div className={styles.maincontainer}>
          <div
            className={styles.inner_cont}
            style={{
              fontSize: "14px",
              fontWeight: "700",
              marginTop: "2%",
              marginLeft: "1%",
              display: "flex",
              flexDirection: "row",
              // width:"12%"
            }}
          >
            {/* <FontAwesomeIcon icon={faUser} /> Login in to view */}
            <img
              src="	https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/6E.png?v=9"
              alt="airlines"
              className={styles.imgairline}
            />
            <span style={{ marginLeft: "8px" }}>{name}</span>
          </div>
          <div className={styles.divsec}>
            <div className={styles.inner_cont}>
              <b className={styles.departtime}>{departure_time}</b>
              <p className={styles.departsub}>{departure}</p>
            </div>
            <div className={styles.inner_cont}>
              <span style={{ fontSize: "12px", width: "" }}>{duration}</span>
              <hr className={styles.line} />
              <span
                style={{
                  fontSize: "10px",
                  color: "gray",
                  // textAlign: "center",
                  margin: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                {stops}
              </span>
            </div>
            <div className={styles.inner_cont}>
              <b className={styles.arrivaltime}>{arrival_time}</b>
              <p className={styles.arrivalsub}>{arrival}</p>
            </div>
            <div className={styles.inner_cont}>
              {/* <FontAwesomeIcon icon={faIndianRupeeSign} /> */}
              <b className={styles.price}>{fare}/-</b>
            </div>
            <div className={styles.btnbook}>
              <Button
                className={styles.buttonBookNow}
                style={{
                  maxHeight: "30px",
                  marginTop: "1.5%",
                  fontSize: "10px",
                  // backgroundColor: "#9AD0EC",
                  border: "1px solid #03045E",
                  width: "10%",
                }}
                onClick={() => handlePageChange(_id)}
                // onClick={()=>VIEWPRICES(_id)}
              >
                Book Now
              </Button>
            </div>
          </div>
          {/* <div className={styles.discount}>
          Use MMTSUPER and get FLAT Rs. 309 instant discount on this flight
          </div> */}
        </div>
        <div className={styles.details}>
          <span>View Flight Details</span>
        </div>
      </div>
      {/* {viewPrices.map((item) => (
        <>
        <h1>hi</h1>
        </>
      ))} */}
      {/* view flight details */}

      <div className={styles.flightdetails} key={_id}>
        {/* <div className={styles.maincontainer}> */}

        <Row
          style={{ display: "flex", flexDirection: "row" }}
          className={styles.flightdetailsbtn}
        >
          <Button
            style={{
              width: "25%",
              fontSize: "12px",
              color: flightDetails ? "#fff" : "black",
              background: flightDetails ? "#0091ff" : "#fff",
            }}
            onClick={FLIGHTDETAILSHANDLER}
          >
            <span>FLIGHT DETAILS</span>
          </Button>
          <Button
            style={{
              width: "25%",
              fontSize: "12px",
              color: fareSummary ? "#fff" : "black",
              background: fareSummary ? "#0091ff" : "#fff",
            }}
            onClick={FARESUMMARYHANDLER}
          >
            <span>FARE SUMMARY</span>
          </Button>
          <Button
            style={{
              width: "25%",
              fontSize: "12px",
              color: cancellation ? "#fff" : "black",
              background: cancellation ? "#0091ff" : "#fff",
            }}
            onClick={CANCELLATIONHANDLER}
          >
            <span>CANCELLATION</span>
          </Button>
          <Button
            style={{
              width: "25%",
              fontSize: "12px",
              color: dateChange ? "#fff" : "black",
              background: dateChange ? "#0091ff" : "#fff",
            }}
            onClick={DATECHANGEHANDLER}
          >
            <span>DATE CHANGE</span>
          </Button>
        </Row>
        {flightDetails ? (
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "98%",
              border: "1px solid lightgrey",
              borderRadius: "4px",
            }}
          >
            <Row
              style={{
                fontWeight: "600",
                padding: "12px 10px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span>New Delhi to Bengaluru,5 Nov</span>
            </Row>
            <hr />
            <Row>
              <Row>
                <div
                  className={styles.inner_cont}
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    // marginTop: "2%",
                    marginLeft: "",
                    display: "flex",
                    flexDirection: "row",
                    // width:"12%"
                  }}
                >
                  {/* <FontAwesomeIcon icon={faUser} /> Login in to view */}
                  <img
                    src="	https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/6E.png?v=9"
                    alt="airlines"
                    className={styles.imgairline}
                  />
                  <span style={{ marginLeft: "8px" }}>{name}</span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "grey",
                      fontWeight: "400",
                    }}
                  >
                    6E | 2487
                  </span>
                </div>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <div className={styles.divsec} style={{ marginBottom: "20px" }}>
                  <div className={styles.inner_cont}>
                    <b className={styles.departtime}>{departure_time}</b>
                    <p style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                      sat,5 Nov 22
                    </p>

                    <p style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                      Terminal2
                    </p>
                    <p
                      className={styles.departsub}
                      style={{ fontSize: "14px", fontFamily: "sans-serif" }}
                    >
                      {departure},India
                    </p>
                  </div>
                  <div className={styles.inner_cont}>
                    <span style={{ fontSize: "12px", width: "" }}>
                      {duration}
                    </span>
                    <hr className={styles.line} />
                    <span
                      style={{
                        fontSize: "10px",
                        color: "gray",
                        // textAlign: "center",
                        margin: "auto",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stops}
                    </span>
                  </div>
                  <div className={styles.inner_cont}>
                    <b className={styles.arrivaltime}>{arrival_time}</b>
                    <p style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                      sat,5 Nov 22
                    </p>

                    <p style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                      Terminal2
                    </p>
                    <p
                      className={styles.arrivalsub}
                      style={{ fontSize: "14px", fontFamily: "sans-serif" }}
                    >
                      {arrival},India
                    </p>
                  </div>
                  <div style={{ width: "65%" }}>
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: "5px",
                      }}
                    >
                      <Col style={{ width: "33%" }}>
                        <span
                          style={{
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            textAlign: "left",
                            paddingRight: "10px",
                            fontWeight: "900",
                          }}
                        >
                          BAGGAGE:
                        </span>
                        <br />
                        <p>ADULT</p>
                      </Col>
                      <Col style={{ width: "33%" }}>
                        <span
                          style={{
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            textAlign: "left",
                            paddingRight: "10px",
                            fontWeight: "900",
                          }}
                        >
                          CHECK IN
                        </span>
                        <br />
                        <p>15 kgs(1 piece only)</p>
                      </Col>
                      <Col style={{ width: "33%" }}>
                        <span
                          style={{
                            fontSize: "14px",
                            fontFamily: "sans-serif",
                            textAlign: "left",
                            paddingRight: "10px",
                            fontWeight: "900",
                          }}
                        >
                          CABIN
                        </span>
                        <br />
                        <p>7 kgs(1 piece only)</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Row>
            </Row>
          </Row>
        ) : (
          ""
        )}

        {/* fare summary */}
        {fareSummary ? (
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "98%",
              border: "1px solid lightgrey",
              borderRadius: "4px",
            }}
          >
            <Row
              style={{
                fontWeight: "600",
                padding: "12px 10px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              <span>Fare Breakup</span>
            </Row>
            <hr />
            <Row>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <Col style={{ maxWidth: "30%" }}>
                  <span>TOTAL</span>
                </Col>
                <Col>
                  <span>
                    <FontAwesomeIcon icon={faIndianRupeeSign} size="sm" /> 6824
                  </span>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <Col style={{ maxWidth: "30%" }}>
                  <span style={{ color: "grey" }}>Base Fare</span>
                </Col>
                <Col>
                  <span style={{ color: "grey" }}>
                    <FontAwesomeIcon
                      icon={faIndianRupeeSign}
                      size="sm"
                      style={{ color: "grey" }}
                    />{" "}
                    5724
                  </span>
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <Col style={{ maxWidth: "30%" }}>
                  <span style={{ color: "grey" }}>Surcharges</span>
                </Col>
                <Col>
                  <span style={{ color: "grey" }}>
                    <FontAwesomeIcon
                      icon={faIndianRupeeSign}
                      size="sm"
                      style={{ color: "grey" }}
                    />{" "}
                    1024
                  </span>
                </Col>
              </Row>
            </Row>
          </Row>
        ) : (
          ""
        )}
        {cancellation ? (
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "98%",
              border: "1px solid lightgrey",
              borderRadius: "4px",
            }}
          >
            <Row
              style={{
                fontWeight: "600",
                padding: "12px 10px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            ><div
            className={styles.inner_cont}
            style={{
              fontSize: "14px",
              fontWeight: "700",
              marginTop: "1%",
              marginLeft: "1%",
              display: "flex",
              flexDirection: "row",
              // width:"12%"
            }}
          >
            {/* <FontAwesomeIcon icon={faUser} /> Login in to view */}
            <img
              src="	https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/6E.png?v=9"
              alt="airlines"
              className={styles.imgairline}
              style={{width:"30px",height:"30px"}}
            />
            <span style={{ marginLeft: "8px" ,display:"flex",justifyContent:"center",marginTop:"5px"}}>New Delhi-Bengaluru</span>
          </div>
              
            </Row>
            <hr />
            <Row style={{width:"98%",marginLeft:"10px"}}>
              <table class="table table-bordered" style={{borderRadius:"5px"}}>
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">
                      <span>Time frame</span>
                      <br />
                      <span style={{ fontWeight: "400" }}>
                        (From Scheduled flight departure)
                      </span>
                    </th>
                    <th scope="col">
                      <span>Airline Fee + Shaab Fee</span>
                      <br />
                      <span style={{ fontWeight: "400" }}>(per pessenger)</span>
                    </th>
                    {/* <th scope="col">Handle</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <th scope="row">1</th> */}
                    <td>
                      <span>0 hours to 2 hours*</span>
                    </td>
                    <td>
                      <span>ADULT : </span>
                      <span style={{ fontWeight: "500" }}>Non Refundable</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>2 hours to 3 days*</span>
                    </td>
                    <td>
                      <span>ADULT : </span>
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          size="sm"
                        />{" "}
                        3,500 +{" "}
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="sm" />{" "}
                        300
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>3 days to 365 days*</span>
                    </td>

                    <td>
                      <span>ADULT : </span>
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          size="sm"
                        />{" "}
                        3,000 +{" "}
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="sm" />{" "}
                        300
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Row style={{marginBottom:"10px"}}>
                <span>
                  *From the Date of Departure
                </span>
              </Row>
            </Row>
          </Row>
        ) : (
          ""
        )}

        {/* datechange */}
        {dateChange ? (
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
              width: "98%",
              border: "1px solid lightgrey",
              borderRadius: "4px",
            }}
          >
            <Row
              style={{
                fontWeight: "600",
                padding: "12px 10px",
                fontFamily: "sans-serif",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            ><div
            className={styles.inner_cont}
            style={{
              fontSize: "14px",
              fontWeight: "700",
              marginTop: "1%",
              marginLeft: "1%",
              display: "flex",
              flexDirection: "row",
              // width:"12%"
            }}
          >
            {/* <FontAwesomeIcon icon={faUser} /> Login in to view */}
            <img
              src="	https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/6E.png?v=9"
              alt="airlines"
              className={styles.imgairline}
              style={{width:"30px",height:"30px"}}
            />
            <span style={{ marginLeft: "8px" ,display:"flex",justifyContent:"center",marginTop:"5px"}}>New Delhi-Bengaluru</span>
          </div>
              
            </Row>
            <hr />
            <Row style={{width:"98%",marginLeft:"10px"}}>
              <table class="table table-bordered" style={{borderRadius:"5px"}}>
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">
                      <span>Time frame</span>
                      <br />
                      <span style={{ fontWeight: "400" }}>
                        (From Scheduled flight departure)
                      </span>
                    </th>
                    <th scope="col">
                      <span>Airline Fee + Shaab Fee</span>
                      <br />
                      <span style={{ fontWeight: "400" }}>(per pessenger)</span>
                    </th>
                    {/* <th scope="col">Handle</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* <th scope="row">1</th> */}
                    <td>
                      <span>0 hours to 2 hours*</span>
                    </td>
                    <td>
                      <span>ADULT : </span>
                      <span style={{ fontWeight: "500" }}>Non Changeable</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>2 hours to 3 days*</span>
                    </td>
                    <td>
                      <span>ADULT : </span>
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          size="sm"
                        />{" "}
                        3,500 +{" "}
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="sm" />{" "}
                        300 + Fare difference
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>3 days to 365 days*</span>
                    </td>

                    <td>
                      <span>ADULT : </span>
                      <span>
                        {" "}
                        <FontAwesomeIcon
                          icon={faIndianRupeeSign}
                          size="sm"
                        />{" "}
                        3,000 +{" "}
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="sm" />{" "}
                        300 + Fare difference
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Row style={{marginBottom:"10px"}}>
                <span>
                  *From the Date of Departure
                </span>
              </Row>
            </Row>
          </Row>
        ) : (
          ""
        )}

        {/* </div> */}
      </div>
    </>
  );
};
