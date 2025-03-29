import { re_render } from "./DOM";
export class task {
  constructor(taskID, taskName, taskPriority, taskDuedate, projectID) {
    this.taskID = taskID;
    this.projectID = projectID;
    this.taskName = taskName;
    this.taskPriority = taskPriority;
    this.taskDuedate = taskDuedate;
    this.taskDetail = "";
  }
  static createTask(
    taskid,
    taskName,
    taskPriority,
    taskDuedate,
    taskDetail,
    projectID,
  ) {
    const newTask = new task(
      taskid,
      taskName,
      taskPriority,
      taskDuedate,
      taskDetail,
      projectID,
    );
    return newTask;
  }
  updateTask(
    newTaskId,
    newTaskName,
    newTaskPriority,
    newTaskDuedate,
    newTaskDetail,
    newProjectid,
  ) {
    this.taskID = newTaskId;
    this.taskName = newTaskName;
    this.taskPriority = newTaskPriority;
    this.newTaskDuedate = newTaskDuedate;
    this.taskDetail = newTaskDetail;
    this.projectID = newProjectid;
  }
  deleteTask(taskID, projectID, projectList) {
    const project = projectList.findEach(
      (project) => (project.projectId = projectID),
    );
    const index = project.taskList.findIndex((task) => task.taskid === taskID);
    project.taskList.splice(index, 1);
  }
  displayTask() {
    console.log(`task's ID: ${this.taskID}`);
    console.log(`task's name: ${this.taskName}`);
    console.log(`task's priority: ${this.taskPriority}`);
    console.log(`task's duedate: ${this.taskDuedate}`);
    console.log(`task's detail: ${this.taskDetail}`);
  }
}

const task1 = new task(1, "backbf", "high", "2024-05-05", 1);
task1.displayTask();

export function changeTaskStateLogic(taskList, i, boolValue) {
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const task = taskList[i];
  console.log("day la task: " + task.taskState);
  projects.forEach((project, index) => {
    if (Number(task.projectID) === index) {
      if (boolValue) {
        project.taskList[task.taskID].taskState = "completed";
      } else {
        project.taskList[task.taskID].taskState = "not complete";
      }
      localStorage.setItem("projects", JSON.stringify(projects));
      re_render(index);
    }
  });
}
