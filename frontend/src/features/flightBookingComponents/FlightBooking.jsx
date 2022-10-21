import React, { useContext } from "react";
import img1 from "../../imgs/img1.png";
import promo from "../../imgs/promo.png";
import styles from "./flightbooking.module.css";
import  "./flightbooking.module.css"
import img from "../../imgs/img.png";
import { SingleBooking } from "./SingleBooking";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Form } from "./Form";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
import { ListenerContext } from "../../Contexts/ListenerProvider";
import { Button, Card, Col, Container, FormCheck, Row } from "react-bootstrap";
import { minHeight } from "@mui/system";
import PhoneInput from "react-phone-input-2";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
export const FlightBooking = (props) => {
  const navigate = useNavigate();
  const { loading, error, flight } = useSelector((state) => ({
    loading: state.flightBooking.loading,
    flight: state.flightBooking.flightBooking,
    error: state.flightBooking.error,
  }));
  var price = flight.fare;
  const [bfare, setBfare] = useState(false);
  const [surge, setSurge] = useState(false);
  const [addnewadult, setAddnewadult] = useState([]);
  const [seatsandmeals, setSeatsandmeals] = useState(false);
  const [meals, setMeals] = useState(false);
  const [seats, setSeats] = useState(true);
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

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
  const addnewadultform = () => {
    const AddNewAdult = [...addnewadult, []];
    setAddnewadult(AddNewAdult);
  };
  const SEATSANDMEALS = () => {
    setSeatsandmeals(!seatsandmeals);
  };
  const MEALSHANDLER = () => {
    setMeals(true);
    setSeats(false);
  };
  const SEATSHANDLER = () => {
    setMeals(false);
    setSeats(true);
  };
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
            <div
              className={styles.bookingheadbg}
              style={{ minHeight: "17rem" }}
            ></div>
            <div>
              <React.Fragment
                style={{ position: "relative", bottom: "5rem" }}
                className={styles.bookingdetails}
              >
                <div
                  className={styles.header}
                  style={{
                    position: "relative",
                    bottom: "14rem",
                    width: "",
                    color: "#fff",
                  }}
                >
                  <b>Complete Your Booking</b>
                </div>
                <div className={styles.main_cont}>
                  <div
                    className={styles.info_cont}
                    style={{ position: "relative", bottom: "10rem", width: "" }}
                  >
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
                          // width:"100%",
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
                        borderRadius: "3px",
                        marginRight: "113rem",
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
                          padding: "10px",
                        }}
                      >
                        <span style={{ fontSize: "14px", marginTop: "10px" }}>
                          <FontAwesomeIcon icon={faUser} /> Login in to view
                          your{" "}
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
                      <Row
                        style={{
                          marginTop: "15px",
                          fontFamily: "sans-serif",
                          fontSize: "14px",
                          marginBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <span
                              style={{
                                fontWeight: "400",
                                paddingLeft: "1rem",
                                lineHeight: "1.5",
                              }}
                            >
                              {" "}
                              <FontAwesomeIcon
                                icon={faUserCircle}
                                style={{ paddingRight: "5px" }}
                              />
                              ADULT (12 yrs+)
                            </span>
                          </div>
                          <div
                            style={{
                              paddingRight: "1rem",
                              fontWeight: "400",
                              lineHeight: "1.5",
                            }}
                          >
                            <span>0/1 </span>
                            <span style={{ color: "grey" }}>added</span>
                          </div>
                        </div>
                      </Row>
                      {addnewadult.map((data, i) => (
                        <>
                          <Form tag={1} key={i} />
                        </>
                      ))}

                      <hr />

                      <Form tag={2} />
                      <Row>
                        <Button
                          variant=""
                          style={{
                            color: "blue",
                            minWidth: "50%",
                            marginLeft: "10px",
                            height: "3rem",
                            display: "grid",
                            justifyContent: "start",
                            lineHeight: "1.2",
                            border: "none",
                          }}
                          className={styles.addnew}
                          onClick={() => addnewadultform()}
                        >
                          + ADD NEW ADULT
                        </Button>
                      </Row>
                      {/* <Row>
                        <Button
                          variant=""
                          style={{
                            color: "blue",
                            minWidth: "50%",
                            marginLeft: "10px",
                            height: "3rem",
                            display: "grid",
                            justifyContent: "start",
                            lineHeight: "1.2",
                            border: "none",
                          }}
                          className={styles.addnew}
                          
                        >
                          + ADD NEW ADULT
                        </Button>
                      </Row> */}
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
                              <PhoneInput
                                country={"eg"}
                                enableSearch={true}
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                // className="react-tel-input form-control"
                                style={{maxWidth:"auto"}}
                                // inputProps={{
                                //   name: 'phone',
                                //   required: true,
                                //   autoFocus: true,
                                //   maxWidth:"1rem",
                                //   minHeight:"111rem"
                                // }}
                                inputClass="w-100 "
                                
                                // containerClass="w-auto"
                                // containerStyle={{maxWidth:'10%'}}
                               
                                
                                
                              />
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

                              <input
                                type="number"
                                placeholder="Mobile No."
                                required
                                className={styles.inputdetails}
                                onChange={(mobile) => setMobile(mobile)}

                                
                              />
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
                              <input
                                type="email"
                                required
                                placeholder="Email"
                                onChange={(email) => setEmail(email)}

                                className={styles.inputdetails}
                              />
                            </Col>
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
                        marginTop: "15px",
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
                          <Container
                            fluid
                            style={{
                              width: "100%",
                              backgroundColor: "#fff",
                              marginRight: "100px",
                            }}
                          >
                            <Row
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "10px",
                              }}
                            >
                              <Button style={{ width: "20%" }} variant="">
                                <span
                                  style={{
                                    color: "black",
                                    fontWeight: "800",
                                    fontSize: "16px",
                                    lineHeight: "1.5",
                                    fontFamily: "sans-serif",
                                  }}
                                  onClick={SEATSHANDLER}
                                >
                                  Seats
                                </span>
                              </Button>
                              <Button style={{ width: "20%" }} variant="">
                                <span
                                  style={{
                                    color: "black",
                                    fontWeight: "800",
                                    fontSize: "16px",
                                    lineHeight: "1.5",
                                    fontFamily: "sans-serif",
                                  }}
                                  onClick={MEALSHANDLER}
                                >
                                  Meals
                                </span>
                              </Button>
                            </Row>
                          </Container>
                          {seats && (
                            <>
                              <Container
                                fluid
                                style={{
                                  width: "100%",
                                  backgroundColor: "lightblue",
                                  marginRight: "100px",
                                  marginTop: "10px",
                                  display: "grid",
                                  justifyContent: "center",
                                }}
                              >
                                <Row
                                  style={{
                                    alignItems: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    padding: "7px 10px",
                                    minHeight: "34px",
                                    backgroundColor: "#b5ffd6",
                                    width: "100%",
                                    borderRadius: "2px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <span
                                    style={{
                                      lineHeight: "1.5",
                                      color: "black",
                                    }}
                                  >
                                    Less than 48 hours to departure.Pre-book
                                    your preferred seat now before they run out!
                                  </span>
                                </Row>
                                <Row
                                  style={{
                                    alignItems: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    padding: "7px 10px",
                                    minHeight: "25px",
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    borderRadius: "2px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      marginTop: "10px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <div>
                                      <span
                                        style={{
                                          fontWeight: "700",
                                          fontFamily: "sans-serif",
                                          fontSize: "16px",
                                        }}
                                      >
                                        New Delhi -- Banglore
                                      </span>
                                      <br />
                                      <span
                                        style={{
                                          fontWeight: "400",
                                          fontFamily: "sans-serif",
                                          fontSize: "14px",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        0 of 1 Selected
                                      </span>
                                    </div>
                                    <div>
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "400",
                                          fontFamily: "sans-serif",
                                          fontSize: "14px",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        Selection pending
                                      </span>
                                    </div>
                                  </div>
                                </Row>
                              </Container>
                            </>
                          )}
                          {meals && (
                            <>
                              <Container
                                fluid
                                style={{
                                  width: "100%",
                                  backgroundColor: "lightblue",
                                  marginRight: "100px",
                                  marginTop: "10px",
                                  display: "grid",
                                  justifyContent: "center",
                                }}
                              >
                                <Row
                                  style={{
                                    alignItems: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    padding: "7px 10px",
                                    minHeight: "34px",
                                    backgroundColor: "#b5ffd6",
                                    width: "100%",
                                    borderRadius: "2px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <span style={{ lineHeight: "1.5" }}>
                                    Less than 48 hours to departure.Pre-book
                                    your preferred seat now before they run out!
                                  </span>
                                </Row>
                                <Row
                                  style={{
                                    alignItems: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    padding: "7px 10px",
                                    minHeight: "34px",
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    borderRadius: "2px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      marginTop: "10px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    <div>
                                      <span>New Delhi -- Banglore</span>
                                      <br />
                                      <span>0 of 1 Meal(s) Selected</span>
                                    </div>
                                    <div>
                                      <FormCheck type="checkbox" label="Veg" />
                                      <FormCheck
                                        type="checkbox"
                                        label="Non Veg"
                                      />
                                    </div>
                                  </div>
                                  <hr />
                                </Row>
                                <Row
                                  style={{
                                    alignItems: "center",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    padding: "7px 10px",
                                    minHeight: "34px",
                                    backgroundColor: "#fff",
                                    width: "100%",
                                    borderRadius: "2px",
                                    marginTop: "-11px",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <Card
                                    style={{
                                      width: "100%",
                                      border: "none",
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src="data:image/jpeg;base64,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"
                                      style={{
                                        width: "15%",
                                        height: "5rem",
                                        display: "grid",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        marginBottom: "10px",
                                      }}
                                    />
                                    <Card.Body>
                                      <Card.Title>Burger</Card.Title>
                                      <Card.Text>
                                        <FontAwesomeIcon
                                          icon={faIndianRupee}
                                          size="xs"
                                        />
                                        100
                                      </Card.Text>
                                    </Card.Body>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "40px",
                                      }}
                                    >
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        -
                                      </Button>
                                      <div>
                                        <span style={{ margin: "10px" }}>
                                          1
                                        </span>
                                      </div>
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </Card>
                                  <Card
                                    style={{
                                      width: "100%",
                                      border: "none",
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAwQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEMQAAIBAwIEBAMEBwUGBwAAAAECAwAEEQUhBhIxQRMiUWEUcYEVMpGhFiMzQlKx0TRTcpLwByRDYsHhJURjgpOi8f/EABkBAAIDAQAAAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAQQBAwIFBQAAAAAAAAABAgMRBBIhMRMFIlEUQTJhgZHhQlJTcaH/2gAMAwEAAhEDEQA/APFaKdRURjaKWigBKKWkoAKSlooASilpKAFpKWigAoopKAFoNFJQAUtFFABRRRQAUtFLigAAycV0khaNQ3KcetEMTu2EGWrRWFt8ZZNFKpDqNsiq7LFDlllcN/BmaKvPsV/T8qKh9TX8h4p/BS4pMV0IpMVeVjKTFPxSEUAMopxBpMUANopcUYpgNopaXFADaKeFJpwjJ6UAcqKkrbsxACkk9ABk1Pi0DVJU549MvnTOMrbOcn8KQFPS1ov0P1/AJ0TUMFefIt2O307+3X2qJNoV9CMz2F5CCcDxbd0z27gUcP7hyishhaU8qV0aymX93P0qfpsQglbnXbP4Yq+iuLTkMQGXY5zjYVTZbs+x0dJoo3xy2Y54XQ4YEGm8h9DWm1aGD9WBu3NvjsKabaJoSdscvWlG9NZwSn6c1LCZm+WtFwpplvqMvhzqGPNg/Kq5LNpSPDX8ql6fFNZXXNzMhz1U4q6M12c+dcoywz0PR+BrKK9LCRuXpg4NW8/CaQThrbkYEbjoaysGsajbEPFdM6js4BqfbcY3fiA3EaN8iRWG/wAFz5yjVV5K1wXH6NS/3C/iKWov6ZH+5P8A8n/aisv0lH+Rl/ms/tPH+Q0eHVkttt0prQ42xXaOVkrvDpOSppiPpTDAfSgCGVppSp/w7HtS/Cn0p4AritJyGrL4T2oMCrRgMleIzThCam8iA12toTNNHHECXdgqj1JOBRgDlpmlXWpXa2lhbyXFw3SOMZP17Ae52r1bh3/ZVDZ5uNbZbk8u8IBVE2OcnOWI23GB863XCHD8HC3D9raT+E94eVZ2BHmd2yRzYBIHQey1bclxJ5X8OGMo5Cv5mJz944IHv9apsm+kXVxWcszuk8PaNYNJLpVhFCzHdoYwpxjPU4PL7Cpi2vPKFWGQZQYy22fmCfft261Pn5Y/1wlZUBIKgKTIT0HyAzUK/veWEiMOviShFRGw3LjcnH+t65t1iX4mbIZ/pI95N4NuYeTzJ5F5uo3GBsdh3O/0qqjumjnFsk04ijDl3tZQ+G9QuMYHz/CustxEklxEMyLK+87r51+QO2c43qEtw0WlyJA7RO7cnlcKzKQc5237752zWF6j3Zya1VxjBA1SDSbjUea40uwvCT99JCrsCMDmdcZbvvmq9+DNPj1zks5JQhX+zT7yK2CSOm4wOv8AOp8NsGiLSFlYFeXbYjO+T7VYwaaHmheRyZlkIdHHlHKegY7HbsaVetseVnglPTxS9rwQrnhG1khVUQBu+1YzVuF3tb08jHwyegr1OwuvGPw90MTleZDkkEdhn1xg/wCsVltfuwt20TKMjpUqrJwe/OUcmd11M9rZG0nh+3MALJyke1QNf0OJd4m3+Vd49Unj8qHauc9zPcHBX5b10frIJEHdu7KyG0fwgCdx1rlLadd6sZPHhXITY9ar+eR5CWU4qhS3ttGmMo7Tj8N/zGipGaWp4Y9yKuOBmH3dq6JYM5wAT9KtrQQhRzEVMS5tItxgmuwjnlOuiOwBCn8KVtIWIZcgVcPqoKkRDbFWGicP/bltJc3NwyDOFVT2qFtsKo7pdEoQlN4RjZo7eHvn5VAnlTPkHyraXfAjOzfD3hO/cV14e4HMV/4t+UdF+6orM9fp1HduLlprM4wY1dJvZLfx/DKp7jrVTIrBiD1Br0zjzVodJhW0gjHMRjIHSsjwpox1+8cPkINzS0+r8kHZJYQ7aFGSjHszwXernhie3tNf064u35IIrhHdsE4wc9vepHFOhro94saN5WHQ0cH6PFrfEFrYTSckb8zOA4UsFGeUHsTjH1rVCSsWUUuLUsHusGrwT27yx3FvMnLyJLAQ8aE9MH6jbvipT3UHP4bshbw1VWYjzL3+lZSbh7SdN4d+Lks7rT2iVZeaCeQnnG43UnmHvivOrnVr+aVn03iWO9RFIjimgyQm+xLpuRn51mtplBcM2VR8jwuz2LU7kW4aeTCuxeO3VskDK/e/Hao4u4A7NHeCLyYyq87A7A7djua8ll4n4jurJYVgtZ+WXn8SMYPLjZeUEYGd+nU0kvFvEDTtI2lPyuN4x4hAPqPnXPnTZKWU1+5r8TgsSTR6OkS8yrb80izxiLmmGCjHB6+ox1pI7LyFsjHcZ7etec2vGmv2sQjbTSy55iHLDmwcgkeoqRFxprUrc6cPxsccp5S4BPc4+tYLPT7ZfH7l8bNv2f7HoscCIdymScYNTEjhYIq4wcdP3iO/5V5rHr/EEqch0i3hjyMZySPqTmrnS9c1Xb4tbJlB251JP86rWlUOJtYLvFbYt0Uai7vLfTw0rXCRlDzbkbnO4/ntXnPEGrwXN48sbZz3rfR6VpfFEEpvLVVmSLmeaCQgrkfnXnHGnCM2glJoLr4izkOAzAK6H0I/pXYq0Xsxuyjg6vdOzLXRTPrPhtgb/Wj9InG3M2aqntj1JrkY1U461qWkrMu00C8SmReRga722qRvsT1rNgKB0pVfkOVqa00F0STaNd8TD6iisr8TL/HRUvDEe5khL1zgc1d0uT3aqZXI712SXHU1cIv4bsDG9WEes3MMBit5jGrdeU4rLpKPX867LLg7moyhGSxJEoya6NNa61qEO6Tsfmc1NXizUYxlxkf4ay8Nyq+9dg01wQkKkknAwKyT0Gmly4l0dRauh+v6m+rSBpUwavOBtXstJik8fYnJ6VVT8P6hEgeW3cd8dTUT7MvXXEdhcsPXwyM1B10Ol1QlhE1KzfvaHcWasNa1XxIfuLsBRwxZXU+rxRWNtDdXBVuSObPJ905Jx6Z/HFRX0LVIv1nwFyBnr4ZrVcC3SaBcXl5fKYyLYhVZfMdwSAD3wOlSnbGnTvxvLQoVzsszg2qajxfpkMfxemPJF4ef90YXDJ89we/ofmarLye91Wxmjn0zV35mXPPpyj+bVBn1CV0kvppYea4nVFTxW5o16YRVIzvjc+/rmuxvraMxvcX8qYzyWsUxDBQNizE+XJPTrtSU9ROC6T+G/wCC3btfBjtV0DVIJefS9M1EZ/duIlBX/K1QJJtcsv7XaTRe/N/Sr244o1yzJkt7qWSJ8+HHKnOuxwfP17ZHXr7VcaLxdFezmz1W3EVyGCkN0b3FYLp6mpbpVqS/J8m2q+fSm0YI6hdSt5p+p6Gfp+NXukxXM9vIYZYXmG6q833j6Zr0qHSLCdxIsERz3xmoevazZ6HKunWVtDPqMi5SInAT0JHfftWKPqH1M1VXXyXS1N8e5/8ADza91fUNOKi/sViUnHNzF/6VJstXF4xjs3YTMML4lqWC/Iq4pJrOXiO4t7jVb6y5nBCQ84jLqM8xUbdPU+lT7DhC3t4Un8CQtzD9aCVUqw6gHrj+ePWuzDTx2crEvy/kyS1d8njdwRLubV9KljiuZ4+f9xoJmBOAW3HXtWf1LUbq9k5rqeSVuuXYmtPd6fHZahYI1sZOfmaXweuAc8wx/wDnSouqaLHLBLcwxOxtVAuWXqdz58e22fSrKr9klXN9mG+xuWMmUeViOtcSSTU8pYYH6+m/D2x+7MPqa2rBnwQgTThUv4FSPLKp+tMezdPenkMHClp3gPRRkWCECaeuc0xdutPRgWAUEknAwM0CNPoul6bf2I8W4eG5B3PUH6UzV9B+zLc3b3KywBguVHc9BUrSOENSnNu87/C/EH9UhPnb6VruIdKk+z4tMsjFFZw/tbq5blDt3NczyWefFcty+Pj9TWoRcMyWCi4FtbK9uFlSOKSaFeYRyNkE1a3OtJp90VnCxl27IMZ9tqgafZ6XoDQX8Wp+NcFc5giJV19M1pNQ0y34o05X00IkmcyPKCBH33HqB2rNrKGrFKb4ZoptTg1BdD7HiO3eB15kEjn77DmNdV1KDHNd6gxx2ReWqTUptM4R06WGBjPdSJhrhwMk+ijtUjQNN0LjTRi8r3AnUf8ADkwYz/I/WsK0cJNtP2/JZ5H9+yZqHGumafbN4Lq8g6BjktVXb8a6drGLPVNP8KC4Bie4jIYpzDGdx79e1Y7WeH20TU5bW4iDKrYSUqcN6fXHamyTRBS6xRxjl38P7o2rqUek6eMd3b+zMluqs3Y6Rpn0bR3u7axHEE819bx8zJaqXXnD7AtuFCjAI777isvPqbWuozpcWwhmjdonJHM0RGQQObb396336M2PJZaroMvhXCxhnSN9jlc7rhtvUYrMapw/cT6jLfald3rSSN5pF85Yn0xj27fSrqGpSw55/wB95LVTZ2mVd5r6zvF/uMMcEOOWKBfDEg6nmx3OTnHr2qDqGrG7WRlHhkMByt5ifTzVP1K30gXU89rjEjZCPleQHfy4zvnG/wDWtXwnHJZ6O8LKngK/kRl5mYfvFvckHajU2rTw3uPJTddZWvcim4T4/uNGs2juUW7QbxOZN09m74/OqS910ajeNe3hWO55mlFwuxZuqjHpkCvQZJNFuLoxXOnwzzqoBdoQCB26037N4avZkWK1swx/eRAN+1cyvV0V2OxVNNlX1kmuTLniSz1m+sbrUbBbpIoTFPEsTHnYjPUe+/XFWyXl9xNP/wCIWqJaAlYviWyrMRtEijp0B3zv9KuTZabaQwGQyhZj+qaOIyL75wMgDoajzaZdapJHCulzzRQsTHJKzWyYI322PXH51ohrJXcQW1fLLISsseEiXwvoDWEL3mpHxfEBWVVUhmJyAg9N/Tbb2qTdtoemoJHVbaCZWVSGdgxK4cgenT51W31rdaXovJq2pxW0IDE2ti7Etk53Zvm31JrzW41XxLYROXdlY8rMSeVfSq69JK6bkp55/T8iN1Tr77Y674eewuHtZ188ZwSGyG9x7GuX2Uq/eRt+nmqSst9q1x8ROxPN1ZtubAq7Xh5TaC4uFMAAy7+O3KBjOTnONq7vnjFLd2URpnLkzqW8cDEYJOO5rpDLyAhyCCOhFF48WWiNxFIEOA6tjI/17VVXFwBlYW8p6sepqXfIcrgl8n/OKKgeJ/6n/wBqKWAyc87VK066NlexXIGTG2RUSn0NZWGCeD0LhPiuG64ga71u6MbLFyQPJsgz1ziq7iSz1LW79jLrGk3Ef/DCXgVAP8J6VjgfQkV3s7x7O4WdCSV+tKFcYLCRbvUvxHrGmaMG0q3EmqxSLDbxosFvMhLkKBgN7131DWry1sBZ6RokqKoKqS/MM75OxOfyzUPQuKpbUpHqlpAsXKMMYg5+W2TU7Vr3hjX+aNrZbVlbC3VrEsbuBnvy5xVeo0deoac/sXQkoRaiZWDS+I7+4WW50i3kOd3uWH8s5/Ktjo09noGqWKS20UeoXrGKRLNT4QHqT7YG9Vdto+kLDhOItVtoR5fDSQqPwBqvax4YhvhK99q13LG2QcgcxHfmxmrHp47NiK4v35Zef7RuH5NU1S0msrpY/IyyoTzYI6Nj5V5vdw6jaXckB+GZkbHMpGDWu1zVphKs+jQNySdS+xUHtWbiivXvDcy8yuerBTVWkhbCG2aHqZVvGGd9G4pvNJMMd5GjQxnCsmxA98en/art+LLK4xLGSspyzEPnJP8A0qourrKee35hj77IN6obi2tZCT4RjJOcpULvT6rJbumKrWTisM1Nlq9k88pb4dLhiPDmkXPL/wBM571a2OsWVpKlrHdRzySEq7A5BLEE7/OvNXtsN+qmYj3pOWePBWY7dMCs1npkZ9sqs22PL4Na1+t1qc00bFW8QkAnZqurO7hSaN1jSLl68uN683MtyOj043V5jHjPv6Up+n7lhPgtrlVDtZPaE4sjhibM6qFGMVS6rx4iKcT5J9CK8sd52/aTSH/3VwZd8nf51XD0iCfvlkvet4xGJba9r1xq0xLsRF2FWHDnDD3wW5u2VU2KxFhk/TP5VmFPK6nsCDUq6uVNyXtppmTOV8XqPwrpxqUIbYcGR2OUt0j1/SNFsPh2uZisKxHYDqCM5yM49Kx3F/EYuLgC1HJEAORR0bH3Wx6dx6n2qImszW/DUUBnDxSOx8rEM5/gbPbuTWakmeVy7nLGqq6fdmRbZbxhDHbncsxJJOSfU11srY3dwsMaMzN6EbD16VwLN2zVjpkU/OBGxVpCAxGxxWnODOdPsmD+GX/MP6UVZ/Z49T/mNFLcGDKsuBSBsCuqRMxGRy/4jikZApxn6mpCGgM3b8qblgw6daeNug2oJHXG9AF+eJ5DbxxPCnlxzMCct+dEuvhlwsUituck7H86zhbc70okfs1MWDQrq0+OZGRUz96Rj+GMmkj4nukYfqoXx6g1nS2T5s5peb3oywwa6LikqwZrC3HplmH5ZxXSXihDGQ8EfMRuAxA/KsaW9DSbH3NPcxbUXlzrkUxblsol32PMaiLqpU5EKfiaruQ4zikG/SlljwizGqsSWMKH/FvQ+qK//lYl9xmq3t0OflSYPcGgeCZ8cf4FpDeuf3VqKAT2oIPYUASBcfxIrfMmkMy/3Sfia4UY9/yoAezseyj2xTQAdzSUvyOfoaQHQztgKeijAFN8ZgNgPwrmaBmgC0sbR3YNLsTuBjpVyYUtbZ5uYeRScD2qjs9XurUrhwwHQPGGqZda9Neae1gtpApd8tOsXnI/h67DNJoawVv2nff3i/hRTfhpv4f5UVIRPT9mflXA/s0oopCOEnU0wUUUDGH7xo70UUANNKelFFACUooooAV+1Ptf7QPlRRTAlfvn5Vxm+8KKKAEFKaWigDn+/wDWnt0FLRQBwf75pB3oopAFP7UUUAIe1T9M/aGiigaLOiiimB//2Q=="
                                      style={{
                                        width: "15%",
                                        height: "5rem",
                                        display: "grid",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        marginBottom: "10px",
                                      }}
                                    />
                                    <Card.Body>
                                      <Card.Title>Burger</Card.Title>
                                      <Card.Text>
                                        <FontAwesomeIcon
                                          icon={faIndianRupee}
                                          size="xs"
                                        />
                                        129
                                      </Card.Text>
                                    </Card.Body>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "40px",
                                      }}
                                    >
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        -
                                      </Button>
                                      <div>
                                        <span style={{ margin: "10px" }}>
                                          1
                                        </span>
                                      </div>
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </Card>
                                  <Card
                                    style={{
                                      width: "100%",
                                      border: "none",
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <Card.Img
                                      variant="top"
                                      src="data:image/jpeg;base64,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"
                                      style={{
                                        width: "15%",
                                        height: "5rem",
                                        display: "grid",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                        marginBottom: "10px",
                                      }}
                                    />
                                    <Card.Body>
                                      <Card.Title>Burger</Card.Title>
                                      <Card.Text>
                                        <FontAwesomeIcon
                                          icon={faIndianRupee}
                                          size="xs"
                                        />
                                        $200
                                      </Card.Text>
                                    </Card.Body>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        marginTop: "40px",
                                      }}
                                    >
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        -
                                      </Button>
                                      <div>
                                        <span style={{ margin: "10px" }}>
                                          1
                                        </span>
                                      </div>
                                      <Button
                                        variant="info"
                                        style={{
                                          width: "2rem",
                                          height: "2rem",
                                          display: "grid",
                                          justifyContent: "center",
                                        }}
                                      >
                                        +
                                      </Button>
                                    </div>
                                  </Card>
                                </Row>
                              </Container>
                            </>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  {/* Seats and meals */}
                  {/* fare and summary */}
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
                          height: "9%",
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
