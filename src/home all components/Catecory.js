import React from 'react'

import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Col, Row } from 'reactstrap';
 function Catecory() {
    return (
        <Row style={{display:"flex",justifyContent:"center",height:"10rem"}}>
            <Col lg={9}>
                <Row style={{backgroundColor:"white",position:"relative",top:"-6rem",padding:"10px",color:"black"}}>
                    
                    <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png" />

       <p >Saloon for women</p>
       </Col>
       <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" />

       <p>Hair Service For Women</p>
       </Col>
       <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png" />

       <p>Women's Therapies</p>
       </Col>   <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" />

       <p>Salon for Men</p>
       </Col>
       <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png" />

       <p>Men's Therapies</p>
       </Col>
      
      
       
       </Row>
       <Row style={{backgroundColor:"white",position:"relative",top:"-6rem",padding:"10px",color:"black"}}>
                    
                    <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"/>

       <p >Home Painting</p>
       </Col>
       <Col>
            <Avatar size={50}src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"/>

       <p>Cleaning & Pest Control</p>
       </Col>
       <Col>
            <Avatar size={50}src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg" />

       <p>Electricians</p>
       </Col>   <Col>
            <Avatar size={50} src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" />

       <p>Plumbers & Carpenters</p>
       </Col>
       
      
      
       
       </Row>
       </Col>
        </Row>
    )
}

export default Catecory;
