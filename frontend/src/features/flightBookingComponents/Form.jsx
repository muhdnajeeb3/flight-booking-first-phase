import React from "react";
import { useState } from "react";
import styles from "./flightbooking.module.css";
import { useDispatch } from "react-redux";
import { formDetails } from "./flightBookingSlice";
import Alert from "@mui/material/Alert";
import { Row } from "react-bootstrap";
export const Form = ({ tag }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("Male");
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const formInfo = {
    name: name,
    lastName: lastName,
    gender: gender
  };
  const submit = () => {
    if (name && lastName) {
      dispatch(formDetails(formInfo));
      setName("");
      setLastName("");
      setAlert(false);
    } else {
      // alert("Fill complete details");
      setAlert(true);
    }
  };
  // const setGender=(event)=> {
  //   console.log(event.target.value);
  // }
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid rgb(248, 248, 248)",
        margin: "2%",
        padding: "1%",
        borderRadius: "5px",
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"column",
        minHeight:"15rem"
        // gap:"0px"
        
      }}
    ><Row style={{marginTop:"10px"}}>
      <b style={{ padding: "2%",fontWeight:"700",fontSize:"14px" }}>ADULT {tag}</b>

    </Row>
    <Row style={{marginTop:"10px"}}>

      <div className={styles.form}>
        <input
          placeholder="First and Middle Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          />
      </div>

          </Row>
          <Row style={{marginTop:"30px",marginLeft:"20px"}}>
          <div style={{width:"20px",display:"flex",flexDirection:"",gap:"10px"}} onChange={(e)=>setGender(e.target.value)}>
        <input type="radio" value="MALE" name="gender" /> Male
        <input type="radio" value="FEMALE" name="gender" /> Female
      </div>
        <button className={styles.btnSubmit} style={{marginLeft:'10px',marginTop:"10px",
        display:'flex',maxWidth:"20%"}} onClick={submit}>
          ADD
        </button>
      
          </Row>

        
      {alert && (
        <>
          <Alert severity="error">
            There is an error - kindly fill in all required details{" "}
          </Alert>
        </>
      )}
    </div>
  );
};
