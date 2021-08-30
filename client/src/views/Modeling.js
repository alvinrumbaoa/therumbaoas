import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Modeling = (props) =>{
    const [src] = useState(["/images/model2.jpg","/images/model4.jpg","/images/model1.jpg","/images/model3.jpg","/images/maica1.jpg","/images/3C1A5343.jpg","/images/event7.jpg","/images/newborn2.jpg","/images/3C1A5003.jpg"]);

    return (
        <div className="categories-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1 className="big-text">Modeling</h1>
                    <div className="grid-image">
                    {

                        src.map((image, idx)=>(
                            <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <img className="square-image"src={image} alt="event images" width="350" height="350"/>
                            </motion.div>
                       
                        ))
                    }
                    </div>
                </motion.div>
        </div>
    )
}


export default Modeling;