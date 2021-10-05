import React from 'react';
import  Navbar from "./Navbar";
import {motion ,useViewportScroll } from 'framer-motion';
import {Link } from '@reach/router';


const About = (props) =>{
    return (
        <div className="about-container">
            <Navbar/>
            <div className="wrapper">
                <div className="left">
                    <h2 className="main-text">About Me</h2> 
                    <img className="aboutmepic2" src="/images/maica3.jpg" alt="my pic" width="200" height="200"/>
                    <h4 className="info">"Me and my husband bring this idea and talent to bring a great look at your memories that will look up for many years. We serviced Orange County are but also flexible to any county around SoCal. We do photgraphy for Newborn, Maternity, Weddings and other. If you are ready to work with us. <Link to="/contactus">Let's get started"</Link></h4>
                    
                </div>    
            </div>

            <div className="sub-container">
                        {/* content here */}
            </div>

            <div className="content-about"> 
                <div className="content-wrapping">   
                    <h3>"“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”"</h3>
                    <p>-— Ansel Adams</p>
                </div>      
            </div>
        
            <div className="parallax"></div>
            <div className="social-media-container">
                        <h1 className="sub-text"> Follow me</h1>
            <div className="social-media">
                        
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <a href="https://www.facebook.com/maicz.G/">
                                    <img src="/images/facebook.png" alt="" height="100" width="100"/>
                                </a>
                        </motion.div>
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <a href="https://www.pinterest.com/">
                        <img src="/images/pinterest.png" alt="" height="100" width="100"/>
                        </a>
                        </motion.div>                            
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <a href="https://www.instagram.com/_maics_/">
                                    <img src="/images/instagram.png" alt="" height="100" width="100"/>
                                </a>
                        </motion.div>
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                            <a href="https://www.twitter.com">
                                    <img src="/images/twitter (1).png" alt="" height="100" width="100"/>
                            </a>
                        </motion.div>
                        
            </div>

            </div>
        </div>       

        
    )
}


export default About;