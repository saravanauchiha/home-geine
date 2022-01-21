import React, { useEffect, useState } from 'react'
import {  Row, Col } from "reactstrap";
import './nav .css';
import { Breadcrumb } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button, message,  Tooltip } from 'antd';
import { DownOutlined, UserOutlined,EnvironmentOutlined  } from '@ant-design/icons';
const onSearch = value => console.log(value);
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

const { Search } = Input;
 function Nav({locationFromHome}) {
const [locationDropDownValues,setLocationDropDownValues] = useState([])
const [locationObjectWithValues,setLocationObjectWithValues] = useState({})
useEffect(() => {
  setLocationObjectWithValues(locationFromHome)
  
}, [locationFromHome])
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
    const menu = (
        <Menu onClick={handleMenuClick}>
          {(Object.keys(locationObjectWithValues).length )
          ?
          (locationObjectWithValues.results.map((e,index)=>(
          <Menu.Item key={index} icon={<EnvironmentOutlined />}>
            {e.formatted_address}
          </Menu.Item>
          )))
          :
          (
          <div></div>
          )
 }
        </Menu>
      );
    return (
        <div>
            <Row className="gh">
                <Col lg={7} style={{display:"flex"}}>

                </Col>
                <Col lg={5} style={{color:"white",fontSize:".8rem"}}>
                <Row>
                    <Col>Blog</Col>
                    <Col className="paraWithUnderline"> Register As Proffessional</Col>
                    <Col>Login/Sign Up</Col>
                </Row>
                </Col>
            </Row>
            <Row style={{marginTop:"6rem"}}>
                <Col><Breadcrumb style={{color:"white"}}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
   
    <Breadcrumb.Item style={{color:"white"}} > chennai </Breadcrumb.Item>
  </Breadcrumb >
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 style={{color:"white",fontSize:"3rem",fontWeight:"bold" }}> Search for all your needs..!</h1></Col>
            </Row>
            <Row >
            < Col lg={4} style={{display:"flex",justifyContent:"end"}}><Dropdown overlay={menu} >
      <Button style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:"2.6rem"}}>
     <EnvironmentOutlined />   Location <DownOutlined />
      </Button>
    </Dropdown></Col>   <Col lg={5}> <Search 
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
      
    /></Col>
            </Row>
            <Row><Col style={{color:"white",padding:"10px"}}><small>Women's Therapies</small><small>, Men's Sallon</small><small>, men's Therapies</small><small style={{border:"none"}}>, etc</small></Col></Row>
            
        </div>
    )
}

export default Nav;
