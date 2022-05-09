import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

import axios from "axios";

const AddService = () => {
  
    // const { register, handleSubmit } = useForm();
    
    // const onSubmit = data => {
    //     console.log(data);
    //     const url = `https://powerful-shore-67258.herokuapp.com/service`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     .then(res=> res.json())
    //     .then(result =>{
    //         console.log(result);
    //     } )
    // };

    const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    // const value = event.target.address.value;
    event.preventDefault();
    const info = {
      email: user.email,
      // item: item.name,
      // itemId: itemId,
      name: event.target.name.value,
      supplier: event.target.supplier.value,
      price: event.target.price.value,
      img: event.target.img.value,
      stock: event.target.stock.value,
      shipping: event.target.shipping.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
    };
    console.log(info);
    axios
      .post("https://powerful-shore-67258.herokuapp.com/service", info)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
         

          event.target.reset();
        }
      });
  };


    return (
        // <div className='w-50 mx-auto'>
        //     <h2>Please add a service</h2>
        //     <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        //         <input type='text' className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
        //         <textarea type='text' className='mb-2' placeholder='Description' {...register("description")} />
        //         <input  className='mb-2' placeholder='Price' type="number" {...register("price")} />
        //         <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
        //         <input type="submit" value="Add Service" />
        //     </form>
        // </div>


        <div className="w-50 mx-auto">
     
      <h1>
        <u>Add New Item</u>
      </h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="displayName"
          placeholder="name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="item name"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="supplier"
          placeholder="supplier"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="price"
          placeholder="price"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="stock"
          placeholder="stock"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="shipping"
          placeholder="shipping"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="quantity"
          placeholder="quantity"
          required
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name="description"
          placeholder="Description"
          rows="3"
          cols="50"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="img"
          placeholder="img"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Add Item" />
      </form>
    </div>
       
    );
};

export default AddService;


