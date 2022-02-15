import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./New.css";

function New() {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [snack, setSnack] = useState([
    {
      name: "",
      fiber: "",
      protein: "",
      added_sugar: "",
      is_healthy: false,
      image: "",
    },
  ]);

  const HandleChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${URL}/snacks`, snack)
      .then(() => navigate(`/snacks`))
      .catch((error) => console.log("catch", error));
  };

  return (
    <div className="New">
      <p>New Snacks</p>
      <form onSubmit={HandleSubmit}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <br />
        <input type="text" value={snack.name} id="name" placeholder="name" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="fiber">
          Fiber
        </label>
        <br />
        <input type="number" value={snack.fiber} id="fiber" placeholder="fiber" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="protein">
          Protein
        </label>
        <br />
        <input type="number" value={snack.protein} id="protein" placeholder="protein" onChange={HandleChange} />
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
        />
        <br />
        <br />

        <label htmlFor="is_healthy">healthy</label>
        <input id="is_healthy" type="checkbox" onChange={handleCheckboxChange} checked={snack.is_healthy} />
        <br />
        <br />
        <label className="label" htmlFor="image">
          Image
        </label>
        <br />
        <textarea type="text" value={snack.image} id="image" placeholder="image" onChange={HandleChange} />
        <br />
        <br />

        <button type="submit">CREATE SNACK</button>
      </form>
    </div>
  );
}

export default New;
