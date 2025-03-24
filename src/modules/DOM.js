import Inbox from "../asset/images/Inbox.svg";
import ThisWeek from "../asset/images/This Week.svg";
import Today from "../asset/images/Today.svg";
import Complete from "../asset/images/Complete.svg";
import Tomorrow from "../asset/images/Tomorrow.svg";
import Upcoming from "../asset/images/Upcoming.svg";
import threeDots from "../asset/images/3dots.svg";
import addIcon from "../asset/images/addIcon.svg";
const projects = JSON.parse(localStorage.getItem("projects"));
export const DOM_generate = () => {
  const body = document.querySelector("body");
  function headerDOMGenerate() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "To Do List";
    header.appendChild(h1);
    body.appendChild(header);
  }
  function mainDOMGenerate() {
    const main = document.createElement("main");
    body.appendChild(main);
  }
  function footerDOMGenerate() {
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "Created By Michael Ben";
    footer.appendChild(p);
    body.appendChild(footer);
  }
  function mainSidebarDOMGenerate() {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.setAttribute("class", "sidebar");
    renderCategories(div);
    renderProjects(div);
    main.appendChild(div);
  }
  function renderProjects(parentElement) {
    const div = document.createElement("div");
    const divHead = document.createElement("div");
    divHead.setAttribute("class", "container");

    div.setAttribute("class", "projects");
    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    divHead.appendChild(h2);
    const icon = document.createElement("img");
    icon.src = addIcon;
    divHead.appendChild(icon);
    div.appendChild(divHead);
    const ul = document.createElement("ul");
    projects.forEach((project) => {
      const image = document.createElement("img");
      image.src = threeDots;
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      h3.textContent = `${project.name}`;
      li.appendChild(h3);
      li.appendChild(image);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    parentElement.appendChild(div);
  }
  function renderCategories(parentElement) {
    const div = document.createElement("div");
    div.setAttribute("class", "category");
    const h2 = document.createElement("h2");
    h2.textContent = "Categories";
    const categories = [
      "Inbox",
      "Today",
      "Tomorrow",
      "This Week",
      "Upcoming",
      "Complete",
    ];
    const ul = document.createElement("ul");
    categories.forEach((category) => {
      const h3 = document.createElement("h3");
      const li = document.createElement("li");
      const image = document.createElement("img");
      const url = displayIcon(category);
      image.src = url;
      image.alt = `${category} icon image.`;
      h3.textContent = category;
      li.appendChild(image);
      li.appendChild(h3);
      ul.appendChild(li);
    });
    div.appendChild(h2);
    div.appendChild(ul);
    parentElement.appendChild(div);
  }
  function displayIcon(iconName) {
    let URL;
    switch (iconName) {
      case "Inbox":
        URL = Inbox;
        break;
      case "Today":
        URL = Today;
        break;
      case "Tomorrow":
        URL = Tomorrow;
        break;
      case "This Week":
        URL = ThisWeek;
        break;
      case "Complete":
        URL = Complete;
        break;
      case "Upcoming":
        URL = Upcoming;
        break;
    }
    return URL;
  }

  function renderMainContent() {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    ul.setAttribute("class", "taskList");
    div.setAttribute("class", "mainContent");
    div.appendChild(ul);
    main.appendChild(div);
  }

  function find(num) {
    return num * 2;
  }
  return {
    headerDOMGenerate,
    mainDOMGenerate,
    footerDOMGenerate,
    mainSidebarDOMGenerate,
    renderMainContent,
    find,
  };
};
export const Event_handle = () => {
  function displayCategory() {
    const categoryList = document.querySelectorAll(`.category li`);
    categoryList.forEach((li) => {
      li.addEventListener("click", () => {
        // renderMainContent();
        console.log(li.innerText);
      });
    });
  }
  function displayProject() {
    const projectList = document.querySelectorAll(".projects li");
    projectList.forEach((li) => {
      li.addEventListener("click", () => {
        // renderMainContent();
        const index = li.dataset.index;
        console.log(index);
        renderProject(index);
      });
    });
  }
  function addDataIndexIntoProjects() {
    const projectList = document.querySelectorAll(".projects li");
    projectList.forEach((li, index) => {
      li.setAttribute("data-index", index);
      console.log(index);
    });
  }
  function renderProject(projectID) {
    const project = projects.find((theProject) => (theProject.id = projectID));
    const name = project.name;
    const h2 = document.createElement("h2");
    h2.innerText = name;
    const mainContent = document.querySelector(".mainContent");
    mainContent.innerHTML = ``;
    const taskListDOM = document.querySelector(".taskList");
    mainContent.insertBefore(h2, taskListDOM);
    if (project) {
      const taskList = project.taskList;
      if (taskList.length > 0) {
        renderTask(taskList);
      }
    }
  }
  function renderTask(taskList) {
    const taskListDOM = document.querySelector(".taskList");
    taskList.forEach((task) => {
      const li = document.createElement("li");
      li.setAttribute("class", "task");
      task.length.forEach((property) => {
        const p = document.createElement("p");
        p.innerText = property.value;
        li.appendChild(p);
      });
      taskListDOM.appendChild(li);
    });
  }
  return {
    addDataIndexIntoProjects,
    displayProject,
    displayCategory,
  };
};
const dom = DOM_generate();
console.log(dom.find(2));
