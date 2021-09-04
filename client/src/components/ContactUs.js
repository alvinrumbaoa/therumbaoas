import React, { useState} from 'react';
import axios from 'axios';
import  Navbar from "./Navbar";
import {motion } from 'framer-motion';
import {animationOne, transition} from "../animations/Animation";
import {navigate} from '@reach/router'
const ContactUs = (props) =>{

    const [errors, setErrors] = useState([]);
    const [name, setName]  = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message,setMessage] = useState("");
    const[theme,setTheme] = useState("");
    const themesArray = ["Wedding","Newborn","Birthdays","Events","Modeling"];
    const onSubmitHandler =  (e) =>{
        e.preventDefault();
        axios.post("http://the-rumbaoas.herokuapp.com/api/customers", {
            name: name,
            email: email,
            phone: phone,
            message: message,
            theme: theme,
        })
        .then((res) =>{
            console.log(res.data.errors);
            if(res.data.errors){
                setErrors(res.data.errors);
            
            } else{
                navigate("/submitted");
            }        
        })
        .catch(err => { 
            console.log(err.response);
            setErrors(err.response.data.errors);
        })      
    }


    return (
        <div className="contact-container">
                    <Navbar/>
            <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>

                <div className="contact-us-container">
                    <h1 className="big-text">Let's Make it Happen </h1>
                    <img src="/images/camera 3.png" alt ="camera" width="300/" height="300"/>
                    <form onSubmit={onSubmitHandler}>
                        <div className="textbox-bg">
                            <p>Name:</p> <input className={errors.name? "error-red": null} type="text" name="name"  onChange={(e) => setName(e.target.value)}/>
                        </div>
                        {
                            errors.name ?
                                <span className="error-text">{errors.name.message}</span>
                                : null
                            }
                        <div className="textbox-bg">
                        <p>Email:</p>  <input className={errors.email? "error-red": null}type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        {
                            errors.email ?
                                <span className="error-text">{errors.email.message}</span>
                                : null
                        }
                        <div className="textbox-bg">
                        <p>Phone:</p> <input className={errors.phone? "error-red": null} type="text" name="phone" onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                            {
                            errors.phone ?
                                <span className="error-text">{errors.phone.message}</span>
                                : null
                            }
                        <div className="textbox-bg">
                        <p>Message:</p> <textarea className={errors.message? "error-red": null} type="textarea" name="message"  onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                        {
                            errors.message ?
                                <span className="error-text">{errors.message.message}</span>
                                : null
                            }
                        <div className="textbox-bg">
                        <p> Theme:</p>
                        <select  className={errors.theme? "error-red": null} name="crewPosition" value={ theme } onChange={(e)=> setTheme(e.target.value)}>
                                                <option value=""></option>
                                                {
                                                    themesArray.map((themes) =>(
                                                        <option value={themes} key={themes}>{themes}</option>
                                                    ))
                                                }                               
                        </select>  
                        </div>
                        {
                            errors.theme ?
                                <span className="error-text">{errors.theme.message}</span>
                                : null
                            }
                        <br/>
                        <input className="submit-btn" type="submit" value="Submit"/>
                    </form> 
                    <h4 className="sub-text">Follow Us:</h4>           
                    <div className="social-media">
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                        <a href="https://www.facebook.com/maicz.G/">
                                            <img src="/images/facebook.png" alt="" height="100" width="100"/>
                                        </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                <a href="https://www.pinterest.com/">
                                <img src="/images/pinterest.png" alt="" height="100" width="100"/>
                                </a>
                                </motion.div>                            
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                        <a href="https://www.instagram.com/_maics_/">
                                            <img src="/images/instagram.png" alt="" height="100" width="100"/>
                                        </a>
                                </motion.div>
                                <motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
                                    <a href="https://www.twitter.com">
                                            <img src="/images/twitter (1).png" alt="" height="100" width="100"/>
                                    </a>
                                </motion.div>
                    </div>
                    </div>           
            </motion.div>     

        </div>
    )
}


export default ContactUs;