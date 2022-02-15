function formatSnackName(name) {
  name = name.split(" ");
  for (word of name) {
    if (word.length > 2) {
      const formattedName = word[0].toUpperCase() + word.slice(1).toLowerCase();
      return formattedName.join();
    } else {
      return name.join();
    }
  }
}

const confirmHealth = (snack) => {
  if (protein >= 5 || fibre >= 5 && added_sugar < 5) {
    is_healthy = true;
  }

  if (isNaN(protein) || isNaN(fibre) || isNaN(added_sugar)) {
    is_healthy = null;
  }
  if (!protein || !fibre || !added_sugar) {
    is_healthy = null;
  }
};

module.exports = {confirmHealth, 
  formatSnackName
};
