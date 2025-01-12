import { colors } from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour12: true });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };
  const [mystyle,setmystyle]=useState({
  color:'black',
  backgroundColor:'white'
  });
  const [btntext,setBtnText]=useState("Enable Dark Mode")
  const togglestyle=()=>{
    if(mystyle.color=='white'){
      setmystyle({color:'black',
        backgroundColor:'white'})
        setBtnText("Enable Dark Mode");
    }
    
    else{
      setmystyle({color:'white',
        backgroundColor:'black'})
        setBtnText("Enable light Mode");
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid"style={mystyle}>
          <a className="navbar-brand" href="#"style={mystyle}>
           WELCOME TO FACE RECOGNITION ATTENDANCE SYSTEM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Center-aligned Clock */}
            <div
              className="mx-auto text-center"
              style={{ fontSize:"18px" }}
            >
              {formatDate(currentTime)}, {formatTime(currentTime)}
            </div>
            <button type="button" class="btn btn-success">Teacher Logout</button>
            {/* Right-aligned toggle */}
            <div className="form-check form-switch ms-auto">
            <button type="button"onClick={togglestyle}   className="btn" data-bs-toggle="button">{btntext}</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="body"style={mystyle}  >
     
<p className="d-inline-flex gap-1">
  <button type="button" className="btn btn-primary" data-bs-toggle="button">COLLECT DATA</button>
  <button type="button" className="btn btn-primary" data-bs-toggle="button">TRAIN DATA</button>
  <button type="button" className="btn btn-primary" data-bs-toggle="button">FACE RECOGONITION</button>
  <button type="button" className="btn btn-primary" data-bs-toggle="button"> TAKE ATTENDANCE</button>
  
</p>
      </div>
    </>
  );
}
