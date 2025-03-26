export const projects = [
  {
    id: 0,
    name: "learn Web development",
    taskList: [],
  },
  {
    id: 1,
    name: "building javascript projects",
    taskList: [
      {
        taskID: 1,
        taskName: "practice setting up evironment",
        taskPriority: "High",
        taskDuedate: "2022-04-16",
        taskDetail: "this is the detail content",
        projectID: 2,
      },
      {
        taskID: 2,
        taskName: "practice setting up Bundlers & organize file & folder",
        taskPriority: "High",
        taskDuedate: "2025-03-27",
        taskDetail:
          "this is the detail content,i want to add more to check the function work properly",
        projectID: 2,
      },
    ],
  },
];
// const Projects = localStorage.setItem("projects", JSON.stringify(projects));
