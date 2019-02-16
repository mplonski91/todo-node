const chalk = require("chalk");
const { fetchList, saveData } = require("./functions");
const connectServer = require("./connectServer");
const log = console.log;

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
    connectServer.postData(list);
    log(chalk.green("Zadanie dodane"));
  } else {
    log(chalk.red("Takie zadanie jest juz dodane"));
  }
};
