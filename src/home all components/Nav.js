import React from 'react'
import {  Row, Col } from "reactstrap";
import './nav .css';
 function Nav() {
    return (
        <div>
            <Row className="gh">
                <Col lg={6} style={{display:"flex"}}>
<img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"></img>
                </Col>
                <Col lg={6} style={{color:"white"}}>
                <Row>
                    <Col>Blog</Col>
                    <Col className="paraWithUnderline"> Register As Proffessional</Col>
                    <Col>Login/Sign Up</Col>
                </Row>
                </Col>
            </Row>
            
        </div>
    )
}

export default Nav;
