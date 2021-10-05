import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Events = (props) =>{
    const [src] = useState(["/images/event1.jpg","/images/event2.jpg","/images/event3.jpg","/images/event4.jpg","/images/event5.jpg","/images/event6.jpg","/images/event7.jpg","/images/event8.jpg","/images/event9.jpg"]);

    return (
        <div className="categories-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1 className="big-text">Events</h1>
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


export default Events;