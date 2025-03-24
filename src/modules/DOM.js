import Inbox from "../asset/images/Inbox.svg";
import ThisWeek from "../asset/images/This Week.svg";
import Today from "../asset/images/Today.svg";
import Complete from "../asset/images/Complete.svg";
import Tomorrow from "../asset/images/Tomorrow.svg";
import Upcoming from "../asset/images/Upcoming.svg";
import threeDots from "../asset/images/3dots.svg";
import addIcon from "../asset/images/addIcon.svg";
import closeIcon from "../asset/images/closeIcon.svg";
import { addProjectToProjectList } from "./projects.js";

export const render = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";
  const DOM = DOM_generate();
  const event = Event_handle();
  DOM.headerDOMGenerate();
  DOM.mainDOMGenerate();
  DOM.footerDOMGenerate();
  DOM.mainSidebarDOMGenerate();
  DOM.renderMainContent();
  event.addDataIndexIntoProjects();
  event.displayProject();
  event.addIconProjectClick();
  event.printProjects();
};
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
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    const div = document.createElement("div");
    const divHead = document.createElement("div");
    divHead.setAttribute("class", "container");
    div.setAttribute("class", "projects");
    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    divHead.appendChild(h2);
    const icon = document.createElement("img");
    icon.src = addIcon;
    icon.setAttribute("class", "addIconProject");
    divHead.appendChild(icon);
    div.appendChild(divHead);
    const ul = document.createElement("ul");
    projects.forEach((project) => {
      const image = document.createElement("img");
      image.src = threeDots;
      image.setAttribute("class", "threeDotIcon");
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
    div.setAttribute("class", "mainContent");
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
    const projectList = document.querySelectorAll(".projects h3");
    projectList.forEach((h3) => {
      h3.addEventListener("click", () => {
        // renderMainContent();
        const mainContent = document.querySelector(".mainContent");
        mainContent.innerHTML = ``;
        const index = h3.dataset.index;
        console.log(index);
        renderProject(index);
      });
    });
  }
  function addDataIndexIntoProjects() {
    const projectList = document.querySelectorAll(".projects h3");
    projectList.forEach((li, index) => {
      li.setAttribute("data-index", index);
      console.log(index);
    });
  }
  function renderProject(projectID) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const project = projects.find(
      (theProject) => theProject.id === Number(projectID),
    );
    console.log(project);

    const mainContent = document.querySelector(".mainContent");
    const taskListDOM = document.createElement("ul");
    taskListDOM.setAttribute("class", "taskList");
    mainContent.appendChild(taskListDOM);
    const h2 = document.createElement("h2");
    const name = project.name;
    h2.textContent = name;
    mainContent.insertBefore(h2, taskListDOM);
    if (project) {
      const taskList = project.taskList;
      console.log(taskList);
      if (taskList.length > 0) {
        console.log(taskList);
        renderTask(taskList);
      }
    }
  }
  function renderTask(taskList) {
    const taskListDOM = document.querySelector(".taskList");
    const mainContent = document.querySelector(".mainContent");
    mainContent.appendChild(taskListDOM);
    taskList.forEach((task) => {
      const li = document.createElement("li");
      li.setAttribute("class", "task");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.textContent = task.taskName;
      p2.textContent = task.taskPriority;
      p3.textContent = task.taskDuedate;
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      taskListDOM.appendChild(li);
    });
  }
  function addIconProjectClick() {
    const addIconProject = document.querySelector(".addIconProject");
    addIconProject.addEventListener("click", () => {
      addBlurLayer();
      displayProjectInfoAddBoard();
      submitProjectBoardBtnClick();
      closeProjectBoardBtnClick();
    });
  }
  function displayProjectInfoAddBoard() {
    const closeBtn = document.createElement("img");
    closeBtn.src = closeIcon;
    closeBtn.alt = "close icon";
    closeBtn.setAttribute("class", "closeBtn");
    const body = document.querySelector("body");
    const form = document.createElement("form");
    form.setAttribute("class", "projectAddBoard");
    const label = document.createElement("label");
    label.setAttribute("for", "projectName");
    label.innerText = `Project's Name: `;
    const input = document.createElement("input");
    input.setAttribute("id", "projectName");
    input.setAttribute("type", "text");
    input.required = true;
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "projectSubmitBtn");
    submitBtn.setAttribute("value", "submit");
    submitBtn.textContent = "Submit";
    form.appendChild(closeBtn);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submitBtn);
    body.appendChild(form);
  }
  function addBlurLayer() {
    const div = document.createElement("div");
    div.setAttribute("class", "blurLayer");
    const body = document.querySelector("body");
    body.appendChild(div);
  }
  function closeProjectBoardBtnClick() {
    const closeBtn = document.querySelector(".closeBtn");
    console.log("i");
    if (closeBtn) {
      console.log(true);
      closeBtn.addEventListener("click", () => {
        removeProjectBoard();
      });
    }
  }
  function removeProjectBoard() {
    const projectAddBoard = document.querySelector(".projectAddBoard");
    projectAddBoard.remove();
    const blurLayer = document.querySelector(".blurLayer");
    blurLayer.remove();
  }
  function submitProjectBoardBtnClick() {
    const submitBtn = document.querySelector(".projectSubmitBtn");
    const input = document.querySelector("#projectName");
    submitBtn.addEventListener("click", () => {
      const form = document.querySelector(".projectAddBoard");
      input.setCustomValidity("");
      if (form.checkValidity()) {
        console.log(input.value);
        const inputValue = input.value;
        addProjectToProjectList(inputValue);
        removeProjectBoard();
        render();
      } else {
        input.setCustomValidity("this box can not be blank.");
      }
    });
  }
  function threeDotIconClick() {
    const threeDotIcon = document.querySelectorAll(".threeDotIcon");
    threeDotIcon.forEach((threeDot) => {
      threeDot.addEventListener("click", () => {
        const prevSibling = threeDot.previousElementSibling;
        const index = Number(prevSibling.dataset.index);
        removeCurrentProjectOptionBox();
        displayProjectOptionBox(index);
      });
    });
  }
  function displayProjectOptionBox(index) {
    const projectList = document.querySelectorAll(".projects li");
    projectList.forEach((li) => {
      const firstChild = li.firstElementChild;
      const i = Number(firstChild.dataset.index);
      if (i === index) {
        console.log("fn");
        const ul = document.createElement("ul");
        ul.setAttribute("class", "projectOptionBox");
        const optionList1 = document.createElement("li");
        const optionList2 = document.createElement("li");
        const updateBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        deleteBtn.textContent = "Delete";
        updateBtn.setAttribute("class", "projectUpdateBtn");
        deleteBtn.setAttribute("class", "projectDeleteBtn");
        optionList1.appendChild(updateBtn);
        optionList2.appendChild(deleteBtn);
        ul.appendChild(optionList1);
        ul.appendChild(optionList2);
        li.appendChild(ul);
        console.log(li);
        console.log("fen");
      }
    });
  }
  function removeCurrentProjectOptionBox() {
    const projectOptionBox = document.querySelectorAll(".projectOptionBox");
    if (projectOptionBox) {
      projectOptionBox.forEach((box) => {
        box.remove();
      });
    }
  }

  function printProjects() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
  }
  return {
    addDataIndexIntoProjects,
    displayProject,
    displayCategory,
    addIconProjectClick,
    printProjects,
    threeDotIconClick,
  };
};
const dom = DOM_generate();
console.log(dom.find(2));
