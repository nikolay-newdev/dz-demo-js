const toDoList = {
  tasks: [],

  addTask: function (id, name, description, order) {
    this.tasks.push({ id, name, description, order });
  },

  deleteTask: function (id) {
    const ix = this.tasks.findIndex((elem) => elem.id === id);
    this.tasks.splice(ix, 1);
  },

  updateInfo: function (param, value, id) {
    const ix = this.tasks.findIndex((elem) => elem.id === id);
    if (param == "name") {
      this.tasks[ix].name = value;
    } else if (param == "order") {
      this.tasks[ix].order = value;
    } else if (param == "description") {
      this.tasks[ix].description = value;
    }
  },

  sortByPriority: function () {
    return this.tasks.sort((a, b) => b.order - a.order);
  },
};

const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

addTask = toDoList.addTask;
addTask.call(newTask, 2, "test2", "descr2", 1);
addTask.call(newTask, 3, "test3", "descr3", 2);
addTask.call(newTask, 4, "test4", "descr4", 3);
//console.log(newTask);

deleteTask = toDoList.deleteTask;
deleteTask.call(newTask, 3);
//console.log(newTask);

updateInfo = toDoList.updateInfo;
updateInfo.call(newTask, "description", "newDescr", 1);
//console.log(newTask);

sortByPriority = toDoList.sortByPriority;
sortByPriority.call(newTask);
console.log(newTask);
