const { fetchList, saveData } = require("./functions");

module.exports.changeStatusTask = (title, statusTask) => {
  const list = fetchList();
  const result = list.filter(task => task.title === title);

  switch (statusTask) {
    case 0:
      result[0].status = "aktywne";
      break;
    case 1:
      result[0].status = "kompletne";
      break;
    default:
      break;
  }

  saveData(list);

  return result[0];
};
