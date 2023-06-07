import React from "react";
import "../Styles/Home.css"
import bgg from "../Assest/bggg.jpg"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/typing")
    }
  return (
    <div className="home-main">
        <img src={bgg} alt="" />

    <div className="home-div">
      <h3>Improve your Typing Skill</h3>
      <button onClick={handle} className="enroll">Start Typing Test Now</button>
    </div>
    </div>
  );
}

export default Home;
