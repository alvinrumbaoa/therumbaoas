import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteImage = (props) => {
    const { id, afterDelete } = props;

    const ImagedeleteHandler = (e, id) => {

        e.preventDefault();
        axios.delete("http://localhost:3000/api/api/images/" + id)
            .then((res) => {
                console.log(res.data);
                afterDelete(id);
                navigate("/admin");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return ( <
        div >
        <
        button className = "red-btn-image"
        onClick = {
            (e) => ImagedeleteHandler(e, id) } > Delete Image < /button> <
        /div>

    )
}


export default DeleteImage;