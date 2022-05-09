import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://powerful-shore-67258.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea type='text' className='mb-2' placeholder='Description' {...register("description")} />
                <input  className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>


        // <div >
        //     <h2>Please add a service</h2>
        //     <form className='serviceAdd' onSubmit={handleSubmit(onSubmit)}>
        //         <input  placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        //         <textarea  placeholder='Description' {...register("description")} />
        //         <input  placeholder='Price' type="number" {...register("price")} />
        //         <input  placeholder='Photo URL' type="text" {...register("img")} />
        //         <input type="submit" value="Add Service" />
        //     </form>
        // </div>
    );
};

export default AddService;


// <h2>Updating Service: {user.name}</h2>
// <form onSubmit={handleUpdateUser}>
//     <input type="text" name="name" placeholder='Name' required />
//     <br />
//     <input type="email" name="email" placeholder='Email' required />
//     <br />
//     <input type="submit" value="Update Service" />
// </form>