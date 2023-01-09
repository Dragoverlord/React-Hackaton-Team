import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"
import imgHeader from "./Image/123.png"
import imgSidebar from "./Image/project.png"

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={imgHeader} width="100%" height="450px" alt="Header"/>
      <div>

      </div>
      <div className="Sidebar">
        <p style={{margin:"0px 160px"}}>Бестселлеры</p>
        <img src={imgSidebar} width="450px" height="100%" onClick={()=> navigate("/products?q=")} alt="бестселлеры" />
      </div>  
    </div>
  );
};

export default HomePage;
