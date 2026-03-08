//15-task-object

const toDoList = {
  tasks: [],

  addTask: function (title, id, priority) {
    this.tasks.push({ title, id, priority });
  },

  deleteTask: function (id) {
    const ix = this.tasks.findIndex((elem) => elem.id === id);
    this.tasks.splice(ix, 1);
  },

  updateInfo: function (param, value, id) {
    const ix = this.tasks.findIndex((elem) => elem.id === id);
    if (param == "title") {
      this.tasks[ix].title = value;
    } else if (param == "priority") {
      this.tasks[ix].priority = value;
    }
  },

  sortByPriority: function () {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

toDoList.addTask("Помыть посуду", 1, 1);
toDoList.addTask("Приготовить ужин", 2, 2);
toDoList.addTask("Помыть полы", 3, 3);
console.log(toDoList.tasks);
toDoList.updateInfo("priority", 10, 2);
console.log(toDoList.tasks);
toDoList.addTask("Забрать мащину", 4, 5);
toDoList.deleteTask(4);
console.log(toDoList.sortByPriority());
