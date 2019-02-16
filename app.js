const _ = require("lodash");
const yargs = require("yargs");
const chalk = require("chalk");
const addTasks = require("./addTasks");
const removeTask = require("./removeTask");
const showElements = require("./showElements");
const changeStatus = require("./changeStatus");
const connectServer = require("./connectServer");
const { fetchList } = require("./functions");
const log = console.log;

const argv = yargs.argv;
const commandLine = argv._[0];

if (commandLine == "addTask") {
  addTasks.addSingleTask(argv.title, argv.group);
} else if (commandLine == "removeTask") {
  removeTask.removeSingleTask(argv.title, argv.id);
  if (removeTask) {
    log(chalk.green(`Zadanie: "${argv.title}" zostało usunięte`));
  } else {
    log(chalk.red(`Zadanie: "${argv.title}" nie zostało znaleznione`));
  }
} else if (commandLine === "showTask") {
  const task = showElements.showTask(argv.title);
  if (task) {
    log(chalk.green(`Zadanie "${task}" zostało znalezione`));
  } else {
    log(chalk.red("Zadanie nie zostało znaleznione"));
  }
} else if (commandLine === "showAll") {
  const allElements = showElements.allTasks();
  allElements.forEach(element => {
    log(chalk`
    Nazwa zadania: {blue ${element.title}}
    Status zadania: {green ${element.status}}
    =============================
    `);
  });
} else if (commandLine === "changeStatus") {
  const task = changeStatus.changeStatusTask(argv.title, argv.status);
  if (task) {
    log(
      chalk.green(
        `Status zadania "${task.title}" został zmieniony na "${task.status}" `
      )
    );
  } else {
    log(chalk.log("Błąd podczas wpisywania komendy"));
  }
} else if (commandLine === "filterTasks") {
  const filterdTasks = showElements.filterTasks(argv.status);
  filterdTasks.forEach(element => {
    log(chalk`
    Nazwa zadania: {blue ${element.title}}
    Status zadania: {green ${element.status}}
    =============================
    `);
  });
} else if (commandLine === "groupsTasks") {
  const group = showElements.showGroup(argv.group);
  group.forEach(element => {
    log(chalk`
    Nazwa zadania: {blue ${element.title}}
    Status zadania: {green ${element.status}}
    Grupa zadania: {yellow ${element.group}}
    =============================
    `);
  });
} else if (commandLine === "download") {
  connectServer.getData();
}
