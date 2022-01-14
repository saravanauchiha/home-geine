import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Carouselcomponent(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
        <div>
    <Carousel  responsive={responsive}>
   
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641562911389-61d01c.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641563446544-150658.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div ><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641563483313-1c0dbc.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641562910380-5abbe9.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641563531164-07beab.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641562916441-91d85c.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641562904738-9a315d.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641562903875-9e355e.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641563610629-e84472.jpeg" style={{width:"25rem",height:"12rem"}}/></div>
    <div><img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/images/growth/home-screen/1641563646755-ccdd14.jpeg" style={{width:"25rem",height:"12rem"}}/></div>

    
  </Carousel>
  <div style={{height:"12rem",backgroundImage:"url(https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_2049/t_high_res_template/images/growth/home-screen/1641569812728-a8517a.jpeg)",backgroundSize:"cover",marginTop:"2rem"}}>
 
  </div>
  </div>
  </div>
  );
}

export default Carouselcomponent;