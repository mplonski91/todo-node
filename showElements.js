const { fetchList } = require("./functions");

module.exports.showTask = title => {
  const list = fetchList();
  const result = list.filter(task => task.title === title);
  return result[0].title;
};

module.exports.allTasks = () => {
  return fetchList();
};

module.exports.filterTasks = statusTasks => {
  const list = fetchList();
  const result = list.filter(task => task.status === statusTasks);
  return result;
};

module.exports.showGroup = groups => {
  const list = fetchList();
  const result = list.filter(task => task.group === groups);
  return result;
};
