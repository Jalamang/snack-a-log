import React from "react";
import HeartHealth from "../HeartHealth";
import { Link } from "react-router-dom";
import "./Snack.css";

const Snack = ({ snack }) => {
  const { name, image, fiber, is_healthy, id } = snack;
  const alt = snack.is_healthy ? "healthy food" : "unhealthy food";
  return (
    <article className="Snack">
      <Link to={"/snacks/" + id}>
            <img src={image} alt={alt} />
        <div>
          <h4>
            <HeartHealth snackHealth={is_healthy} /> {name}
          </h4>
        </div>
      </Link>
    </article>
  );
};

export default Snack;
