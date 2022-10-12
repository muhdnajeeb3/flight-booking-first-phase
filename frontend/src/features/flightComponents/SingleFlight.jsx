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
  data
}) => 
{
const [viewPrices,setViewPrices] = useState("");

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
  const navigate = useNavigate();
  return (
    <>
    {data.map((item,_id)=> (
      <>
      <div className={styles.singleflight} key={_id}>
      {/* <div
        style={{
          backgroundColor: "#B8FFF9",
          padding: "0.5px",
          width: "15%",
          height: "20px",
          border: "#42C2FF 1px solid",
        }}
      >
        <h6 className={styles.guidelineText}>Lock price and pay later</h6>
      </div> */}
      <div className={styles.maincontainer}>
        <div
          className={styles.inner_cont}
          style={{
            fontSize: "14px",
            fontWeight: "700",
            marginTop: "2%",
            marginLeft: "1%",
          }}
        >
          <span>{name}</span>
        </div>

        <div className={styles.inner_cont}>
          <b>{departure_time}</b>
          <p>{departure}</p>
        </div>
        <div className={styles.inner_cont}>
          <span>{duration}</span>
          <hr className={styles.line} />
          <span
            style={{
              fontSize: "12px",
              color: "gray",
              textAlign: "center",
            }}
          >
            {stops}
          </span>
        </div>
        <div className={styles.inner_cont}>
          <b>{item.arrival_time}</b>
          <p>{arrival}</p>
        </div>
        <div className={styles.inner_cont}>
          <b>{fare}/-</b>
        </div>
        <Button
                    style={{
                      background: "#daebff",
                      fontWeight: "700",
                      width: "120px",
                      fontSize: "13px",
                      alignItems: "center",
                      lineHeight: "inherit",
                      fontFamily: "inherit",
                      justifyContent: "center",
                      display: "flex",
                      height: "31px",
                      padding: "0 8px",
                      color: "#008cff",
                      borderRadius: "96px",
                      border: "1px solid #008cff",
                    }}
                    onClick={()=>setViewPrices(!viewPrices)}
                  >
                    VIEW PRICES
                  </Button>
        {/* <Button
          className={styles.buttonBookNow}
          style={{
            maxHeight: "30px",
            marginTop: "1.5%",
            fontSize: "10px",
            backgroundColor: "#9AD0EC",
            border: "1px solid #03045E",
            width: "10%",
          }}
          onClick={() => handlePageChange(_id)}
        >
          Book Now
        </Button> */}
      </div>
      {/* <div className={styles.discount}>
        Use MMTSUPER and get FLAT Rs. 309 instant discount on this flight
      </div> */}
      <div className={styles.details}>
        <span>View Flight Details</span>
      </div>
    </div>
    {/* viewprices */}
    {/* {viewPrices &&  (
      <>
      <div className={styles.singleflight} key={_id}>
        
      <Row style={{display:"flex",flexDirection:"row"}}>
        <Col className="col-2">{arrival}
        </Col>
        <Col className="col-2">heyyyy
        </Col>
        <Col className="col-2">heyyyy
        </Col>
        <Col className="col-2">heyyyy
        </Col>
        <Col className="col-1">heyyyy
        </Col>
        <Col className="col-1">heyyyy
        </Col>
        <Col className="col-1">heyyyy
        </Col>
        
      </Row>

    </div>
      </>
    )} */}


      </>
    ))}
    </>
  );
};
