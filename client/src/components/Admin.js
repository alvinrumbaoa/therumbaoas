import React ,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import {motion } from 'framer-motion';
import {navigate} from '@reach/router';
import DeleteImage from './DeleteImage';
import DeleteBlogs from './DeleteBlogs';
import DeleteCustomer from './DeleteCustomer';

const Admin = (props) =>{
        const [imageUrl, setImgUrl] = useState("");
        const [blogs, setBlogs]   =useState([]);
        const [title, setTitle] = useState("");
        const[image, setImage] =useState([])
        const [description, setDescription] = useState("");
        const [content, setContent] = useState("");
        const [coverArt, setCoverArt] = useState("");
        const [customer, setCustomer]   =useState([]);

        useEffect(() => {

                axios.get("http://localhost:8000/api/blogs")
                .then((res) =>{
                        console.log(res.data);  
                        setBlogs(res.data);  
                })
                .catch(err => { 
                        console.log(err.response);
                })             

                axios.get("http://localhost:8000/api/customers")
                .then((res) =>{
                        console.log(res.data);  
                        setCustomer(res.data);  
                })
                .catch(err => { 
                        console.log(err.response);
                })     
                axios.get("http://localhost:8000/api/images")
                .then((res) =>{
                        console.log(res.data);  
                        setImage(res.data);  
                })
                .catch(err => { 
                        console.log(err.response);
                })              
        },[])




        const ImagehandleSubmit =(e) =>{
                //  e.preventDefault();
        axios.post("http://localhost:8000/api/images", {
                        imgURL: imageUrl,
                })
                .then((res) =>{
                        console.log(res.data);         
                        navigate("/admin"); 
                })
                .catch(err => { 
                        console.log(err.response);
                })     
               
                navigate("/admin"); 
        }
        const BloghandleSubmit =(e) =>{
                // e.preventDefault();
                axios.post("http://localhost:8000/api/blogs", {
                        title: title,
                        description:description,
                        content: content,
                        coverArt: coverArt,
                })
                .then((res) =>{
                        console.log(res.data);         
              
                })
                .catch(err => { 
                        console.log(err.date);
                })     
                navigate("/admin"); 
            
        }


        const BlogAfterDelete =(deletedID) =>{
                let  filterStateArray = blogs.filter((blogs) =>{    
                return blogs._id !== deletedID;
                });
                setBlogs(filterStateArray);         
        };

        const ImageAfterDelete =(deletedID) =>{
                let  filterStateArray = image.filter((image) =>{
                return image._id !== deletedID;
                });
                setImage(filterStateArray);         
        };

        const CustomerAfterDelete =(deletedID) =>{
                let  filterStateArray = customer.filter((customer) =>{
                        
                return customer._id !== deletedID;
                });
                setCustomer(filterStateArray);
        };

        return(
        <div className="homepage-container">
                <div className="portfolio-container">
                        <Navbar/>
                                <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                                        <h1 className="big-text">Dashboard</h1>     
                                        <div className="category-container">           
                                                <div className="cards-admin" >
                                                                <h2>Blog Posts</h2>
                                                                {
                                                                        blogs.map((getBlog, index) =>(
                                                                        <div className="view" key={index}>
                                                                                {getBlog.id}
                                                                                <h2 > Title: {getBlog.title}</h2>    
                                                                                <p> Decription: {getBlog.description}</p>    
                                                                                <DeleteBlogs id={getBlog._id } afterDelete= {BlogAfterDelete}  />
                                                                        </div>
                                                                ))
                                                                }     
                                                                <h3>Add Blog</h3>
                                                                <form className="form-container" onSubmit={ BloghandleSubmit }>  
                                                                <div className="textbox-bg">
                                                                        <p>Title</p><input type="text" name="title" onChange ={(e) => setTitle(e.target.value)}/>  
                                                                </div>                                                         
                                                                <div className="textbox-bg">
                                                                        <p>Description</p><input type="text" name="description" onChange ={(e) => setDescription(e.target.value)}/>  
                                                                </div>
                                                                <div className="textbox-bg">
                                                                <p>Content</p><input type="text" name="content" onChange ={(e) => setContent(e.target.value)}/>  
                                                                </div>
                                                                <div className="textbox-bg">
                                                                <p>Cover Art</p><input type="text" name="coverArt" onChange ={(e) => setCoverArt(e.target.value)}/> 
                                                                </div>
                                                                <button className="red-btn" type="submit">Add a Blog</button>
                                                                
                                                                </form>
                                                </div>
                                                <div className="cards-admin" >
                                                                <h2>New Customer</h2>
                                                                {
                                                                customer.map((getCustomer, index)=>(
                                                                        <div className="view" key={index}>                  
                                                                        <h2>Name:   {getCustomer.name}</h2> 
                                                                        <p>Email:</p>    {getCustomer.email}
                                                                        <p>Message:</p>      {getCustomer.message}
                                                                        <p>Themes:</p>     {getCustomer.theme}
                                                                        <DeleteCustomer  id={getCustomer._id } afterDelete= {CustomerAfterDelete}   />
                                                                        </div>
                                                                ))
                                                                }
                                                </div>                                    
                                                <div className="cards-admin">
                                                
                                                                <h2>Upload Images</h2>
                                                                <form className ="form-container" onSubmit ={ ImagehandleSubmit }>  
                                                                <label>Image Url: </label>
                                                                <input type="text" name="imageURL" onChange ={(e) => setImgUrl(e.target.value)}/>  
                                                                <button className="red-btn"  type="submit">Upload</button>
                                                                </form>
                                                                <div className="grid-image">
                                                                {
                                                                        image.map((image, index) => (
                                                                                <div className="view-image" key={index}>        
                                                                                <img key={index} src={image.imgURL} alt="images" width="200" height="200"/>
                                                                                
                                                                                <DeleteImage  id={image._id } afterDelete= {ImageAfterDelete} />
                                                                                </div> 
                                                                        ))
                                                                }
                                                                
                                                                </div>   
                                                </div>
                                        </div>
                                </motion.div>
                </div>
        </div>
        )
}

export default Admin;