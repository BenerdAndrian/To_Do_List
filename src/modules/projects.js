class project {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.tasklist = [];
  }
  static createProject(id, name, tasklist) {
    const newProject = new project(id, name, tasklist);
    return newProject;
  }
  updateProject(newId, newName) {
    this.id = newId;
    this.name = newName;
  }
  displayProject() {
    console.log(`project's name: ${this.name}`);
    console.log(`project's ID: ${this.id}`);
    console.log(`project's tasklist: ${this.tasklist}`);
  }
  deleteProject(project_id, projectList) {
    const index = projectList.findIndex((project) => project.id === project_id);
    if (index) {
      projectList.splice(index, 1);
    }
  }
  addTaskIntoList(task) {
    this.tasklist.push(task);
  }
}
function addProjectToProjectList(name) {
  let projects = JSON.parse(localStorage.getItem("projects"));
  console.log(projects);
  console.log(projects);
  const newProjectID = projects.length - 1;
  const newProject = new project(newProjectID, name);
  projects.push(newProject);
  processProjectID();
  localStorage.setItem("projects", JSON.stringify(projects));
}
function processProjectID() {
  let projects = JSON.parse(localStorage.getItem("projects"));
  projects.forEach((theProject, index) => {
    console.log(theProject.id);
    theProject.id = index;
  });
}
export { addProjectToProjectList, project };
const project1 = new project(1, "bake a cake");
project1.displayProject();
