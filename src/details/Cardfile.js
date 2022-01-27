
import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from "reactstrap";
import { Button } from 'antd';

const { Meta } = Card;
function Cardfile({ jobFromData, priceFromData, ratingFromData, detailsFromData }) {
  return (
    <div>
      <Card
        className="cardtotal "
        style={{ width: 450, fontSize: "1rem", border: "1px solid grey",marginBottom:"1rem" }}
        cover={
          <div className="cardimage" style={{ display: "flex", justifyContent: "space-around", marginTop: "0.5rem" }}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="140"
            />
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="140"
            />
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              width="140"
              height="200"
            />
          </div>
        }

      >
        <Row style={{ marginTop: "1rem", display: "flex", justifyContent: "start", }}>
          <Col>
            <p style={{ display: "flex", justifyContent: "start", fontSize: "1rem", fontWeight: "bolder",marginLeft: "-0.7rem" }}>{jobFromData}</p>
          </Col>
        </Row>
        <Row  style={{marginTop:"-0.7rem"}} >
          <Col>
            <Row><p style={{ display: "flex", justifyContent: "start", marginLeft: "-0.7rem",fontSize:"16px",fontWeight: "500",color:"#212121" }}>price:{priceFromData}</p> </Row>
            <Row><h1 style={{ display: "flex", justifyContent: "start", marginLeft: "-1rem" }}><span style={{ color: "green", fontSize: "1rem",fontWeight:"bold" }}>{ratingFromData}*</span><span style={{ color: "#757575", fontSize: "0.8rem", fontWeight: "lighter", alignSelf: "flex-end" }}>from 38.5k ratings</span></h1></Row>

          </Col>
          <Col style={{display:"flex",justifyContent:"flex-end",marginTop:"0.5rem"}}>
          <Button type="primary" ghost>
      Add +
    </Button>
          </Col>
        </Row >
        <p style={{ display: "flex", justifyContent: "start", marginLeft: "-0.7rem" ,marginTop:"-0.7rem"}} >Describtion</p>
        {detailsFromData.indexOf(",") != -1 ? detailsFromData.split(",").map(e => (

          <Row style={{ display: "flex", justifyContent: "start" ,marginTop:"-0.7rem"}}>
            <Col>
            <span style={{marginLeft: "-0.7rem", color: "#757575", fontSize: "0.8rem", fontWeight: "lighter",  display:"flex",justifyContent:"flex-start", }}>{e}</span>
            </Col>
          </Row>

        )) :
          <Row style={{ display: "flex", justifyContent: "start" ,marginTop:"-0.7rem"}}>

<span style={{marginLeft: "-0.7rem",color: "#757575", fontSize: "0.8rem", fontWeight: "lighter", display:"flex",justifyContent:"flex-start" ,}}>{detailsFromData}</span>

          </Row>
        }
        {/* <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    /> */}
      </Card>
    </div>
  );
}
export default Cardfile;

