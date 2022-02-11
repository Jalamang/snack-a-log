const db = require("../db/dbConfig.js");

const getAllSnacks = async () => {
  try {
    const AllSnacks = await db.any("SELECT * FROM snacks");
    console.log(AllSnacks);
    return AllSnacks;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllSnacks };
