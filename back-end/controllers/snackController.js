const express = require("express");
const snacks = express.Router();
const { getAllSnacks } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  const AllSnacks = await getAllSnacks();
  console.log(AllSnacks);
  AllSnacks ? res.status(200).send(AllSnacks) : res.status(404).json({ error: "no Snacks found" });
});

module.exports = snacks;
