import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import Homepage from '../views/Homepage';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { navigate } from '@reach/router';

const ImageViewer = (props) =>{
    const [area, setArea] = useState("");
    

    const onCloseHandler = (area) =>{
        navigate({area});
    }   
    return(
        <div>
            <Link to={area}>
                <Lightbox image={src.props} title="Image Title" onClose ={onCloseHandler}/>
            </Link>
           
        </div>
    )
}

export default ImageViewer