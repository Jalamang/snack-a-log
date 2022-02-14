import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css";

function Edit() {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
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

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${id}`)
      .then((res) => {
        console.log(res.data);
        setSnack(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL, id]);

  const HandleChange = (event) => {
    setSnack({ ...snack, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${URL}/snacks/${id}`, snack)
      .then(() => navigate(`/`))
      .catch((error) => console.log("catch", error));
  };

  return (
    <div className="Edit">
      <p>EDIT SNACK</p>
      <form onSubmit={HandleSubmit}>
        <label className="label" htmlFor="name">
          snack
        </label>
        <br />
        <input type="text" value={snack.name} name="name" placeholder="name" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="fiber">
          fiber
        </label>
        <br />
        <input type="number" value={snack.fiber} name="fiber" placeholder="fiber" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="protein">
          protein
        </label>
        <br />
        <input type="number" value={snack.protein} name="protein" placeholder="protein" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="added_sugar">
          added_sugar
        </label>
        <br />
        <input
          type="number"
          value={snack.added_sugar}
          name="added_sugar"
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
          image
        </label>
        <br />
        <textarea type="url" value={snack.image} name="image" placeholder="image" onChange={HandleChange} />
        <br />
        <br />

        <button type="submit">EDIT SNACK</button>
      </form>
    </div>
  );
}

export default Edit;
