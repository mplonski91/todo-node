const _ = require("lodash");
const yargs = require("yargs");
const addTasks = require("./addTasks");
const removeTask = require("./removeTask");
const showElements = require("./showElements");

const argv = yargs.argv;
const commandLine = argv._[0];

if (commandLine == "addTask") {
  addTasks.addSingleTask(argv.title);
} else if (commandLine == "removeTask") {
  removeTask.removeSingleTask(argv.title);
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
  allElements.forEach((element, index) => {
    console.log(`Numer zadania: ${index}`);
    console.log(`Nazwa zadania: ${element.title}`);
    console.log(`Status zadania: ${element.status}`);
    console.log("=============================");
  });
}
