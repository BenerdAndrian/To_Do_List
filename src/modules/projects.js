export class project {
  constructor(projectId, projectName) {
    this.projectId = projectId;
    this.projectName = projectName;
    this.tasklist = [];
  }
  static createProject(id, name, tasklist) {
    const newProject = new project(id, name, tasklist);
    return newProject;
  }
  updateProject(newId, newName) {
    this.projectId = newId;
    this.projectName = newName;
  }
  displayProject() {
    console.log(`project's name: ${this.projectName}`);
    console.log(`project's ID: ${this.projectId}`);
    console.log(`project's tasklist: ${this.tasklist}`);
  }
  deleteProject(project_id, projectList) {
    const index = projectList.findIndex(
      (project) => project.projectId === project_id,
    );
    if (index) {
      projectList.splice(index, 1);
    }
  }
  addTaskIntoList(task) {
    this.tasklist.push(task);
  }
}
const project1 = new project(1, "bake a cake");
project1.displayProject();
