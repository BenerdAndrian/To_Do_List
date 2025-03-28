import { project } from "./modules/projects.js";
import { projects } from "./modules/localStorage.js";
import { task } from "./modules/tasks.js";
import { DOM_generate, Event_handle, render } from "./modules/DOM.js";
import {
  todayList,
  tomorrowList,
  thisWeekList,
  upComingList,
  categorizeDateTime,
  today,
} from "./modules/dateFns.js";
import { getDay, parse, isToday } from "date-fns";
import "./styles/styles.css";
const project1 = new project(1, "bake a cakedf");
const task1 = new task(1, "buy sugar", "high", "today", 1);
const task2 = new task(2, "buy cream", "medium", "today", 1);
document.addEventListener("DOMContentLoaded", () => {
  render();
});
render();
const event = Event_handle();
event.threeDotIconClick();
// let Projects = localStorage.setItem("projects", JSON.stringify(projects));
// localStorage.clear();
console.log(todayList);
