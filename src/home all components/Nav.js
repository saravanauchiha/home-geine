import React from 'react'
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
 function Nav() {
    function handleMenuClick(e) {
        message.info('Click on menu item.');
        console.log('click', e);
      }
    const menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            1st menu item
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <Row className="gh">
                <Col lg={7} style={{display:"flex"}}>
<img src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"></img>
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
     <EnvironmentOutlined />   Button <DownOutlined />
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
