import React from "react";
import HeartHealth from "../HeartHealth";
import { Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

const Snack = ({ snack }) => {

  const { name, image, is_healthy } = snack;
  return (
    <div 
    >
      <div>
        <img src={image} alt={snack.name} />
        <h5><HeartHealth snackHealth={is_healthy} /> {name}</h5>
      </div>
       <Link to={`/snacks/${snack.id}`}>
         🏝 
       </Link> 
    </div>
  );
};

export default Snack;
