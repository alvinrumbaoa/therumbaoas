import React from 'react';
import {Link} from '@reach/router';
import {AnimatePresence } from 'framer-motion';
const Navbar = () =>{


        return(
                <div className="nav-container">
                        <AnimatePresence>
                                <Link to="/home" className="link">
                                        <h1 className="brand">TheRumbaoas©</h1>
                                </Link>
                                <div className="nav-links">
                                        <Link to="/home" className="link">
                                                <p>Home</p> 
                                        </Link>
                                        <Link to="/about" className="link">
                                                <p>About</p> 
                                        </Link>
                                        <Link to="/portfolio" className="link">
                                                <p>Works</p> 
                                        </Link>
                                        <Link to="/blog" className="link">
                                                <p>Blogs</p> 
                                        </Link>
                                        <Link to="/contactus" className="link">
                                                <p>Clients</p> 
                                        </Link>
                                </div>
                        </AnimatePresence>
                </div>
        )
}


export default Navbar;