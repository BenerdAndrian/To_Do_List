class project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.taskList = [];
  }
  static createProject(id, name, taskList) {
    const newProject = new project(id, name, taskList);
    return newProject;
  }
  updateProject(newId, newName) {
    this.id = newId;
    this.name = newName;
  }
  displayProject() {
    console.log(`project's name: ${this.name}`);
    console.log(`project's ID: ${this.id}`);
    console.log(`project's taskList: ${this.taskList}`);
  }
  deleteProject(project_id, projectList) {
    const index = projectList.findIndex((project) => project.id === project_id);
    if (index) {
      projectList.splice(index, 1);
    }
  }
  addTaskIntoList(task) {
    this.taskList.push(task);
  }
}
function addProjectToProjectList(name) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(projects);
  console.log(projects);
  const newProjectID = projects.length;
  const newProject = new project(newProjectID, name);
  projects.push(newProject);
  processProjectID();
  localStorage.setItem("projects", JSON.stringify(projects));
}
function processProjectID() {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach((theProject, index) => {
    theProject.id = index;
  });
  localStorage.setItem("projects", JSON.stringify(projects));
}
function processTaskID(projectID) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.forEach((one) => {
    if (one.id === projectID) {
      one.taskList.forEach((task, index) => {
        task.taskID = index;
      });
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  });
}
export { addProjectToProjectList, project, processProjectID, processTaskID };
const project1 = new project(1, "bake a cake");
project1.displayProject();
