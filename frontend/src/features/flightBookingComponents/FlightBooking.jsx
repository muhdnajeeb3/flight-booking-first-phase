import React, { useContext } from "react";
import img1 from "../../imgs/img1.png";
import promo from "../../imgs/promo.png";
import styles from "./flightbooking.module.css";
import img from "../../imgs/img.png";
import { SingleBooking } from "./SingleBooking";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Form } from "./Form";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
import { ListenerContext } from "../../Contexts/ListenerProvider";
import { Button, Col, Container, Row } from "react-bootstrap";
import { minHeight } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
export const FlightBooking = () => {
  const navigate = useNavigate();
  const { loading, error, flight } = useSelector((state) => ({
    loading: state.flightBooking.loading,
    flight: state.flightBooking.flightBooking,
    error: state.flightBooking.error,
  }));
  var price = flight.fare;
  const [bfare, setBfare] = useState(false);
  const [surge, setSurge] = useState(false);
  const [addnewadult,setAddnewadult] = useState([])
  const [seatsandmeals,setSeatsandmeals] = useState(false)
  const finalAmount = 2 * price + 1860;
  const { setOpen } = useContext(ListenerContext);

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  const handleButton = () => {
    if (isUserLoggedIn) {
      navigate(`/flightpayment/${finalAmount}`);
    } else {
      setOpen(true);
    }
  };
  const SEATSANDMEALS = () => {
    setSeatsandmeals(!seatsandmeals)
  }
  return (
    <div>
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>Something Went Wrong</h1>
      ) : (
        flight && (
          <>
            <div className={styles.bookingheadbg}
              style={{ minHeight: "16rem" }}
            ></div>
            <div style={{ position: "relative", bottom: "14rem", width: "" }}>
              <React.Fragment
                style={{ position: "relative", bottom: "5rem" }}
                className={styles.bookingdetails}
              >
                <div className={styles.header} style={{ color: "#fff" }}>
                  <b>Complete Your Booking</b>
                </div>
                <div className={styles.main_cont}>
                  <div className={styles.info_cont}>
                    <React.Fragment key={flight._id}>
                      <SingleBooking flight={flight} />
                    </React.Fragment>
                    {/* <img style={{ width: "100%", marginTop: "1%" }} src={img} /> */}
                    {/* <img
                      style={{ width: "100%", marginTop: "1%" }}
                      src={img1}
                    /> */}
                    <div className={styles.importantinformation}>
                      <Row
                        style={{
                          background: "#fff",
                          marginTop: "15px",
                          margin: "10px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        <span
                          style={{
                            marginBottom: "12px",
                            marginTop: "12px",
                            fontWeight: "900",
                            fontSize: "18px",
                            lineHeight: "1.2",
                          }}
                        >
                          Important Information
                        </span>
                        <Row>
                          <span
                            style={{
                              marginLeft: "20px",
                              fontWeight: "900",
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginBottom: "12px",
                            }}
                          >
                            Check travel guidlines issued by Karnataka below:
                          </span>
                        </Row>
                        <Row>
                          <span>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <b>COVID test/vaccination rules: </b>
                              <span>
                                All travellers must either carry their COVIDA
                                vaccination certificate (2 doses token) or a
                                negative RT-PCR test report.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <b>Test on Arrival : </b>
                              <span>No test on arrival.</span>
                            </li>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <b>Quarantine Guidelines: </b>
                              <span>
                                Specific guidelines for quarantine may apply for
                                some places. Please refer to the complete list
                                of travel guidelines (link given below) for
                                further details
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <span>
                                For the complete list of travel guidelines
                                issued by Indian States and UTs,{" "}
                                <Link to="">click here</Link>
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <span>
                                Travel guidelines change frequently and the
                                information listed here is not exhaustive.
                                Kindly refer to the complete set of rules and
                                guidelines issued by the airlines and regulatory
                                authorities for a smooth journey. We accept no
                                liability in this regard.
                              </span>
                            </li>
                            <li
                              style={{
                                lineHeight: "18px",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              <b>
                                The latest DGCA guidelines state that it is
                                compulsory to wear a mask that covers the nose
                                and mouth properly while at the airport and on
                                the flight. Any lapse might result in
                                de-boarding.
                              </b>
                            </li>
                          </span>
                        </Row>
                        <Row
                          style={{
                            marginBottom: "12px",
                            marginTop: "12px",
                            fontWeight: "900",
                            fontSize: "18px",
                          }}
                        >
                          <b style={{ marginLeft: "20px" }}>
                            Baggage informaton
                          </b>
                        </Row>
                        <Row>
                          <li
                            style={{
                              lineHeight: "18px",
                              fontWeight: "400",
                              fontSize: "12px",
                              marginBottom: "15px",
                            }}
                          >
                            {" "}
                            Carry no more than 1 check-in baggage and 1 hand
                            baggage per passenger. Additional pieces of Baggage
                            will be subject to additional charges per piece in
                            addition to the excess baggage charges.
                          </li>
                        </Row>
                      </Row>
                    </div>
                    <div
                      style={{
                        width: "96%",
                        margin: "0%",
                        display: "flex",
                        flexDirection: "column",
                        background: "#fff",
                        borderRadius: "5px",
                        marginRight:"113rem"
                      }}
                      className={styles.bookingdetails}
                    >
                      <b
                        style={{
                          marginLeft: "1rem",
                          fontSize: "20px",
                          marginBottom: "10px",
                          marginTop: "10px",
                        }}
                      >
                        Travel Details
                      </b>
                      <Row
                        style={{
                          background: "#e5eef4",
                          width: "95%",
                          marginLeft: "1rem",
                          minHeight: "3rem",
                          borderRadius: "3px",
                          padding:"10px"
                        }}
                      >
                        
                        <span style={{ fontSize: "14px", marginTop: "10px" }}>
                        <FontAwesomeIcon icon={faUser} /> Login in to view your{" "}
                          <span
                            style={{
                              fontWeight: "900",
                              fontSize: "14px",
                              fontFamily: "sans-serif",
                              marginLeft: "auto",
                            }}
                          >
                            saved traveller list,unlock amazing deals
                          </span>{" "}
                          <span style={{ fontSize: "14px", marginTop: "10px" }}>
                            {" "}
                            & much more!
                          </span>
                        </span>
                      </Row>
                      <Row style={{marginTop:"15px",fontFamily:"sans-serif",fontSize:"14px",marginBottom:"10px"}}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                          <div  ><span style={{fontWeight:"400",paddingLeft:"1rem",lineHeight:"1.5"}}> <FontAwesomeIcon icon={faUserCircle}  style={{paddingRight:"5px"}}/>ADULT (12 yrs+)</span></div>
                          <div style={{paddingRight:"1rem",fontWeight:'400',lineHeight:"1.5"}}><span >0/1 </span><span style={{color:"grey"}}>added</span></div>
                        </div>
                      </Row>
                      {addnewadult.map((data, i) => {
                      return (
                      <>
                      <Form tag={1} />
                      </>
                      )
                      })}
                      
                      <hr />

                      <Form tag={2} />
                      <hr />
                      {/* booking details send */}
                      <div>
                        <Row
                          style={{
                            marginTop: "10px",
                            marginBottom: "10px",
                            backgroundColor: "#fff",
                            padding: "10px",
                            margin: "1rem",
                          }}
                        >
                          <Row>
                            <span
                              style={{
                                lineHeight: "1.5",
                                fontWeight: "700",
                                marginBottom: "15px",
                                fontFamily: "sans-serif",
                                fontSize: "14px",
                              }}
                            >
                              Booking details will be sent to
                            </span>
                          </Row>

                          <Row
                            // style={{ display: "flex", flexDirection: "row" }}
                            className={styles.sendtouser}
                          >
                            <Col style={{ marginBottom: "15px" }}>
                              <h5
                                style={{
                                  fontWeight: "400",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  marginTop: "10px",
                                }}
                              >
                                Country Code
                              </h5>
                              <input type="text" placeholder="CountryCode" className={styles.inputdetails} />
                            </Col>
                            <Col style={{ marginBottom: "15px" }}>
                              <h5
                                style={{
                                  fontWeight: "400",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  marginTop: "10px",
                                }}
                              >
                                Mobile No
                              </h5>

                              <input type="text" placeholder="Mobile No." className={styles.inputdetails} />
                            </Col>
                            <Col style={{ marginBottom: "15px" }}>
                              <h5
                                style={{
                                  fontWeight: "400",
                                  fontFamily: "sans-serif",
                                  fontSize: "14px",
                                  marginTop: "10px",
                                }}
                              >
                                Email
                              </h5>
                              <input type="text" placeholder="Email" className={styles.inputdetails}/>
                            </Col>
                            {/* <Col>
                              <h5></h5>
                              <button
                                className={styles.btnSubmit}
                                style={{
                                  marginLeft: "10px",
                                  marginTop: "10px",
                                  display: "grid",
                                  justifyContent: "center",
                                  minWidth: "80px",
                                  padding: "10px",
                                  borderRadius: "35px",
                                  maxHeight: "2.5rem",
                                  fontSize: "15px",
                                }}
                              >
                                ADD
                              </button>
                            </Col> */}
                          </Row>
                        </Row>
                      </div>
                      
                      
                    </div>
                    <button onClick={handleButton} className={styles.btnPay}>
                        CONTINUE
                      </button>
                    <Row
                        style={{
                          marginTop: "10px",
                          backgroundColor: "#fff",
                          height: "5rem",
                          // margin: "1px",
                          marginTop:"15px",
                          marginLeft: "0px",
                          cursor: "not-allowed",
                        }}
                        className={styles.Seatsandmeals}
                        onClick={SEATSANDMEALS}
                      >
                        <span
                          style={{
                            marginTop: "20px",
                            color: "grey",
                            fontWeight: "900",
                            fontSize: "18px",
                          }}
                        >
                          Seats & Meals
                        </span>
                      </Row>
                      {seatsandmeals && (
                        <>
                        <div className={styles.Seatsandmealsdetails}>

                        <Container fluid style={{width:"100%" ,backgroundColor:"#fff",marginRight:"100px"}} >
                          <Row style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                            <Button style={{width:"20%"}}><span>Seats</span></Button>
                            <Button style={{width:"20%"}}><span>Meals</span></Button>
                          </Row>
                        </Container>
                        <Container fluid style={{width:"100%" ,backgroundColor:"lightgrey",marginRight:"100px",marginTop:"10px",display:"grid",justifyContent:"center"}}>
                          <Row style={{alignItems:"center",padding:"7px 10px",minHeight:"34px",backgroundColor:"#b5ffd6",width:"98%",borderRadius:"2px",marginTop:"10px",marginBottom:"10px"}}>
                            <span style={{lineHeight:'1.5'}}>Less than 48 hours to departure.Pre-book your preferred seat now before they run out!</span>
                          </Row>
                        </Container>
                        </div>


                        </>
                      )}
                  </div>
                  {/* Seats and meals */}
                  <div className={styles.fare}>
                    <b>Fare Summary</b>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "1px solid black",
                          borderRadius: "50%",
                          marginRight: "1%",
                          cursor: "pointer",
                          width: "9%",
                          height: "100%",
                          textAlign: "center",
                          display: "grid",
                          justifyContent: "center",
                        }}
                        onClick={() => setBfare(!bfare)}
                      >
                        {bfare ? "-" : "+"}
                      </button>
                      <p
                        style={{
                          fontSize: "15px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        Base Fare
                      </p>
                    </div>
                    {bfare && (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <b style={{ fontSize: "14px" }}>
                          Adult(s) (2 X ₹{price}): ₹{2 * price}
                        </b>
                      </div>
                    )}
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        marginTop: "25px",
                      }}
                    ></div>{" "}
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <button
                        style={{
                          backgroundColor: "white",
                          border: "1px solid black",
                          borderRadius: "50%",
                          marginRight: "1%",
                          cursor: "pointer",
                          width: "10%",
                          height: "100%",
                          textAlign: "center",
                          display: "grid",
                          justifyContent: "center",
                        }}
                        onClick={() => setSurge(!surge)}
                      >
                        {surge ? "-" : "+"}
                      </button>
                      <p
                        style={{
                          fontSize: "15px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        Fee & Surcharges
                      </p>
                    </div>
                    {surge && (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <span style={{ textAlign: "center" }}>
                          {" "}
                          <b style={{ fontSize: "14px" }}>
                            Total fee & surcharges: ₹1860
                          </b>{" "}
                        </span>{" "}
                      </div>
                    )}
                    <div
                      style={{
                        borderBottom: "1px solid gray",
                        marginTop: "25px",
                      }}
                    ></div>{" "}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <b>
                        <p
                          style={{
                            fontSize: "15px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        >
                          <>Total Amount ₹ {finalAmount}</>
                        </p>
                      </b>
                      <b>
                        <p
                          style={{
                            fontSize: "15px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        >
                          {}{" "}
                        </p>
                      </b>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      {/* <img
                    style={{ width: "100%", cursor: "pointer" }}
                    src={promo}
                  /> */}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            </div>
          </>
        )
      )}
    </div>
  );
};
