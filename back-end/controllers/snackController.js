const express = require("express");
// const { confirmHealth, formatSnackName } = require("./confirmHealth");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  deleteSnack,
  createSnack,
} = require("../queries/snacks.js");

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
  console.log("deleted");
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
  if (Object.values(request.body)) {
    const snack = await editSnack(id, request.body);
    response.status(200).json(snack);
    return;
  }
  response.status(500).json({ error: "server error" });
});

snacks.post("/", async (req, res) => {
  const { name, fiber, protein, added_sugar, is_healthy, image } = req.body;
  name
    ? res.status(200).send(await createSnack(req.body))
    : res.status(404).json({ error: "Must include name field" });
  // name ?  res.status(200).send({success: true, payload: await createSnack(req.body)}) : res.status(404).json({success: false, payload: { error: "Must include name field" }})

  // const createdSnack = name ? await createSnack(req.body) : res.status(404).json({ error: "Must include name field" })
  // createdSnack ? res.send(createdSnack) : res.status(404).json({ error: undefined })
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
