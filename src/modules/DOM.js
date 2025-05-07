//import all necessary resources
import Inbox from "../asset/images/Inbox.svg";
import ThisWeek from "../asset/images/This Week.svg";
import Today from "../asset/images/Today.svg";
import Complete from "../asset/images/Complete.svg";
import Tomorrow from "../asset/images/Tomorrow.svg";
import Upcoming from "../asset/images/Upcoming.svg";
import threeDots from "../asset/images/blackdot.svg";
import whiteDots from "../asset/images/3dots.svg";
import addIcon from "../asset/images/addIcon.svg";
import closeIcon from "../asset/images/closeIcon.svg";
import gitLogo from "../asset/images/gitLogo.svg";
import addTaskIcon from "../asset/images/addTask.svg";
import { changeTaskStateLogic } from "./tasks.js";
import {
  todayList,
  tomorrowList,
  thisWeekList,
  upComingList,
  inboxList,
  completeList,
  categorizeDateTime,
} from "./dateFns.js";
import {
  addProjectToProjectList,
  processProjectID,
  processTaskID,
} from "./projects.js";

function display3DotsForRestOfText(string, stringLength, fixedLength) {
  if (stringLength > fixedLength) {
    return string.substring(0, fixedLength) + "...";
  } else {
    return string;
  }
}
//render the page but go back to current project display rather than render from the initial state
export const re_render = (index) => {
  const body = document.querySelector("body");
  body.innerHTML = "";
  const DOM = DOM_generate();
  const event = Event_handle();
  DOM.headerDOMGenerate();
  DOM.mainDOMGenerate();
  DOM.mainSidebarDOMGenerate();
  DOM.renderMainContent();
  DOM.footerDOMGenerate();
  const projectList = document.querySelectorAll(".projects h3");
  event.addDataIntoElement(projectList);
  event.displayProject();
  event.addIconProjectClick();
  event.printProjects();
  event.taskThreeDotsIconClick();
  event.threeDotIconClick();
  event.clickOutsideOfProjectOptionBox();
  categorizeDateTime();
  event.renderCategory();
  event.renderProject(index);
};
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
  const projectList = document.querySelectorAll(".projects h3");
  event.addDataIntoElement(projectList);
  event.displayProject();
  event.addIconProjectClick();
  event.printProjects();
  event.clickOutsideOfProjectOptionBox();
  categorizeDateTime();
  event.renderCategory();
  event.threeDotIconClick();
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
    p.textContent = "Created By Benerd Andrian";
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
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
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
      image.src = whiteDots;
      image.setAttribute("class", "projectThreeDotIcon");
      const li = document.createElement("li");
      li.className = "projectItem";
      const h3 = document.createElement("h3");
      const fixedLength = 12;
      const projectName = display3DotsForRestOfText(
        project.name,
        project.name.length,
        fixedLength,
      );
      h3.textContent = `${projectName}`;
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
      li.setAttribute("class", `${category}`);
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
        renderProject(index);
      });
    });
  }
  function addDataIntoElement(projectList) {
    projectList.forEach((li, index) => {
      li.setAttribute("data-index", index);
    });
  }
  function renderProject(projectID) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const project = projects.find(
      (theProject) => theProject.id === Number(projectID),
    );

    const mainPart = document.querySelector(".mainPart");
    mainPart.innerHTML = "";
    const taskListDOM = document.createElement("ul");
    taskListDOM.setAttribute("class", "taskList");
    mainPart.appendChild(taskListDOM);
    const div = document.createElement("div");
    div.setAttribute("class", "taskHeader");
    const h2 = document.createElement("h2");
    const name = display3DotsForRestOfText(
      project.name,
      project.name.length,
      60,
    );
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
      if (taskList.length > 0) {
        renderTask(taskList);
        //add data to task
        const tasks = document.querySelectorAll(".task");
        addDataIntoElement(tasks);
      }
      addTaskIconClick(projectID, false);
      taskThreeDotsIconClick(projectID);
      threeDotIconClick();
    }
  }
  function renderTask(taskList) {
    const taskListDOM = document.querySelector(".taskList");
    const mainPart = document.querySelector(".mainPart");
    mainPart.appendChild(taskListDOM);
    taskList.forEach((task, i) => {
      const li = document.createElement("li");
      li.setAttribute("class", "task");
      const p = document.createElement("p");
      p.setAttribute("class", "priorityLevelUI");
      const color = displayPriorityColor(task.taskPriority);
      p.style.backgroundColor = `${color}`;
      const input = document.createElement("input");
      input.type = "checkbox";
      input.setAttribute("class", "complete");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const img = document.createElement("img");
      img.src = threeDots;
      img.setAttribute("class", "taskThreeDotIcon");
      const fixedLength = 20;
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
      checkCompleteDOM(task.taskState, input);
      taskCompleteEventHandleDOM(task.projectID, i, taskList, input);
    });
  }
  function checkCompleteDOM(status, input) {
    if (status === "completed") {
      input.checked = true;
      input.parentNode.classList.add("discarded");
    }
  }
  function changeUIForCompleteTask(input) {
    const parentNode = input.parentNode;
    parentNode.classList.toggle("discarded");
  }
  function check(input) {
    const parentNode = input.parentNode;
    const boolValue = parentNode.classList.contains("discarded") ? true : false;
    return boolValue;
  }
  function taskCompleteEventHandleDOM(projectID, i, taskList, input) {
    input.addEventListener("click", () => {
      changeUIForCompleteTask(input);
      const boolValue = check(input);
      changeTaskStateLogic(taskList, i, boolValue);
      re_render(projectID);
    });
  }

  function displayPriorityColor(priority) {
    if (priority === "High") return "rgb(189, 20, 20)";
    else if (priority === "Medium") return "rgb(185, 159, 13)";
    else return "green";
  }

  function addIconProjectClick() {
    const addIconProject = document.querySelector(".addIconProject");
    addIconProject.addEventListener("click", () => {
      addBlurLayer();
      displayProjectInfoAddBoard();
      const closeBtn = document.querySelector(".closeBtn");
      submitProjectBoardBtnClick();
      const projectAddBoard = document.querySelector(".projectAddBoard");
      closeBoard(closeBtn, projectAddBoard);
    });
  }
  function notify() {
    addBlurLayer();
    displayNotificationBoard();
    const closeBtn = document.querySelector(".closeBtn");
    const projectAddBoard = document.querySelector(".projectAddBoard");
    const blurlayer = document.querySelector(".blurLayer");
    const taskAddBoard = document.querySelector(".taskAddBoard");
    closeBoard(closeBtn, projectAddBoard);
    blurlayer.remove();
    taskAddBoard.remove();
  }
  function displayNotificationBoard() {
    const closeBtn = document.createElement("img");
    closeBtn.src = closeIcon;
    closeBtn.alt = "close icon";
    closeBtn.setAttribute("class", "closeBtn");
    const div = document.createElement("div");
    div.className = "projectAddBoard";
    const p = document.createElement("p");
    p.textContent =
      "You dont have any projects right now. Create a project first before adding a task.";
    p.className = "notify";
    div.appendChild(closeBtn);
    div.appendChild(p);
    const body = document.querySelector("body");
    body.appendChild(div);
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
  function displayTaskUpdateBoard(projectID, index) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(projectID);
    displayTaskBoard(projectID, "Update Task", false);
    const nameInput = document.querySelector("#taskNameInput");
    const priorityInput = document.querySelector("#taskPriorityInput");
    const duedateInput = document.querySelector("#taskDuedateInput");
    const detailInput = document.querySelector("#taskDetailInput");
    projects.forEach((project, i) => {
      if (i === Number(projectID)) {
        const task = project.taskList[Number(index)];
        nameInput.value = task.taskName;
        priorityInput.value = task.taskPriority;
        duedateInput.value = task.taskDuedate;
        detailInput.value = task.taskDetail;
      }
    });
  }
  function addBlurLayer() {
    const div = document.createElement("div");
    div.setAttribute("class", "blurLayer");
    const body = document.querySelector("body");
    body.appendChild(div);
  }
  function closeBoard(closeBtn, board) {
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        removeProjectBoard(board);
      });
    }
  }
  function removeProjectBoard(board) {
    board.remove();
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
        const inputValue = input.value;
        addProjectToProjectList(inputValue);
        render();
        threeDotIconClick();
      } else {
        input.setCustomValidity("this box can not be blank.");
      }
    });
  }
  function threeDotIconClick() {
    const threeDotIcon = document.querySelectorAll(".projectThreeDotIcon");
    threeDotIcon.forEach((threeDot, i) => {
      threeDot.addEventListener("click", () => {
        const prevSibling = threeDot.previousElementSibling;
        const index = Number(prevSibling.dataset.index);
        removeCurrentProjectOptionBox();
        displayProjectOptionBox(index);
        // const mainPart = document.querySelector(".mainPart");
        // mainPart.innerHTML = "";
        renderProject(i);
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
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
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
      updateCurrentProject(index);
      const closeBtn = document.querySelector(".closeBtn");
      const projectAddBoard = document.querySelector(".projectAddBoard");
      closeBoard(closeBtn, projectAddBoard);
    });
  }
  function updateCurrentProject(index) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const updateBtn = document.querySelector(".projectSubmitBtn");

    updateBtn.addEventListener("click", () => {
      let newName;
      const input = document.querySelector("#projectName");
      if (input.value) {
        newName = input.value;
        projects.forEach((project, i) => {
          if (index === i) {
            project.name = newName;
          }
          localStorage.setItem("projects", JSON.stringify(projects));
          re_render(index);
          threeDotIconClick();
        });
      } else {
        input.reportValidity();
      }
    });
  }
  //add task
  function addTaskIconClick(projectID, bool) {
    const addTaskIcon = document.querySelector(".addTaskIcon");
    addTaskIcon.addEventListener("click", () => {
      addBlurLayer();
      displayTaskBoard(projectID, "Add Task", bool);
      pushNewTaskToTaskList(projectID);
    });
  }
  function displayTaskBoard(projectID, purpose, boolValue) {
    const div = document.createElement("div");
    div.setAttribute("class", "btnTaskBoard");
    const body = document.querySelector("body");
    const h2 = document.createElement("h2");
    h2.textContent = purpose;

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

    nameInput.required = true;
    priorityInput.required = true;
    duedateInput.required = true;
    const closeButton = document.createElement("button");
    const submitBtn = document.createElement("button");
    closeButton.setAttribute("class", "taskAddBoardCloseBtn");
    submitBtn.setAttribute("class", "taskAddBoardBtn");

    submitBtn.textContent = purpose;
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
    const today = new Date().toISOString().split("T")[0];
    duedateInput.min = today;
    div.appendChild(submitBtn);
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
    closeBoard(closeButton, form);
    //divide into 2 cases, true when taskAddBoard triggers in general project mainPart, one for the category render which we have to define which project the new task would go to.
    if (boolValue) {
      const projectLabel = document.createElement("label");
      projectLabel.textContent = "Choose Project to insert: ";
      projectLabel.HTMLFor = "projectChoosing";
      const projectListInput = document.createElement("select");
      projectListInput.setAttribute("id", "projectChoosing");
      const projects = JSON.parse(localStorage.getItem("projects")) || [];
      projects.forEach((project, i) => {
        const option = document.createElement("option");
        option.innerText = project.name;
        option.setAttribute("class", "projectOption");
        option.setAttribute("data-index", i);
        projectListInput.appendChild(option);
      });
      form.appendChild(projectLabel);
      form.appendChild(projectListInput);
    }
    form.appendChild(div);
    body.appendChild(form);
  }

  function pushNewTaskToTaskList(projectID) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const taskAddBoardBtn = document.querySelector(".taskAddBoardBtn");
    const form = document.querySelector(".taskAddBoard");
    const nameInput = document.querySelector("#taskNameInput");
    const priorityInput = document.querySelector("#taskPriorityInput");
    const duedateInput = document.querySelector("#taskDuedateInput");
    const detailInput = document.querySelector("#taskDetailInput");
    //divide it into two cases, one for the add task in general project mainPart, one for the category display mainPart which include project choosing option in the info board
    if (projectID != -1) {
      taskAddBoardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
          projects.forEach((project, i) => {
            //check if projectID taking from the time clicking on project showing is the same with project inside projectList in localstorage
            if (Number(projectID) === i) {
              // if true then add task with new info into taskList array of the project
              const taskLength = project.taskList.length;
              project.taskList.push({
                taskID: taskLength,
                taskName: nameInput.value,
                taskPriority: priorityInput.value,
                taskDuedate: duedateInput.value,
                taskDetail: detailInput.value,
                taskState: "not complete",
                projectID: projectID,
              });
              //reset the localstorage to update latest data
              localStorage.setItem("projects", JSON.stringify(projects));
              re_render(projectID);
              taskThreeDotsIconClick(projectID);
            }
          });
        } else {
          form.reportValidity();
        }
      });
    } else {
      taskAddBoardBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
          const projectChoosing = document.querySelector("#projectChoosing");
          let index;
          if (projectChoosing.options[projectChoosing.selectedIndex]) {
            index = Number(
              projectChoosing.options[projectChoosing.selectedIndex].dataset
                .index || -1,
            );
          } else {
            index = -1;
          }

          if (index >= 0) {
            projects.forEach((project) => {
              if (index === project.id) {
                const taskLength = project.taskList.length;
                project.taskList.push({
                  taskID: taskLength,
                  taskName: nameInput.value,
                  taskPriority: priorityInput.value,
                  taskDuedate: duedateInput.value,
                  taskDetail: detailInput.value,
                  taskState: "not complete",
                  projectID: index,
                });
                localStorage.setItem("projects", JSON.stringify(projects));
                re_render(index);
              }
            });
          } else {
            notify();
          }
        }
      });
    }
  }
  function printProjects() {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(projects);
  }
  function taskThreeDotsIconClick(projectID) {
    const dotIcon = document.querySelectorAll(
      ".taskList .task .taskThreeDotIcon",
    );
    dotIcon.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        const index = Number(e.target.parentNode.dataset.index);
        removeCurrentProjectOptionBox();
        displayTaskOptionBoxAndHandleEvent(projectID, index);
      });
    });
  }
  function displayTaskOptionBoxAndHandleEvent(projectID, index) {
    displayTaskOptionBox(index);
    taskUpdateBtnClick(projectID, index);
    deleteCurrentTaskBtnClick(projectID, index);
  }
  function displayTaskOptionBox(index) {
    const tasks = document.querySelectorAll(".taskList .task");
    tasks.forEach((task, i) => {
      if (i === Number(index)) {
        const ul = document.createElement("ul");
        ul.setAttribute("class", "projectOptionBox");
        const optionList1 = document.createElement("li");
        const optionList2 = document.createElement("li");
        const updateBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        deleteBtn.textContent = "Delete";
        updateBtn.setAttribute("class", "taskUpdateBtn");
        deleteBtn.setAttribute("class", "taskDeleteBtn");
        optionList1.appendChild(updateBtn);
        optionList2.appendChild(deleteBtn);
        ul.appendChild(optionList1);
        ul.appendChild(optionList2);
        task.appendChild(ul);
      }
    });
  }

  function taskUpdateBtnClick(projectID, index) {
    const taskUpdateBtn = document.querySelector(".taskUpdateBtn");
    taskUpdateBtn.addEventListener("click", () => {
      addBlurLayer();
      displayTaskUpdateBoard(projectID, index);
      console.log(projectID);
      updateCurrentTaskBtnClick(projectID, index);
    });
  }
  function deleteCurrentTaskBtnClick(projectID, index) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const deleteBtn = document.querySelector(".taskDeleteBtn");
    deleteBtn.addEventListener("click", () => {
      projects.forEach((project, i) => {
        if (Number(projectID) === i) {
          project.taskList.splice(index, 1);
          localStorage.setItem("projects", JSON.stringify(projects));
          processTaskID(projectID);
          re_render(projectID);
        }
      });
    });
  }
  function updateCurrentTaskBtnClick(projectID, index) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const taskSubmitBtn = document.querySelector(".taskAddBoardBtn");
    const form = document.querySelector(".taskAddBoard");
    const newNameInput = document.querySelector("#taskNameInput");
    const newPriorityInput = document.querySelector("#taskPriorityInput");
    const newDuedateInput = document.querySelector("#taskDuedateInput");
    const newDetailInput = document.querySelector("#taskDetailInput");
    taskSubmitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        projects.forEach((project, i) => {
          console.log(projectID);
          if (i === Number(projectID)) {
            project.taskList[index] = {
              taskID: index,
              taskName: newNameInput.value,
              taskPriority: newPriorityInput.value,
              taskDuedate: newDuedateInput.value,
              taskDetail: newDetailInput.value,
              taskState: "not complete",
              projectID: projectID,
            };
            localStorage.setItem("projects", JSON.stringify(projects));
            re_render(projectID);
            taskThreeDotsIconClick(projectID);
          }
        });
      } else {
        form.reportValidity();
      }
    });
  }
  function renderTaskListBaseOnCategory(category, list) {
    const mainPart = document.querySelector(".mainPart");
    mainPart.innerHTML = "";
    const taskListDOM = document.createElement("ul");
    taskListDOM.setAttribute("class", "taskList");
    mainPart.appendChild(taskListDOM);
    const div = document.createElement("div");
    div.setAttribute("class", "taskHeader");
    const h2 = document.createElement("h2");
    h2.textContent = category;
    div.appendChild(h2);
    const img = document.createElement("img");
    img.src = addTaskIcon;
    img.alt = "add Task Icon";
    img.setAttribute("class", "addTaskIcon");
    div.appendChild(img);
    mainPart.insertBefore(div, taskListDOM);
    if (list) {
      const taskList = list;
      if (taskList.length > 0) {
        console.log(taskList);
        renderTask(taskList);
        //add data to task
        const tasks = document.querySelectorAll(".task");
        addDataIntoElement(tasks);
      }

      addTaskIconClick(-1, true);
      // taskThreeDotsIconClick(projectID);
      taskThreeDotsCategoryIconClick(list);
    }
  }
  function taskThreeDotsCategoryIconClick(list) {
    const threeDotIcon = document.querySelectorAll(".taskThreeDotIcon");
    threeDotIcon.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        removeCurrentProjectOptionBox();
        displayTaskOptionBox(index);
        theFunction(list, index);
      });
    });
  }
  function theFunction(list, index) {
    list.forEach((task, i) => {
      if (i === index) {
        taskUpdateBtnClick(task.projectID, task.taskID);
        deleteCurrentTaskBtnClick(task.projectID, task.taskID);
      }
    });
  }

  function todayCategoryClick() {
    const todayBtn = document.querySelector(".Today");
    todayBtn.addEventListener("click", () => {
      renderTaskListBaseOnCategory("Today", todayList);
    });
  }
  function tomorrowCategoryClick() {
    const tomorrowBtn = document.querySelector(".Tomorrow");
    tomorrowBtn.addEventListener("click", () => {
      renderTaskListBaseOnCategory("Tomorrow", tomorrowList);
    });
  }
  function thisWeekCategoryClick() {
    const thisWeekBtn = document.querySelector(".Week");
    thisWeekBtn.addEventListener("click", () => {
      renderTaskListBaseOnCategory("This Week", thisWeekList);
    });
  }
  function upComingCategoryClick() {
    const upcomingList = document.querySelector(".Upcoming");
    upcomingList.addEventListener("click", () => {
      renderTaskListBaseOnCategory("Upcoming", upComingList);
    });
  }
  function completeCategoryClick() {
    const completeCategoryBtn = document.querySelector(".Complete");
    completeCategoryBtn.addEventListener("click", () => {
      renderTaskListBaseOnCategory("Complete", completeList);
    });
  }
  function renderCategory() {
    todayCategoryClick();
    tomorrowCategoryClick();
    thisWeekCategoryClick();
    upComingCategoryClick();
    completeCategoryClick();
  }
  return {
    displayProject,
    displayCategory,
    addIconProjectClick,
    printProjects,
    threeDotIconClick,
    clickOutsideOfProjectOptionBox,
    addDataIntoElement,
    renderProject,
    taskThreeDotsIconClick,
    renderCategory,
  };
};
const dom = DOM_generate();
