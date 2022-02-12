const express = require("express");
const snacks = express.Router();
const { getAllSnacks, getSnack, deleteSnack, createSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  const AllSnacks = await getAllSnacks();

  AllSnacks ? res.status(200).send(AllSnacks) : res.status(404).json({ error: "no Snacks found" });
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  
  snack ? res.status(200).send(snack) : res.status(404).json({ error: "not found" });
});

snacks.delete("/:id", async (req, res) => {
    console.log('deleted')
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
 
  deletedSnack ? res.status(200).send(deletedSnack) : res.status(404).json({ error: undefined });
});

snacks.post("/", async (req, res) => {
    const {name, fiber, protein, added_sugar, is_healthy, image } = req.body
    name ?  res.status(200).send(await createSnack(req.body)) : res.status(404).json({ error: "Must include name field" })

    // const createdSnack = name ? await createSnack(req.body) : res.status(404).json({ error: "Must include name field" })
    // createdSnack ? res.send(createdSnack) : res.status(404).json({ error: undefined })
});

module.exports = snacks;
