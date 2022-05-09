import React from 'react';
import { Link } from 'react-router-dom';
import useServices  from '../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://powerful-shore-67258.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}>
                     <Link to={`/updateService/${service._id}`}><button>Update</button></Link>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>Delete</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;