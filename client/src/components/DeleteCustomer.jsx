import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteCustomer = (props) => {
    const { id, afterDelete } = props;

    const CustomerdeleteHandler = (e, id) => {

        e.preventDefault();
        axios.delete("http://localhost:3000/api/customers/" + id)
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
        <button className = "red-btn" onClick = { (e) => CustomerdeleteHandler(e, id) } > Delete Customer 
        </button> 
        </div>

    )
}


export default DeleteCustomer;