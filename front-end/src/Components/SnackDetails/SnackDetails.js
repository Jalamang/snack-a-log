import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import HeartHealth from "../HeartHealth";

const SnackDetails = () => {
  const [snack, setSnack] = useState({
    name: "",
    fibre: "",
    image: "",
    is_healthy: 0,
    protein: 0,
    added_sugar: 0,
  });

  const API = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const snackData = await axios.get(API + "/snacks/" + id);
      console.log(snackData.data.payload)
      setSnack(snackData.data.payload);
    };
    fetchData();
  }, []);

  const handleDelete = () => {
    const deletePost = async () => {
      await axios.delete(API + "/snacks/" + id);
    };
    deletePost();
    navigate("/snacks/");
  };
  const { name, fiber, image, is_healthy, protein, added_sugar } = snack;
  
  return (
    <>
      <article>
        Show
        <aside>
          <Link to="/snacks/new">New Snack</Link>
          <h4>the snack health</h4>
          <HeartHealth snackHealth={is_healthy} />
        </aside>
        <div>
          <h5>{name}</h5>
          <img src={image} alt={snack.name} />
          <h6>Fiber: {fiber}</h6>
          <h6>Protein: {protein}</h6>
        </div>
        <div className="showNavigation">
          <div>
            <button onClick={() => navigate("/snacks/")}>Back</button>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default SnackDetails;
