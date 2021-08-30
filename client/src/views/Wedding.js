import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Wedding = (props) =>{
    const [src] = useState(["/images/wedding1.jpg","/images/wedding2.jpg","/images/wedding3.jpg","/images/wedding4.jpg","/images/wedding5.jpg","/images/wedding6.jpg","/images/wedding7.jpg","/images/wedding8.jpg","/images/wedding9.jpg"]);

    return (
        <div className="categories-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1 className="big-text">Weddings</h1>
                    <div className="grid-images">
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


export default Wedding;