import { project } from "./modules/projects.js";
import { projects } from "./modules/localStorage.js";
import { task } from "./modules/tasks.js";
import { DOM_generate, Event_handle } from "./modules/DOM.js";
import "./styles/styles.css";
const project1 = new project(1, "bake a cakedf");
const task1 = new task(1, "buy sugar", "high", "today", 1);
const task2 = new task(2, "buy cream", "medium", "today", 1);
const DOM = DOM_generate();
DOM.headerDOMGenerate();
DOM.mainDOMGenerate();
DOM.footerDOMGenerate();
DOM.mainSidebarDOMGenerate();
DOM.renderMainContent();
const event = Event_handle();
event.addDataIndexIntoProjects();
event.displayProject();
event.addIconProjectClick();

let Projects = localStorage.setItem("projects", JSON.stringify(projects));
