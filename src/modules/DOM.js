import Inbox from "../asset/images/Inbox.svg";
import ThisWeek from "../asset/images/This Week.svg";
import Today from "../asset/images/Today.svg";
import Complete from "../asset/images/Complete.svg";
import Tomorrow from "../asset/images/Tomorrow.svg";
import Upcoming from "../asset/images/Upcoming.svg";
import threeDots from "../asset/images/3dots.svg";
import addIcon from "../asset/images/addIcon.svg";
import closeIcon from "../asset/images/closeIcon.svg";
import gitLogo from "../asset/images/gitLogo.svg";
import addTaskIcon from "../asset/images/addTask.svg";
import { addProjectToProjectList, processProjectID } from "./projects.js";

export const render = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";
  const DOM = DOM_generate();
  const event = Event_handle();
  DOM.headerDOMGenerate();
  DOM.mainDOMGenerate();
  DOM.mainSidebarDOMGenerate();
  DOM.renderMainContent();
  DOM.footerDOMGenerate();
  event.addDataIndexIntoProjects();
  event.displayProject();
  event.addIconProjectClick();
  event.printProjects();
  event.clickOutsideOfProjectOptionBox();
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
    const a = document.createElement("a");
    a.href = "https://github.com/BenerdAndrian";
    const img = document.createElement("img");
    img.src = gitLogo;
    a.appendChild(img);
    footer.appendChild(p);
    footer.appendChild(a);
    body.appendChild(footer);
  }
  function mainSidebarDOMGenerate() {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.setAttribute("class", "projects");
    // renderCategories(div);
    renderProjects(div);
    main.appendChild(div);
  }
  function renderProjects(parentElement) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    const div = document.createElement("div");
    div.setAttribute("class", "projectCategory");
    const h2 = document.createElement("h2");
    h2.textContent = "Projects";
    div.appendChild(h2);
    const icon = document.createElement("img");
    icon.src = addIcon;
    icon.setAttribute("class", "addIconProject");
    div.appendChild(icon);
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
    parentElement.appendChild(div);
    parentElement.appendChild(ul);
  }
  function renderCategories(parentElement) {
    const div = document.createElement("div");
    div.setAttribute("class", "category");
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

  function renderMainPart() {
    const mainContent = document.querySelector(".mainContent");
    const mainPart = document.createElement("div");
    mainPart.setAttribute("class", "mainPart");
    mainContent.appendChild(mainPart);
  }
  function renderMainContent() {
    const main = document.querySelector("main");
    const div = document.createElement("div");
    div.setAttribute("class", "mainContent");
    main.appendChild(div);
    renderCategories(div);
    renderMainPart();
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
        const mainPart = document.querySelector(".mainPart");
        mainPart.innerHTML = ``;
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

    const mainPart = document.querySelector(".mainPart");
    const taskListDOM = document.createElement("ul");
    taskListDOM.setAttribute("class", "taskList");
    mainPart.appendChild(taskListDOM);
    const div = document.createElement("div");
    div.setAttribute("class", "taskHeader");
    const h2 = document.createElement("h2");
    const name = project.name;
    h2.textContent = name;
    div.appendChild(h2);
    const img = document.createElement("img");
    img.src = addTaskIcon;
    img.alt = "add Task Icon";
    img.setAttribute("class", "addTaskIcon");
    div.appendChild(img);
    mainPart.insertBefore(div, taskListDOM);
    if (project) {
      const taskList = project.taskList;
      console.log(taskList);
      if (taskList.length > 0) {
        console.log(taskList);
        renderTask(taskList);
      }
      addTaskIconClick(projectID);
    }
  }
  function renderTask(taskList) {
    const taskListDOM = document.querySelector(".taskList");
    const mainPart = document.querySelector(".mainPart");
    mainPart.appendChild(taskListDOM);
    taskList.forEach((task) => {
      const li = document.createElement("li");
      li.setAttribute("class", "task");
      const p = document.createElement("p");
      p.setAttribute("class", "priorityLevelUI");
      const color = displayPriorityColor(task.taskPriority);
      p.style.backgroundColor = `${color}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const img = document.createElement("img");
      img.src = threeDots;
      img.setAttribute("class", "threeDotIcon");
      const fixedLength = 40;
      const taskNameLength = task.taskName.length;
      const taskDetailLength = task.taskDetail.length;
      const taskName = display3DotsForRestOfText(
        task.taskName,
        taskNameLength,
        fixedLength,
      );
      const taskDetail = display3DotsForRestOfText(
        task.taskDetail,
        taskDetailLength,
        fixedLength,
      );
      p1.textContent = taskName;
      p2.textContent = task.taskPriority;
      p3.textContent = task.taskDuedate;
      p4.textContent = taskDetail;
      li.appendChild(p);
      li.appendChild(input);
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      li.appendChild(p4);
      li.appendChild(img);
      taskListDOM.appendChild(li);
    });
  }
  function displayPriorityColor(priority) {
    if (priority === "High") return "rgb(189, 20, 20)";
    else if (priority === "Medium") return "rgb(185, 159, 13)";
    else return "green";
  }
  function display3DotsForRestOfText(string, stringLength, fixedLength) {
    if (stringLength > fixedLength) {
      return string.substring(0, fixedLength) + "...";
    } else {
      return string;
    }
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
        threeDotIconClick();
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
  function clickOutsideOfProjectOptionBox() {
    document.body.addEventListener("click", (e) => {
      if (
        !(e.target.tagName === "IMG" && e.target.parentNode.tagName === "LI")
      ) {
        removeCurrentProjectOptionBox();
      }
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
    projectUpdateBtnClick(index);
    projectDeleteBtnClick(index);
  }
  function removeCurrentProjectOptionBox() {
    const projectOptionBox = document.querySelectorAll(".projectOptionBox");
    if (projectOptionBox) {
      projectOptionBox.forEach((box) => {
        box.remove();
      });
    }
  }
  function projectDeleteBtnClick(index) {
    const deleteBtn = document.querySelector(".projectDeleteBtn");
    const projects = JSON.parse(localStorage.getItem("projects"));
    deleteBtn.addEventListener("click", () => {
      projects.forEach((project, i) => {
        if (i === index) {
          projects.splice(i, 1);
          localStorage.setItem("projects", JSON.stringify(projects));
          processProjectID();
          render();
          threeDotIconClick();
        }
      });
    });
  }
  function projectUpdateBtnClick(index) {
    const updateBtn = document.querySelector(".projectUpdateBtn");
    updateBtn.addEventListener("click", () => {
      addBlurLayer();
      displayProjectInfoAddBoard();
      closeProjectBoardBtnClick();
      updateCurrentProject(index);
    });
  }
  function updateCurrentProject(index) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const updateBtn = document.querySelector(".projectSubmitBtn");

    updateBtn.addEventListener("click", () => {
      let newName;
      const input = document.querySelector("#projectName");
      if (input.value) {
        newName = input.value;
        console.log(newName);
        projects.forEach((project, i) => {
          console.log(project);
          if (index === i) {
            project.name = newName;
            console.log(project.name);
          }
          localStorage.setItem("projects", JSON.stringify(projects));
          render();
          threeDotIconClick();
        });
      } else {
        input.reportValidity();
      }
    });
    console.log(projects);
  }
  //add task
  function addTaskIconClick(projectID) {
    const addTaskIcon = document.querySelector(".addTaskIcon");
    addTaskIcon.addEventListener("click", () => {
      addBlurLayer();
      displayAddTaskBoard(projectID);
    });
  }
  function displayAddTaskBoard(projectID) {
    const div = document.createElement("div");
    div.setAttribute("class", "btnTaskBoard");
    const body = document.querySelector("body");
    const h2 = document.createElement("h2");
    h2.textContent = "Task Create";

    const form = document.createElement("form");
    form.setAttribute("class", "taskAddBoard");

    const nameLabel = document.createElement("label");
    const priorityLabel = document.createElement("label");
    const duedateLabel = document.createElement("label");
    const detailLabel = document.createElement("label");

    const nameInput = document.createElement("input");
    const priorityInput = document.createElement("select");

    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");
    option1.textContent = "High";
    option2.textContent = "Medium";
    option3.textContent = "Low";
    priorityInput.appendChild(option1);
    priorityInput.appendChild(option2);
    priorityInput.appendChild(option3);

    const duedateInput = document.createElement("input");
    const detailInput = document.createElement("textarea");
    detailInput.rows = 5;
    detailInput.cols = 30;
    detailInput.placeholder = "Describe Task Information Or Task's Notes...";

    nameInput.required = "";
    priorityInput.required = "";
    duedateInput.required = "";
    const closeButton = document.createElement("button");
    const addButton = document.createElement("button");
    closeButton.setAttribute("class", "taskAddBoardCloseBtn");
    addButton.setAttribute("class", "taskAddBoardBtn");

    addButton.textContent = "Add Task";
    closeButton.textContent = "Cancel";

    nameLabel.htmlFor = "taskNameInput";
    priorityLabel.htmlFor = "taskPriorityInput";
    duedateLabel.htmlFor = "taskDuedateInput";
    detailLabel.htmlFor = "taskDetailInput";

    nameLabel.textContent = `Task's Name: `;
    priorityLabel.textContent = `Task's Priority: `;
    duedateLabel.textContent = `Task's Duedate: `;
    detailLabel.textContent = `Task's Detail: `;

    nameInput.setAttribute("id", "taskNameInput");
    priorityInput.setAttribute("id", "taskPriorityInput");
    duedateInput.setAttribute("id", "taskDuedateInput");
    detailInput.setAttribute("id", "taskDetailInput");

    nameInput.type = "text";
    duedateInput.type = "date";

    div.appendChild(addButton);
    div.appendChild(closeButton);

    form.appendChild(h2);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    form.appendChild(duedateLabel);
    form.appendChild(duedateInput);
    form.appendChild(detailLabel);
    form.appendChild(detailInput);
    form.appendChild(div);
    body.appendChild(form);
    taskAddBoardBtnAddClick(projectID);
  }
  function taskAddBoardBtnAddClick(projectID) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const taskAddBoardBtn = document.querySelector(".taskAddBoardBtn");
    const form = document.querySelector(".taskAddBoard");
    const nameInput = document.querySelector("#taskNameInput");
    const priorityInput = document.querySelector("#taskPriorityInput");
    const duedateInput = document.querySelector("#taskDuedateInput");
    const detailInput = document.querySelector("#taskDetailInput");
    taskAddBoardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        console.log("hello kitty");
        projects.forEach((project, i) => {
          //check if projectID taking from the time clicking on project showing is the same with project inside projectList in localstorage
          if (projectID === i) {
            // if true then add task with new info into taskList array of the project
            const taskLength = project.taskList.length;
            project.taskList.push({
              taskID: taskLength.value,
              taskName: nameInput.value,
              taskPriority: priorityInput.value,
              taskDuedate: duedateInput.value,
              taskDetail: detailInput.value,
            });
            //reset the localstorage to update latest data
            localStorage.setItem("projects", JSON.stringify(projects));
            render();
          }
        });
      }
    });
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
    clickOutsideOfProjectOptionBox,
  };
};
const dom = DOM_generate();
console.log(dom.find(2));
