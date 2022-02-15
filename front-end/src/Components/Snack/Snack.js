import React from "react";
import HeartHealth from "../HeartHealth";
import { Link } from "react-router-dom";

const Snack = ({ snack }) => {
  const { name, image, is_healthy, id} = snack;
  return (
    <div>
      <Link to={"/snacks/" + id}>
        <div>
          <img src={image} alt={snack.name} />
          <h5>
            <HeartHealth snackHealth={is_healthy} /> {name}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Snack;
