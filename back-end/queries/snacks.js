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

const deleteSnack = async () =>{
  try {


  } catch (error){

  }
}
const getSnack = async () =>{
  try {


  } catch (error){

  }
}
const createSnack = async () =>{
  try {


  } catch (error){

  }
}



module.exports = { 
getAllSnacks,
getSnack,
deleteSnack,
createSnack,


};
