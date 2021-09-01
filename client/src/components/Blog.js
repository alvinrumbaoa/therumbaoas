import React, { useState, useEffect } from 'react';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import axios from 'axios';
import {Link} from '@reach/router'
const Blog = (props) =>{
    const [blog, setBlog] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/blogs")
            .then(res =>{
                console.log(res.data);
                setBlog(res.data);
            })
            .catch((err) =>{
                console.log(err)
            })

    }, [])


    return (
        <div className="blog-container">
        <Navbar/>
        <h1 className="big-text">Blogs</h1>
            <div className="blog-wrapper">
            <div className="blog-wrapper">
                <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
                    
                    {
                        blog.map((post, index) => (
                                <div className="blog-cards" key={index} >
                                <Link to={"/blogs/" + post._id} className="link">
                                        <img className="blog-image" src={post.coverArt} alt="cover-Art" />
                                        <hr/> 
                                        <h2 className="blog-sub-text" >{post.title}</h2>
                                        <p> {post.createdAt !== "" ?
                                        ((new Date(post.createdAt)).toLocaleDateString("en-us"))
                                        : ""}</p>
                                        <hr/> 
                                        <h4 className="blog-info">{post.description}</h4>
                                </Link>
                                </div>
                        ))
                    }
                </motion.div>
                </div> 
                
            </div> 
        </div>
    )
}


export default Blog;