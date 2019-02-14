const fs = require("fs");

const fetchList = () => {
  const list = fs.readFileSync("data.json");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const saveData = list => {
  fs.writeFileSync("data.json", JSON.stringify(list));
};

module.exports = {
  fetchList,
  saveData
};
