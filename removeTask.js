const { fetchList, saveData } = require("./functions");

module.exports.removeSingleTask = title => {
  let list = fetchList();
  const checkList = list.filter(task => task.title !== title);
  saveData(checkList);
};
