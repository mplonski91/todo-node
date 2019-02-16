const { fetchList, saveData } = require("./functions");
const connectServer = require("./connectServer");

module.exports.removeSingleTask = (title, id = 0) => {
  let list = fetchList();
  const checkList = list.filter(task => task.title !== title);
  saveData(checkList);
  connectServer.postData(checkList);
};
