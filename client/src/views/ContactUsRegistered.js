import React from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const ContactUsRegistered = (props) =>{

   
    return (
        <div className="registered-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                <h1 className="main-text">Thank you ! We will contact you as soon as possible.</h1>
                <img className="success-image" src="/images/success.png" alt="successfulicon"/>
                </motion.div>


        </div>
    )
}


export default ContactUsRegistered;