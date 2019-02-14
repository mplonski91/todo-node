const { fetchList, saveData } = require("./functions");

module.exports.addSingleTask = title => {
  let list = fetchList();
  const task = {
    title,
    status: "aktywne"
  };

  const checkList = list.filter(task => task.title === title);

  if (checkList.length === 0) {
    list.push(task);
    saveData(list);
    console.log("Zadanie dodane");
  } else {
    console.log("Takie zadanie jest juz dodane");
  }
};
