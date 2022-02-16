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

  const URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const snackData = await axios.get(URL + "/snacks/" + id);
      console.log(snackData.data.payload);
      setSnack(snackData.data.payload);
    };
    fetchData();
  }, []);

  // const handleDelete = () => {
  //   const deleteSnack = async () => {
  //     await axios.delete(URL + "/snacks/" + id);
  //   };
  //   deleteSnack();
  //   navigate("/snacks/");
  // };

  const handleDelete = async () => {
    await axios.delete(URL + "/snacks/" + id);
    navigate("/snacks");
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
          <h6>Added Sugar: {added_sugar}</h6>
        </div>
        <div className="showNavigation">
          <div>
          <a href="/snacks"> <button>
         Back
         </button></a>
          {/* onClick={() => navigate(`/snacks`)} */}
         
          </div>
          <div>
            <button onClick={() => navigate("/snacks/" + id + "/edit")}>
              {" "}
              Edit{" "}
            </button>
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
