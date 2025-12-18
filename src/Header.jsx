import {useState,useEffect} from "react";
import {LOGO_URL} from "./utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";


export const Header = () => {
    const onlineStatus = useOnlineStatus();


  const [loginBtn,setLoginBtn]=useState("login");
  useEffect(()=>{
    console.log("UseEffect Called");
  })
  return (
    <div className="header">  
      <div className="logo1">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-details">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
          <button className="loginbtn" onClick={()=>{
          loginBtn==="login" ? setLoginBtn("logout"):setLoginBtn("login")
          }}
          > {loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
