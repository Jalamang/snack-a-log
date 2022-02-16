const express = require("express");
const confirmHealth = require("../confirmHealth.js");
const snacks = express.Router();
const { getAllSnacks, getSnack, deleteSnack, editSnack, createSnack } = require("../queries/snacks.js");

function formatSnackName(str) {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i].length > 2 && (arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return arr.join(" ");
}

snacks.get("/", async (req, res) => {
  const AllSnacks = await getAllSnacks();

  AllSnacks
    ? res.status(200).send({ success: true, payload: AllSnacks })
    : res.status(404).json({ success: false, payload: "not found" });
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);

  snack.id
    ? res.status(200).send({ success: true, payload: snack })
    : res.status(404).json({ success: false, payload: "not found" });
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);

  deletedSnack.id
    ? res.status(200).send({ success: true, payload: deletedSnack })
    : res.status(404).json({ success: false, payload: "not found" });
});

snacks.put("/:id", async (request, response) => {
  const { id } = request.params;
  let obj = request.body;
  if (obj.name) {
    obj.name = formatSnackName(obj.name);
    obj.is_healthy = confirmHealth(obj);
    obj.name && !obj.image && (obj.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image");
    const snack = await editSnack(id, obj);
    response.status(200).json(snack);
    return;
  }
  response.status(422).send({ error: "Must include name field" });
});

snacks.post("/", async (req, res) => {
  let obj = req.body;

  obj.name = formatSnackName(obj.name);
  obj.is_healthy = confirmHealth(obj);
  obj.name && !obj.image && (obj.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image");
  const newSnack = await createSnack(obj);
  !newSnack.name && res.status(422).send({ error: "Must include name field" });

  if (newSnack.name && newSnack.image) {
    res.status(200).send({ success: true, payload: newSnack });
  } else if (newSnack.name && !newSnack.image) {
    res.status(200).send({ success: true, payload: obj });
  }
});

module.exports = snacks;