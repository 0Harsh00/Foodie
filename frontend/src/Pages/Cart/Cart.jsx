import React, { useContext } from "react";
import "./Cart.css";
import { food_list } from "../../context/FoodList";
import { StoreContext } from "../../context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart,totalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-items-item ">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name} </p>
                  <p>{item.price} RS</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} RS</p>
                  <p
                    className="cart-x"
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                  >
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>{10} RS</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{totalCartAmount()+10} RS</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>IF YOU HAVE A PROMO CODE ENTER HERE</p>
            <div className="promo-code-input">
              <input type="text" placeholder="Promo code" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
