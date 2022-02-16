import React from "react";
import HeartHealth from "../HeartHealth";
import { Link } from "react-router-dom";

const Snack = ({ snack }) => {
  const { name, image, is_healthy, id} = snack;
  const alt= snack.is_healthy ? 'healthy food' : 'unhealthy food';
  return (
    <article className="Snack">
      <Link to={"/snacks/" + id}>
        <div>
          <img src={image} alt={alt} />
          <h4>
            <HeartHealth snackHealth={is_healthy} /> {name}
          </h4>
          
        </div>
      </Link>
    </article>
  );
};

export default Snack;
