import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "../Snack/Snack";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snackData = await axios.get(API + "/snacks");
      setSnacks(snackData.data);
    };
    fetchData();
  }, []);
  console.log(snacks)
  const allSnacks = snacks.map(snack => (
    <Snack key={snack.id} snack={snack} />
  ));
  return <>{allSnacks}</>;
};

export default Snacks;
