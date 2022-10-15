import React from "react";
import { useState } from "react";
import styles from "./flightbooking.module.css";
import { useDispatch } from "react-redux";
import { formDetails } from "./flightBookingSlice";
import Alert from "@mui/material/Alert";
import { Button, Row } from "react-bootstrap";
import { height } from "@mui/system";
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
      className={styles.formbox}
    ><Row style={{marginTop:"5px"}}>
      {/* <input type="checkbox" /><span></span> */}
      <b style={{ padding: "2%",fontWeight:"700",fontSize:"14px",paddingLeft:"10px" }}>ADULT {tag}</b>

    </Row>
    {/* <hr /> */}
    <Row style={{backgroundColor:"rgb(255, 237, 209)",padding:"10px",width:"100%",marginLeft:"1px"}}>
      <span style={{fontWeight:"700",fontSize:"13px"}}>
      Enter name as mentioned on your passport or Government approved IDs.
      </span>

    </Row>
    <Row style={{marginTop:"10px",display:"flex",marginBottom:"15px"}}>

      <div className={styles.form}>
        <input
          placeholder="First and Middle Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={styles.nametraveller}
          />
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          className={styles.nametraveller}

          />
          <Button type="checkbox" value="MALE" name="gender" variant="custom" className={styles.genderbutton}>Male</Button>
          <Button type="checkbox" value="FEMALE" name="gender" variant="" className={styles.genderbutton}>Female</Button>
          
      </div>
      

          </Row>
      <hr />

          <Row>
        <Button variant="" style={{color:"blue",minWidth:"50%",marginLeft:"10px",height:"3rem",display:"grid",justifyContent:"start",lineHeight:"1.2"}} className={styles.addnew}>+ ADD NEW ADULT</Button>
      </Row>
          {/* <Row style={{marginTop:"30px",marginLeft:"20px"}}>
          <div style={{width:"20px",display:"flex",flexDirection:"",gap:"10px"}} onChange={(e)=>setGender(e.target.value)}>
        <input type="radio" value="MALE" name="gender" /> Male
        <input type="radio" value="FEMALE" name="gender" /> Female
      </div>
        <button className={styles.btnSubmit} style={{marginLeft:'10px',marginTop:"10px",
        display:'flex',maxWidth:"20%"}} onClick={submit}>
          ADD
        </button>
      
          </Row> */}

        
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
