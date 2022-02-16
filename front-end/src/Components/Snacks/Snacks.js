import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "../Snack/Snack";

const URL = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snackData = await axios.get(URL + "/snacks");
      setSnacks(snackData.data.payload);
    };
    fetchData();
  }, []);

  const allSnacks = snacks.map(snack => (
    <Snack key={snack.id} snack={snack} />
  ));
  return <section className="Snacks">{allSnacks}</section>;
};

export default Snacks;
