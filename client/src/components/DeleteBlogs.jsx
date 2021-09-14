import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteBlogs = (props) => {
    const { id, afterDelete } = props;

    const BlogdeleteHandler = (e, id) => {

        e.preventDefault();
        axios.delete("http://localhost:3000/api/blogs/" + id)
            .then((res) => {
                console.log(res.data);
                afterDelete(id);
                navigate("/admin");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return ( 
    <div>
        <button className = "red-btn" onClick = {(e) => BlogdeleteHandler(e, id) } > Remove Blog Post 
            </button> 
        </div>

    )
}


export default DeleteBlogs;