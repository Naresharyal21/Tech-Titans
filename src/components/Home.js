import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate(); // Hook for navigation

  // Digital clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", { hour12: true });
  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { weekday: "long" });

  // Changing modes
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Dark Mode");

  const togglestyle = () => {
    const isDarkMode = mystyle.color === "white";
    setmystyle({
      color: isDarkMode ? "black" : "white",
      backgroundColor: isDarkMode ? "white" : "black",
      transition: "all 0.9s ease-in-out",
    });
    setBtnText(isDarkMode ? "Dark Mode" : "Light Mode");
  };

  // Handle logout
  const handleLogout = () => {
  
    
    console.log("Logged out successfully!");
    navigate("/"); // Navigate to the login page
  };

  // CSS styles
  const mainBodyStyle = {
    height: "100vh",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    ...mystyle,
  };

  const dashboardStyle = {
    width: "80%",
    height: "85vh",
    padding: "0",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgb(248, 4, 65)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    ...mystyle,
  };

  const navbarStyle = {
    position: "sticky",
    padding: "2vw",
    top: "0",
    zIndex: "1000",
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 4px 8px rgb(248, 4, 65)",
    ...mystyle,
  };

  const navbarItemStyle = {
    flex: 1,
    textAlign: "center",
    fontSize: "18px",
    ...mystyle,
  };

  const clockStyle = {
    ...navbarItemStyle,
    fontSize: "20px",
  };

  const buttonStyle = {
    ...navbarItemStyle,
    fontSize: "18px",
    border: "none",
    background: "transparent",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "100px",
    flexGrow: 1,
  };

  const btnStyle = {
    height: "15%",
  };

  return (
    <>
      <div className="mainbodypage" style={mainBodyStyle}>
        <div className="dashboardpage" style={dashboardStyle}>
          {/* Navbar */}
          <nav className="navbar" style={navbarStyle}>
            <a className="navbar-brand" href="#" style={navbarItemStyle}>
              WELCOME TO FACE RECOGNITION ATTENDANCE SYSTEM
            </a>
            <div style={clockStyle}>
              {formatDate(currentTime)}, {formatTime(currentTime)}
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleLogout}
            >
              Teacher Logout
            </button>
            <button
              type="button"
              onClick={togglestyle}
              className="btn btn-info"
              style={buttonStyle}
            >
              {btntext}
            </button>
          </nav>

          {/* Buttons */}
          <div className="body" style={buttonContainerStyle}>
            <button type="button" className="btn btn-primary" style={btnStyle}>
              COLLECT DATA
            </button>
            <button type="button" className="btn btn-primary" style={btnStyle}>
              TRAIN DATA
            </button>
            <button type="button" className="btn btn-primary" style={btnStyle}>
              FACE RECOGNITION
            </button>
            <button type="button" className="btn btn-primary" style={btnStyle}>
              TAKE ATTENDANCE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
