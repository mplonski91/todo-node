const { fetchList } = require("./functions");

module.exports.showTask = title => {
  const list = fetchList();
  const result = list.filter(task => task.title === title);
  return result[0].title;
};

module.exports.allTasks = () => {
  return fetchList();
};
