const _ = require("lodash");
const yargs = require("yargs");
const addTasks = require("./addTasks");
const removeTask = require("./removeTask");
const showElements = require("./showElements");
const changeStatus = require("./changeStatus");

const argv = yargs.argv;
const commandLine = argv._[0];

if (commandLine == "addTask") {
  addTasks.addSingleTask(argv.title, argv.group);
} else if (commandLine == "removeTask") {
  removeTask.removeSingleTask(argv.title, argv.id);
  if (removeTask) {
    console.log(`Zadanie: "${argv.title}" zostało usunięte`);
  } else {
    console.log(`Zadanie: "${argv.title}" nie zostało znaleznione`);
  }
} else if (commandLine === "showTask") {
  const task = showElements.showTask(argv.title);
  if (task) {
    console.log(`Zadanie "${task}" zostało znalezione`);
  } else {
    console.log("Zadanie nie zostało znaleznione");
  }
} else if (commandLine === "showAll") {
  const allElements = showElements.allTasks();
  allElements.forEach(element => {
    console.log(`Nazwa zadania: ${element.title}`);
    console.log(`Status zadania: ${element.status}`);
    console.log("=============================");
  });
} else if (commandLine === "changeStatus") {
  const task = changeStatus.changeStatusTask(argv.title, argv.status);
  if (task) {
    console.log(
      `Status zadania "${task.title}" został zmieniony na "${task.status}" `
    );
  } else {
    console.log("Błąd podczas wpisywania komendy");
  }
} else if (commandLine === "filterTasks") {
  const filterdTasks = showElements.filterTasks(argv.status);
  filterdTasks.forEach(element => {
    console.log(`Nazwa zadania: ${element.title}`);
    console.log(`Status zadania: ${element.status}`);
    console.log("=============================");
  });
} else if (commandLine === "groupsTasks") {
  const group = showElements.showGroup(argv.group);
  group.forEach(element => {
    console.log(`Nazwa zadania: ${element.title}`);
    console.log(`Status zadania: ${element.status}`);
    console.log(`Status zadania: ${element.group}`);
    console.log("=============================");
  });
}
