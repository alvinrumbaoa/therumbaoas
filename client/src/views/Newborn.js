import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Newborn = (props) =>{
        const [src] = useState(["/images/newborn.jpg","/images/newborn1.jpg","/images/newborn2.jpg","/images/newborn3.JPG","/images/newborn4.JPG","/images/newborn5.JPG","/images/newborn6.jpg","/images/newborn7.jpg","/images/newborn8.jpg"]);

        return (
            <div className="categories-container">
                    <Navbar/>
                    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                        <h1 className="big-text">Newborn</h1>
                        <div className="grid-image">
                        {
    
                            src.map((image, idx)=>(
                                
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <img key={idx} className="square-image"src={image} alt="event images" width="350" height="350"/>
                                </motion.div>
                            ))
                        }
                        </div>
                    </motion.div>
            </div>
        )
}


export default Newborn;