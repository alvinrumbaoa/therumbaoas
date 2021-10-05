import React from 'react';
import Navbar from '../components/Navbar';
import {motion } from 'framer-motion';
import { Link } from '@reach/router';

const Portfolio= (props) => {
        
        const sectionStyling1={
                backgroundImage: "url('images/event1.jpg')",
                objectFit: "cover",
        }
        const sectionStyling2={
                backgroundImage: "url('images/maica1.jpg')",
                objectFit: "cover",
        }
        const sectionStyling3={
                backgroundImage: "url('images/newborn.jpg')",
                objectFit: "cover",
        }
        const sectionStyling4={
                backgroundImage: "url('images/wedding1.jpg')",
                objectFit: "cover",
        }

        const sectionStyling5={
                backgroundImage: "url('images/food1 (1).jpg')",
                objectFit: "cover",
        }
        return (
                <div className="portfolio-container">
                        <Navbar/>
                                <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                <h1 className="big-text">Portfolio</h1>     
                                <div className="category-container">
                                        <Link to="/portfolio/events" className="link">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards" style={sectionStyling1}>
                                                <h2>Events</h2>
                                                </div>
                                        </motion.div>
                                        </Link>
                                        <Link to="/portfolio/modeling" className="link">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards" style={sectionStyling2}>
                                                <h2>Models</h2>
                                                </div>
                                        </motion.div>
                                
                                        </Link>
                                        <Link to="/portfolio/newborn" className="link">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards" style={sectionStyling3}>
                                                <h2>Newborn</h2>
                                                </div>
                                        </motion.div>
                                        </Link>
                                        <Link to="/portfolio/wedding" className="link">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards" style={sectionStyling4} >
                                                <h2>Wedding</h2>
                                                </div>
                                        </motion.div>
                                        </Link>
                                        <Link to="/portfolio/food" className="link">
                                        <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                                <div className="cards" style={sectionStyling5}>
                                                <h2>Food</h2>
                                                </div>
                                        </motion.div>
                                        </Link>
                                </div>
                                </motion.div>
                </div>
        )
}

export default Portfolio;
