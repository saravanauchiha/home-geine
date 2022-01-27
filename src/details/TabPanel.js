import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState , useEffect} from 'react'
import axios from 'axios';
import './table.css';
import Cardfile from './Cardfile';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [categoriesTotaldata,setCategoriesTotaldata]= useState([]);
  const[removeDups,setremoveDups] = useState([]);
 
  useEffect(() => {
      let getData = async () => {
          let dataGot = await axios.get("https://rcz-backend-arvinth.herokuapp.com/api/getGenieRecordsByAllCategories")
          let toRemoveDups = await dataGot.data.reduce((storageArray,e,index)=>{
          if(!storageArray.includes(e.mainCategory)){
              storageArray.push(e.mainCategory)
          }
          return storageArray
          },[])
          let toFilter = decodeURI(window.location.href.split("/")[window.location.href.split("/").length-1]);
          setremoveDups(toRemoveDups.filter(e=>{
           return e == toFilter

          }));
          let contentToFilter =await dataGot.data.filter(e=>{
             return e.mainCategory == toFilter

          })
          setCategoriesTotaldata(contentToFilter)
          
      }
    getData();

  }, [])
 

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
      <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "500" }}
      >
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
          >    
          {removeDups.length ? removeDups.map((e,index)=>(
              <Tab label={e} {...a11yProps(index)} />
          )) :(<div></div>)}
              {/* <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
              <Tab label="Item Four" {...a11yProps(3)} />
              <Tab label="Item Five" {...a11yProps(4)} />
              <Tab label="Item Six" {...a11yProps(5)} />
              <Tab label="Item Seven" {...a11yProps(6)} /> */}
          </Tabs>

         
             
          
         
          <TabPanel value={value} index={0}>
            {categoriesTotaldata.map(e=>(
              <Cardfile jobFromData={e.job} priceFromData={e.price} ratingFromData={e.rating} detailsFromData={e.description}/>
            ))}
          
          </TabPanel>
         
         
      </Box>
  );
}