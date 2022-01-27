import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import './home.css';
import { Col, Row } from 'reactstrap';
import Catecory from './Catecory';
import Carouselcomponent from './carousel';
import Homefooter from './Homefooter';
import axios from 'axios';


 function Home({locationDataFromApp}) {
    const [fulldata,setFulldata]=useState([])

    useEffect(()=>{

        let getfulldata=async()=>{
            let totaldata= await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
            
            setFulldata(await totaldata.data)
              }

console.log(fulldata)
    getfulldata();
   
    },[])
  
    return (
        <div>
        <div className="home">
        <Nav locationFromHome = {locationDataFromApp}/>
       
        </div>
        <div>
        <Catecory/>
        </div>
        <div>
        <Carouselcomponent/>
        </div>
        <div>
        <Homefooter/>
        </div>
        </div>
    );

}
export default Home;
