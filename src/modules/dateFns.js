import { isTomorrow, isToday, isThisWeek, parse } from "date-fns";
const today = new Date();
const todayList = [];
const tomorrowList = [];
const thisWeekList = [];
const upComingList = [];
const inboxList = [];
console.log(today);
function categorizeDateTime() {
  console.log("ohlala");
  const projects = JSON.parse(localStorage.getItem("projects"));
  console.log("nhan chua");
  projects.forEach((project) => {
    if (project.taskList.length > 0) {
      project.taskList.forEach((task) => {
        console.log(task.taskDuedate);
        const dueDate = parse(task.taskDuedate, "yyyy-MM-dd", new Date()); // make sure it's a Date object

        if (isToday(dueDate)) {
          console.log("today ne");
          todayList.push(task);
        } else if (isTomorrow(dueDate)) {
          tomorrowList.push(task);
        } else if (isThisWeek(dueDate)) {
          thisWeekList.push(task);
        } else {
          upComingList.push(task);
        }
      });
    }
  });
}

export {
  today,
  todayList,
  tomorrowList,
  thisWeekList,
  upComingList,
  inboxList,
  categorizeDateTime,
};
