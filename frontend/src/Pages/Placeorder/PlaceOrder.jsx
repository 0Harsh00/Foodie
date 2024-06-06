import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
const PlaceOrder = () => {
  const {totalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    // street:"",
    city:"",
    state:"",
    pinCode:"",
    country:"",
    phone:"",
  })
  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if (cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData ={
      address:data,
      items:orderItems,
      amount:totalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if (response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error")
    }
  }
  
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Info</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text"placeholder='First name' required/>
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text"placeholder='Last name'/>
          </div>
          <div className="multi-fields">
          <input name='phone' onChange={onChangeHandler} value={data.phone} type="number"placeholder='Mobile no' required/>
          <input name='email' onChange={onChangeHandler} value={data.email} type="email"placeholder='Email Id' required/>
          </div>
        <div className="multi-fields">
          <input name='city' onChange={onChangeHandler} value={data.city} type="text"placeholder='City' required/>
          <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' required/>
          </div>
          <div className="multi-fields">
            <input name='pinCode' onChange={onChangeHandler} value={data.pinCode} type="number" placeholder='Pincode' required />
            <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' required/>
            </div>
      </div>
      <div className="place-order-right">
      <div className="carttotal">
          <h2>Grand Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{totalCartAmount()===0?0:10} RS</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{totalCartAmount()===0?0:totalCartAmount()+10} RS</b>
            </div>
          </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder