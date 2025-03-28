import { isTomorrow, isToday, isThisWeek, parse, isBefore } from "date-fns";
const today = new Date();
const todayList = [];
const tomorrowList = [];
const thisWeekList = [];
const upComingList = [];
const inboxList = [];
const completeList = [];
console.log(today);
//okkk
function categorizeDateTime() {
  todayList.length = 0;
  tomorrowList.length = 0;
  thisWeekList.length = 0;
  upComingList.length = 0;
  inboxList.length = 0;
  completeList.length = 0;
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  if (projects.length > 0) {
    projects.forEach((project) => {
      if (project.taskList.length > 0) {
        project.taskList.forEach((task) => {
          console.log(task.taskDuedate);
          const dueDate = parse(task.taskDuedate, "yyyy-MM-dd", new Date()); // make sure it's a Date object

          if (isToday(dueDate) && task.taskState === "not complete") {
            console.log("today ne");
            todayList.push(task);
          } else if (isTomorrow(dueDate) && task.taskState === "not complete") {
            tomorrowList.push(task);
          } else if (isThisWeek(dueDate) && task.taskState === "not complete") {
            thisWeekList.push(task);
          } else if (
            !isThisWeek(dueDate) &&
            task.taskState === "not complete"
          ) {
            upComingList.push(task);
          }
          if (task.taskState === "completed") {
            completeList.push(task);
          }
        });
      }
    });
  }
}

export {
  today,
  todayList,
  tomorrowList,
  thisWeekList,
  upComingList,
  inboxList,
  completeList,
  categorizeDateTime,
};
