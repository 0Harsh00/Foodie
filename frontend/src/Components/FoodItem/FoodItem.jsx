import React, { useContext } from "react";
import "./FoodItem.css";
import foodrating from "../../assets/rating_starts.png";
import removeiconred from "../../assets/remove_icon_red.png";
import addicongreen from "../../assets/add_icon_green.png";
import addiconwhite from "../../assets/add_icon_white.png";
import { StoreContext } from "../../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {
  
        const {cartItems , addToCart ,removeFromCart, url} = useContext(StoreContext);
  return (
    <div className="food_list">
      <div className="food-image-cont">
        <img className="food-image1" src={url+"/images/"+image} alt="food img" />
        {!cartItems[id] ? (
          <img className="add"
            onClick={() => addToCart(id)}
            src={addiconwhite}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={removeiconred}
            />
            <p className="count">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={addicongreen}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-desc">
        <div className="food-rating">
          <h3>{name}</h3>
          <img className="foodimg" src={foodrating} alt="food rating" />
        </div>
        <div className="food-descriptione">
          <p className="food-description">{description}</p>
          <p className="food-item-price">{price} RS</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
