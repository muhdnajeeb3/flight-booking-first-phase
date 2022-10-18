import { faBagShopping, faHome, faPercentage, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Stickyfooter.css"

function Stickyfooter() {
  return (
    <div className='stickyfooter'>
        <Container fluid style={{Width:"100%"}}>
            <Row  className="stickyfooterrow">
                
                <Col className='colfooter'><Link to="/" style={{color:"#fff",textDecoration:"none"}}><FontAwesomeIcon icon={faHome} size="2x" style={{marginTop:'15px'}}/><br /><b style={{marginBottom:'15px',marginTop:"-15px"}}>Home</b></Link></Col>
                <Col className='colfooter'><Link to="/mytrips" style={{color:"#fff",textDecoration:"none"}}><FontAwesomeIcon icon={faBagShopping} size="2x" style={{marginTop:'15px'}}/><br /><b style={{marginBottom:'15px',marginTop:"-15px"}}>My Trips</b></Link></Col>
                <Col className='colfooter'><Link to="/" style={{color:"#fff",textDecoration:"none"}}><FontAwesomeIcon icon={faPercentage} size="2x" style={{marginTop:'15px'}}/><br /><b style={{marginBottom:'15px',marginTop:"-15px"}}>Offers</b></Link></Col>
                <Col className='colfooter'><Link to="/" style={{color:"#fff",textDecoration:"none"}}><FontAwesomeIcon icon={faWallet} size="2x" style={{marginTop:'15px'}}/><br /><b style={{marginBottom:'15px',marginTop:"-15px"}}>Wallet</b></Link></Col>


            </Row>
        </Container>
        

    </div>
  )
}

export default Stickyfooter