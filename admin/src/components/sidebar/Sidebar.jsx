import React from "react";
import "./Sidebar.css";
import addicon from "../../assets/add_icon.png";
import ordericon from "../../assets/order_icon.png";
import parcelicon from "../../assets/parcel_icon.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-options">
          <NavLink to='/add' className="sidebar-option">
            <img src={addicon} alt="addicon" />
            <p>Add Items</p>
          </NavLink>
        </div>
        <div className="sidebar-options">
          <NavLink to='/list' className="sidebar-option">
            <img src={ordericon} alt="addicon" />
            <p>List Items</p>
          </NavLink>
        </div>
        <div className="sidebar-options">
          <NavLink to='/Order' className="sidebar-option">
            <img src={ordericon} alt="addicon" />
            <p>orders</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
