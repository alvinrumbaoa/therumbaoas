import React, { useState, useEffect } from 'react';
import  Navbar from "../components/Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import axios from 'axios';


const ViewOneBlog = (props) =>{
  const [blog, setBlog] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:8000/api/blogs/" + props.id)
            .then(res =>{
                console.log(res.data);
                setBlog(res.data)
            })
            .catch((err) =>{
                console.log(err)
            })

    }, [props.id])
    return (
        <div className="view-blog-container">
                <Navbar/>
                    <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    <div className="blog-content">
                    <img src={blog.coverArt} alt="big-cover-art"/>
                    <h1 className="big-text">{blog.title}</h1>
                    <h2 className="sub-text">{blog.description}</h2>
                    <h3 className="info">{blog.content}</h3>
                    </div>
                    </motion.div>
        </div>
    )
}


export default ViewOneBlog;