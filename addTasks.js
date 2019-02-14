const { fetchList, saveData } = require("./functions");

module.exports.addSingleTask = (title, group) => {
  let list = fetchList();
  const task = {
    id: Math.random()
      .toString(36)
      .substr(2, 9),
    title,
    status: "aktywne",
    group
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
