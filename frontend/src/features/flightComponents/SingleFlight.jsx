import React from "react";
import styles from "./singleflight.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  addBookingFlights,
  flightBookingError,
  flightBookingLoading,
} from "../flightBookingComponents/flightBookingSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faRupeeSign, faUser } from "@fortawesome/free-solid-svg-icons";
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
  Origin,
}) => {
  const [viewPrices, setViewPrices] = useState(false);
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
  const VIEWPRICES = (_id) => {
    if (_id === viewPrices) {
      setViewPrices(true);
    }
  };
  const buttonactionondiv = (id) => {
     if (window.innerWidth<580) {
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
  }
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.singleflight} key={_id} onClick={() => buttonactionondiv(_id)}>
        {/* <div
        style={{
          backgroundColor: "#B8FFF9",
          padding: "0.2px",
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
              display:"flex",
              flexDirection:"row",
              // width:"12%"
            }}
          >
            {/* <FontAwesomeIcon icon={faUser} /> Login in to view */}
            <img src="	https://imgak.mmtcdn.com/flights/assets/media/mobile/common/hdpi/6E.png?v=9" alt="airlines" className={styles.imgairline}/>
            <span style={{marginLeft:"8px"}}>{name}</span>
          </div>
          <div className={styles.divsec}>
            <div className={styles.inner_cont}>
              <b className={styles.departtime}>{departure_time}</b>
              <p className={styles.departsub}>{departure}</p>
            </div>
            <div className={styles.inner_cont}>
              <span style={{fontSize:"12px",width:""}}>{duration}</span>
              <hr className={styles.line} />
              <span
                style={{
                  fontSize: "10px",
                  color: "gray",
                  // textAlign: "center",
                  margin:"auto",
                  whiteSpace:"nowrap"
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
    </>
  );
};
