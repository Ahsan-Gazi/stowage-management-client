import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect( () =>{
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    }, []);

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;

        const updatedUser = {name, description,price};

        // send data to the server
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('Service added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div>
             <h2>Updating Service: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="text" name="description" placeholder='Description' required />
                <br />
                <input type="text" name="price" placeholder='Price' required />
                <br />
                <input type="submit" value="Update Service" />
            </form>
        </div>
    );
};

export default UpdateService;