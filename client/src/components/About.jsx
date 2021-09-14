import React from 'react';
import  Navbar from "./Navbar";
import {motion ,useViewportScroll } from 'framer-motion';
import {Link } from '@reach/router';
import { animationTwo, transition,transition2,transition3} from "../animations/Animation";


const About = (props) =>{
        const { scrollYProgress } = useViewportScroll()
        return (
                <div className="about-container">
                <Navbar/>
                <motion.path d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0" style={{ pathLength: scrollYProgress }}/>
                <div className="wrapper">
                        <img className="aboutmepic2" src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/28277411_10216426483281695_8922221033060140802_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=ZQwe2XF3NosAX_qw7ji&_nc_ht=scontent-lax3-1.xx&oh=b2a765e800c563d1befc98fcf806896d&oe=61434DD9" alt="about me"/>  
                        <h2 className="main-text">Hello!My Name is Maica Rumbaoa. </h2> 
                        <h3 className="sub-text">I am a photographer.</h3>
                        <h4 className="info">"Me and my husband bring this idea and talent to bring a great look at your memories that will look up for many years. We serviced Orange County are but also flexible to any county around SoCal. We do photgraphy for Newborn, Maternity, Weddings and other. If you are ready to work with us. <Link to="/contactus">Let's get started"</Link></h4>  
                </div>
                
                <div className="sub-container">
                        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
                        <div className="sub-wrapper">
                                <img className="sub-image" src="/images/girl-and-camera-1447940.png" alt="about me"/> 
                                <div className="sub-text">
                                <h2>morbi tincidunt</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Libero nunc consequat interdum varius sit amet mattis vulputate enim.</p>
                                </div>       
                        </div>    
                        </motion.div>
                        <div className="parallax"></div> 
                        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition2}>
                        <div className="sub-wrapper">
                                <img className="sub-image" src="/images/social-media-marketing-1447950.png" alt="about me"/> 
                                <div className="sub-text">
                                <h2>morbi sed viverra ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Libero nunc consequat interdum varius sit amet mattis vulputate enim.</p>
                                </div>
                        </div>   
                        </motion.div>
                        <div className="parallax"></div> 
                        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition3}>
                        <div className="sub-wrapper">
                                <img className="sub-image" src="/images/team-solving-problems-1447933.png" alt="about me"/> 
                                <div className="sub-text">
                                <h2> lorem Ipsum ven detta</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Libero nunc consequat interdum varius sit amet mattis vulputate enim.</p>
                    s            </div>
                        </div>    
                        </motion.div>
                        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition3}>
                        <div className="sub-wrapper">
                                <img className="sub-image" src="/images/woman-explaining-business-graph-1447944.png" alt="about me"/> 
                                <div className="sub-text">
                                <h2> lorem Ipsum ven detta</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Libero nunc consequat interdum varius sit amet mattis vulputate enim.</p>
                                </div>
                        </div>    
                        </motion.div>
                </div>

            <div className="content-about"> 
                <div className="content-wrapping">   
                    <h3>"“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”"</h3>
                    <p>-— Ansel Adams</p>
                </div>      
            </div>
        
            <div className="parallax"></div>
            <div className="social-media-container">
                        <h1 className="main-text"> Follow me</h1>
                        <h2 className="info">Join me in social media and stay tuned!</h2>
            <div className="social-media">
                        
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <a href="https://www.facebook.com/maicz.G/">
                                    <img src="images/facebook.png" alt="" height="100" width="100"/>
                                </a>
                        </motion.div>
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                        <a href="https://www.pinterest.com/">
                        <img src="images/pinterest.png" alt="" height="100" width="100"/>
                        </a>
                        </motion.div>                            
                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <a href="https://www.instagram.com/_maics_/">
                                    <img src="images/instagram.png" alt="" height="100" width="100"/>
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