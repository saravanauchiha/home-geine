import React from 'react'
import Nav from './Nav';
import './home.css';
import { Col, Row } from 'reactstrap';
import Catecory from './Catecory';
import Carouselcomponent from './carousel';
import Homefooter from './Homefooter';


 function Home() {
    return (
        <div>
        <div className="home">
        <Nav/>
       
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
