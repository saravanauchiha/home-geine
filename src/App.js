import logo from './logo.svg';
import './App.css';
import Home from './home all components/Home';
import Details from './details/Details';
import {  Row, Col } from "reactstrap";
import {useState , useEffect} from 'react'
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const[locationData, setLocationData] = useState([]);
  const[locationObject,setLocationObject]= useState({})
const getMapData = async() => {
  let getData = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/mapData",{
params:{
  latitude :locationData[0] ,
  longitude :locationData[1]
}


  });
  setLocationObject(await getData.data);
}


useEffect(()=>{
  if(locationData.length>0){getMapData();}
 
     
  
 
  
},[locationData])
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);

        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    function showPosition(position){
        setLocationData([ position.coords.latitude , position.coords.longitude]);
    }
    useEffect(()=>{
        getLocation();
        
    },[])
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/Home">
    <Home locationDataFromApp = {locationObject}/>
    </Route>
    <Route path='/Details/:id'>
      <Details />
    </Route>
    </Switch>
    </div>
    </Router>
  );
  }

export default App;
