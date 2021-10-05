import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import Homepage from '../views/Homepage';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { navigate } from '@reach/router';

const ImageViewer = (props) =>{
    const [image, setImage] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/images/" + props.id)
        .then((res) =>{
            console.log(res.data);
            setImage(res.data); //set state from API
        })
        .catch((err) => {
            console.log(err);
        });

    
    },[props.id]);

    const onCloseHandler = () =>{
        navigate("/home");
    }   
    return(
        <div>
            <Homepage/>
            <Lightbox image={image.imgURL} title="Image Title" onClose ={onCloseHandler}/>
        </div>
    )
}

export default ImageViewer