import React, { useState} from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";


const Food = (props) =>{
    const [src] = useState(["/images/food1 (1).jpg","/images/food1 (2).jpg","/images/food1 (3).jpg","/images/food1 (4).jpg","/images/food8.jpg","/images/food9.jpg","/images/food1 (7).jpg","/images/food10.jpg","/images/food1 (6).jpg"]);

    return (
        <div className="categories-container">
                <Navbar/>
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <h1 className="big-text">Food</h1>
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


export default Food;