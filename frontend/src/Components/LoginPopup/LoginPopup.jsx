import React, {  useContext, useState } from "react";
import "./LoginPopup.css";
import cross from "../../assets/cross_icon.png";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken,} = useContext(StoreContext);

   

    const [curState, setCurState] = useState("Sign Up");
    const [data , setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (e)=>{
        e.preventDefault();
        let newUrl = url;
        if(curState==="Login"){
            newUrl += "/api/user/login"; 
        }else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        if (response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            toast.error(response.data.message)
        }
    }

    return (
        <div className="login-popup">
            <form onSubmit={onLogin} className="login-container">
                <div className="login-title">
                    <h2>{curState}</h2>
                    <img onClick={() => setShowLogin(false)} src={cross} alt="" />
                </div>
                <div className="form-info">
                    {curState === "Login" ? (
                        <></>
                    ) : (
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
                    )}
                    <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Enter your Email" required />
                    <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Enter Password" />
                </div>
                <button type="submit" className="login-btn">{curState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By contiuning, i agree to the terms of use & privacy policy</p>
                </div>
                <div className="createacc">
                    {curState === "Login" ? (
                        <p className="crac1">
                            Create new Account{" "}
                            <span onClick={() => setCurState("Sign Up")}>  Click here </span>
                        </p>
                    ) : (
                        <p>
                            Already have an account ?
                            <span onClick={() => setCurState("Login")}>  Login here </span>
                        </p>
                    )}
                </div>

            </form>
        </div>
    );
};

export default LoginPopup;


