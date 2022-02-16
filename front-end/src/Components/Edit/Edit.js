import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";
import HeartHealth from "../HeartHealth";

function Edit() {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL, id]);

  const HandleChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${URL}/snacks/${id}`, snack)
      .then(() => navigate(`/snacks`))
      .catch((error) => console.log("catch", error));
  };
  const isItHealthy = snack.is_healthy ? (
    <p> this snack is healthy</p>
  ) : (
    <p>this snack is not healthy</p>
  );
  return (
    <div className="Edit">
      <p>EDIT SNACK</p>
      <div>
      {isItHealthy}
        <HeartHealth snackHealth={snack.is_healthy} />
      </div>
      <form onSubmit={HandleSubmit}>
        <label className="name" htmlFor="name" type="text">
          Name
        </label>
        <br />
        <input
          type="text"
          value={snack.name}
          id="name"
          placeholder="name"
          onChange={HandleChange}
          required
        />
        <br />
        <br />

        <label className="label" htmlFor="fiber">
          Fiber
        </label>
        <br />
        <input
          type="number"
          value={snack.fiber}
          id="fiber"
          placeholder="fiber"
          onChange={HandleChange}
          required
        />
        <br />
        <br />

        <label className="label" htmlFor="protein">
          Protein
        </label>
        <br />
        <input
          type="number"
          value={snack.protein}
          id="protein"
          placeholder="protein"
          onChange={HandleChange}
          required
        />
        <br />
        <br />

        <label className="label" htmlFor="added_sugar">
          Added Sugar
        </label>
        <br />
        <input
          type="number"
          value={snack.added_sugar}
          id="added_sugar"
          placeholder="added_sugar"
          onChange={HandleChange}
          required
        />
        <br />
        <br />

        <label className="label" htmlFor="image">
          Image
        </label>
        <br />
        <textarea
          type="text"
          value={snack.image}
          id="image"
          placeholder="image"
          onChange={HandleChange}
        />
        <br />
        <br />

        <button type="submit">EDIT SNACK</button>
      </form>
    </div>
  );
}

export default Edit;
