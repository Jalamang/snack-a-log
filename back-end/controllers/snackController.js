const express = require("express");
<<<<<<< HEAD
// const { confirmHealth, formatSnackName } = require("./confirmHealth");
=======
const confirmHealth = require("../confirmHealth.js");
>>>>>>> 3eeea86533152358a15cb900718486d4c8fc8472
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
} = require("../queries/snacks.js");

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
    : res.status(404).json({ success: false, payload: "not  found" });
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);

  snack.id
    ? res.status(200).send({ success: true, payload: snacks })
    : res.status(404).json({ success: false, payload: "not found" });
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);

  deletedSnack
    ? res.status(200).send(deletedSnack)
    : // ? res.status(200).send({success: true, payload: deletedSnack})
      res.status(404).json(undefined);
  // : res.status(404).json({success: false, payload: undefined });
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
  const { name, fiber, protein, added_sugar, is_healthy, image } = req.body;
  name
    ? res.status(200).send(await createSnack(req.body))
    : res.status(404).json({ error: "Must include name field" });
  // name ?  res.status(200).send({success: true, payload: await createSnack(req.body)}) : res.status(404).json({success: false, payload: { error: "Must include name field" }})

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

// snacks.post("/", async (req, res) => {
//   const createdSnack = await createSnack(req.body);
//   {!createdSnack.name && (res.status(422).send({ error: "Must include name field" }))};
//   {createdSnack.name && createdSnack.image && ( res.status(200).send(createdSnack))};
//   if (createdSnack.name && createdSnack.image ===""){
//     createdSnack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
//     res.status(200).json(createdSnack);
//   }
// });

module.exports = snacks;
