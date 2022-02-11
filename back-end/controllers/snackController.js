const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, deleteSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  const AllSnacks = await getAllSnacks();
  console.log(AllSnacks);
  AllSnacks ? res.status(200).send(AllSnacks) : res.status(404).json({ error: "no Snacks found" });
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  console.log(Snack);
  snack ? res.status(200).send(snack) : res.status(404).json({ error: "no Snack found" });
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  console.log(OneSnacks);
  deletedSnack ? res.status(200).send(deletedSnack) : res.status(404).json({ error: "no Snack found" });
});

snacks.post("/:id", async (req, res) => {
  const createdSnack = await createSnack(res.body);
  console.log(createdSnack);
  createdSnack ? res.status(200).send(createdSnack) : res.status(404).json({ error: "no Snack found" });
});

module.exports = snacks;
