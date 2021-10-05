import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {Link} from '@reach/router'
;import {motion } from 'framer-motion';
import {animationTwo, transition} from "../animations/Animation";

const Homepage = () =>{
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/images")
            .then((res) =>{
                console.log(res.data);
                setImage(res.data);
            })
            .catch((err) =>{
                console.log(err);
            })
}, [ ]);


    return(
            <div className="homepage-container">
                <Navbar/>
                    <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}>
                        {
                            
                            image.map((image, index) =>(       
                                <Link to={"/images/" + image._id}>
                                    <img className="homepage-grid-image" src={image.imgURL}  key={index}  alt="portrait" width="300" height="300"/>
    
                                </Link>   
                                ))   
                        }
                    </motion.div>
            </div>
            
    )
}


export default Homepage;