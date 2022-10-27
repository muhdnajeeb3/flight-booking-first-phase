import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./fareTypes.module.css";
const FareTypes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <div className={styles.first}>Select a fare type</div>
        <div className={styles.selectBox} style={{borderRadius:"5px 0px 0px 4px"}}>
          <input type="radio" name="fares" />
          <p className="farep">Regular <br />Fares</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p className="farep">
            Armed Forces <br />
            Fares
            <span style={{color:"red",marginLeft:""}}>
            NEW
            </span>
          </p>
          
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p className="farep">Student <br />fares</p>
        </div>
        <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p className="farep">Senior Citizen <br />fares</p>
        </div>
        {/* <div className={styles.selectBox}>
          <input type="radio" name="fares" />
          <p className="farep">Doctor & Nurses <br />Fares</p>
        </div> */}
        <div className={styles.selectBox} style={{borderRadius:"0px 5px 4px 0px"}}>
          <input type="radio" name="fares" />
          <p className="farep">Double Seat <br />Fares</p>
        </div>
      </div>
      {/* <div className={styles.div2}>
        <div className={styles.second}>Trending Searches:</div>
        <div className={styles.selectBox1}>
          <p style={{fontSize:"12px",lineHeight:"12px",marginBottom:"3px"}}>Chennai <FontAwesomeIcon icon={faArrowRight} style={{color:"skyblue"}}/> Hydrabad</p>
        </div>
        <div className={styles.selectBox1}>
          <p style={{fontSize:"12px",lineHeight:"12px",marginBottom:"3px"}}>Delhi <FontAwesomeIcon icon={faArrowRight} style={{color:"skyblue"}}/> Kolkata</p>
        </div>
      </div> */}
    </div>
  );
};

export default FareTypes;
