(() => {
  "use strict";
  var t = {
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], s = 0; s < t.length; s++) {
            var c = t[s],
              d = r.base ? c[0] + r.base : c[0],
              l = a[d] || 0,
              u = "".concat(d, " ").concat(l);
            a[d] = l + 1;
            var m = n(u),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== m) e[m].references++, e[m].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: h, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              e[s].references--;
            }
            for (var c = r(t, o), d = 0; d < a.length; d++) {
              var l = n(a[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      159: (t, e, n) => {
        n.d(e, { A: () => s });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          t.id,
          ":root{\n    --header-color:rgba(12, 15, 70, 0.945);\n    --sidebar-color:rgba(30, 46, 99, 0.945);\n    --font-header-color:white;\n    --category-background-color:rgb(42, 136, 165);\n}\n*{\n    padding:0;\n    margin:0;\n}\nhtml{\n    font-size:16px;\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif\n}\nbody{\n    display:grid;\n    grid-template-rows:1fr 5fr 0.5fr;\n    width:100vw;\n    height:100vh;\n    \n}\nheader{\n  grid-row:1/2;\n  background:var(--header-color);\n  color:var(--font-header-color);\n  display:flex;\n  align-items:center;\n}\nheader h1{\n    font-size:6rem;\n    margin-left:2rem;\n}\nmain{\n    grid-row:2/3;\n    display:grid;\n    grid-template-columns:1.1fr 4fr;\n}\n.sidebar{\n    grid-column:1/2;\n    font-size:3rem;\n    background-color:var(--sidebar-color);\n    color:var(--font-header-color);\n}\n.category ul,.projects ul{\n    display:flex;\n    flex-direction: row;\n    gap:1rem;\n}\n.category li img{\n  margin-right:0.5rem;\n}\n.projects{\n    grid-column:1/2;\n    background-color:var(--sidebar-color);\n    padding-left:0.5rem;\n}\n.projects ul{\n    margin-top:1rem;\n    display:flex;\n    flex-direction: column;\n\n}\n.category li h3{\n    font-size:3rem;\n}\n.category ul{\n    justify-content:space-evenly;\n    align-items: center;\n    margin-top:1rem;\n}\n.category li img{\n    width:30px;\n    height:30px;\n}\n.projectCategory{\n    display:flex;\n    margin-top:2rem;\n    justify-content:space-between;\n}\n.projectCategory h2{\n    font-size:5rem;\n    color:white;\n}\n.category li{\n    display:flex;\n    cursor:pointer;\n}\n.mainContent{\n    grid-column:2/3;\n    display:grid;\n    grid-template-rows:5rem 1fr;\n    position:relative;\n}\n.category{\n    grid-row:1/2;\n    background-color:var(--category-background-color);\n}\n.mainPart{\n    grid-row:2/3;\n    padding:2rem 12rem;\n    height:100vh;\n    overflow:auto;\n}\n\nfooter{\n    grid-row:3/4;\n    background-color: var(--header-color);\n    color:var(--font-header-color);\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter p{\n    font-size:3rem;\n    color:var(--font-header-color);\n}\nfooter img{\n    width:30px;\n    height:30px;\n    margin-left:1rem;\n}\n.projectThreeDotIcon,.taskThreeDotIcon{\n    width:25px;\n    height:25px;\n    cursor:pointer;\n    margin-right:1rem;\n}\n.projects li h3{\n    font-size:3rem;\n    color:var(--font-header-color)\n}\n.projects li{\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    cursor:pointer;\n    position:relative;\n}\n.container{\n    display:flex;\n    justify-content:space-between;\n}\n.container img{\n    width:45px;\n    height:45px;\n    margin-right:1rem;\n    cursor:pointer;\n}\n.projectAddBoard,.taskAddBoard{\n    position:fixed;\n    top:50%;\n    left:50%;\n    transform:translate(-55%,-55%);\n    display:flex;\n    flex-direction:column;\n    background-color:white;\n    padding:2rem 1.5rem;\n}\n.projectAddBoard{\n    width:20rem;\n}\n.projectAddBoard label{\n    font-size:3rem;\n    font-weight: bold;\n    padding-bottom:0.5rem;\n}\n.projectAddBoard input{\n    font-size:3rem;\n}\n.projectAddBoard img{\n    width:20px;\n    height:20px;\n    position:absolute;\n    right:1rem;\n    top:1rem;\n    cursor:pointer;\n}\n.blurLayer{\n    opacity:0.5;\n    background-color:black;\n    width:100vw;\n    height:100vh;\n    position:absolute;\n}\n.projectSubmitBtn{\n    background-color:#3fa6fa;\n    width:100%;\n    color:var(--font-header-color);\n    margin-top:0.7rem;\n}\n.projectOptionBox{\n    position:absolute;\n    right:-11rem;\n    border:1px solid;\n    background-color:rgb(214, 214, 214);\n    z-index:1;\n    list-style:none;\n}\n.projectUpdateBtn,.projectDeleteBtn,.taskDeleteBtn,.taskUpdateBtn{\n    padding:0.5rem 3rem;\n    background-color:rgb(235, 225, 225);\n    border:none;\n    cursor:pointer;\n    font-size:3rem;\n    font-weight: bold;\n    width:100%;\n}\n.taskList .task{\n    display:flex;\n    justify-content:space-between;\n    background-color:bisque;\n    margin-bottom:2rem;\n    padding:0.5rem 1rem;\n    border-radius:0.5rem;\n    align-items: center;\n    position:relative;\n}\n.taskList .task .threeDotIcon{\n    cursor:pointer;\n\n}\n.taskList .task input{\n    width:25px;\n    height:25px;\n    margin-right:2rem;\n    margin-left:2rem;\n}\n/* .taskList .task p:not(.priorityLevelUI){\n    flex:1;\n    font-size:1.25rem;\n} */\n.taskList .task p{\n    flex:1;\n    font-size:3rem;\n    text-align:left;\n}\n\n.addIconProject{\n    width:50px;\n    height:50px;\n    cursor:pointer;\n}\n.priorityLevelUI{\n    display:inline-block;\n    height:100%;\n    width:1rem;\n    position:absolute;\n    left:0;\n}\n.taskHeader{\n    display:flex;\n    align-items:center;\n    margin-bottom:2rem;\n \n}\n.taskHeader h2{\n    font-size:4rem;\n    margin-right:1rem;\n}\n.taskHeader img{\n    width:40px;\n    height:40px;\n    cursor:pointer;\n}\n.taskAddBoard{\n    width:40rem;\n}\n.taskAddBoard label{\n    font-size:5.5rem;\n    margin-top:1.5rem;\n    margin-bottom:0.4rem;\n}\n.taskAddBoard input,.taskAddBoard select,.taskAddBoard textarea{\n    font-size:3rem;\n    padding:0.25rem;\n}\n.btnTaskBoard{\n    display:flex;\n    justify-content:center;\n    margin-top:2rem;\n    margin-left:2rem;\n}\n.btnTaskBoard button{\n    font-size:2.5rem;\n    padding:0.6rem 1.2rem;\n    margin-right:3rem;\n    cursor:pointer;\n}\n.discarded{\n  opacity:0.6;\n  position:relative\n}\n.discarded::before{\n  position:absolute;\n  content:\"\";\n  width: 100%;\n  height:3px;\n  background:black;\n  top:50%;\n  left:0;\n}\ninput{\n    cursor:pointer;\n}",
          "",
        ]);
        const s = i;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var d = 0; d < t.length; d++) {
                var l = [].concat(t[d]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + "");
      var e = n.g.document;
      if (
        !t &&
        e &&
        (e.currentScript &&
          "SCRIPT" === e.currentScript.tagName.toUpperCase() &&
          (t = e.currentScript.src),
        !t)
      ) {
        var r = e.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); )
            t = r[o--].src;
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (t = t
        .replace(/^blob:/, "")
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = t);
    })(),
    (n.nc = void 0);
  class r {
    constructor(t, e) {
      (this.id = t), (this.name = e), (this.taskList = []);
    }
    static createProject(t, e, n) {
      return new r(t, e, n);
    }
    updateProject(t, e) {
      (this.id = t), (this.name = e);
    }
    displayProject() {
      console.log(`project's name: ${this.name}`),
        console.log(`project's ID: ${this.id}`),
        console.log(`project's taskList: ${this.taskList}`);
    }
    deleteProject(t, e) {
      const n = e.findIndex((e) => e.id === t);
      n && e.splice(n, 1);
    }
    addTaskIntoList(t) {
      this.taskList.push(t);
    }
  }
  function o() {
    let t = JSON.parse(localStorage.getItem("projects"));
    t.forEach((t, e) => {
      t.id = e;
    }),
      localStorage.setItem("projects", JSON.stringify(t));
  }
  new r(1, "bake a cake").displayProject();
  class a {
    constructor(t, e, n, r, o) {
      (this.taskID = t),
        (this.projectID = o),
        (this.taskName = e),
        (this.taskPriority = n),
        (this.taskDuedate = r),
        (this.taskDetail = "");
    }
    static createTask(t, e, n, r, o, i) {
      return new a(t, e, n, r, o, i);
    }
    updateTask(t, e, n, r, o, a) {
      (this.taskID = t),
        (this.taskName = e),
        (this.taskPriority = n),
        (this.newTaskDuedate = r),
        (this.taskDetail = o),
        (this.projectID = a);
    }
    deleteTask(t, e, n) {
      const r = n.findEach((t) => (t.projectId = e)),
        o = r.taskList.findIndex((e) => e.taskid === t);
      r.taskList.splice(o, 1);
    }
    displayTask() {
      console.log(`task's ID: ${this.taskID}`),
        console.log(`task's name: ${this.taskName}`),
        console.log(`task's priority: ${this.taskPriority}`),
        console.log(`task's duedate: ${this.taskDuedate}`),
        console.log(`task's detail: ${this.taskDetail}`);
    }
  }
  new a(1, "backbf", "high", "2024-05-05", 1).displayTask();
  const i = n.p + "9580a2359c0d583688c0.svg",
    s = n.p + "242b7c822605469264df.svg",
    c = n.p + "020e9fa2bcf0d26bfff3.svg",
    d = n.p + "dbea9f7d4a0bd816bd70.svg",
    l = n.p + "35b35b8951e16c88bf1a.svg",
    u = n.p + "4787ccdd1c258c8d841b.svg",
    m = n.p + "882375c8a1b24cff5ec9.svg",
    p = n.p + "1750bbebb9ba5de2676f.svg",
    h = n.p + "ac19441d0a8b825a1880.svg",
    f = n.p + "4f11844fe2d887c0edd7.svg",
    g = n.p + "fe97d30955a52740f506.svg",
    y = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    };
  function b(t) {
    return (e = {}) => {
      const n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  const w = {
      date: b({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: b({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: b({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    k = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function v(t) {
    return (e, n) => {
      let r;
      if (
        "formatting" === (n?.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        const e = t.defaultFormattingWidth || t.defaultWidth,
          o = n?.width ? String(n.width) : e;
        r = t.formattingValues[o] || t.formattingValues[e];
      } else {
        const e = t.defaultWidth,
          o = n?.width ? String(n.width) : t.defaultWidth;
        r = t.values[o] || t.values[e];
      }
      return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  const x = {
    ordinalNumber: (t, e) => {
      const n = Number(t),
        r = n % 100;
      if (r > 20 || r < 10)
        switch (r % 10) {
          case 1:
            return n + "st";
          case 2:
            return n + "nd";
          case 3:
            return n + "rd";
        }
      return n + "th";
    },
    era: v({
      values: {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      defaultWidth: "wide",
    }),
    quarter: v({
      values: {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      },
      defaultWidth: "wide",
      argumentCallback: (t) => t - 1,
    }),
    month: v({
      values: {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        wide: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      defaultWidth: "wide",
    }),
    day: v({
      values: {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      defaultWidth: "wide",
    }),
    dayPeriod: v({
      values: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
      },
      defaultWidth: "wide",
      formattingValues: {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
      },
      defaultFormattingWidth: "wide",
    }),
  };
  function S(t) {
    return (e, n = {}) => {
      const r = n.width,
        o = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
        a = e.match(o);
      if (!a) return null;
      const i = a[0],
        s = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
        c = Array.isArray(s)
          ? (function (t) {
              for (let e = 0; e < t.length; e++) if (t[e].test(i)) return e;
            })(s)
          : (function (t) {
              for (const e in t)
                if (Object.prototype.hasOwnProperty.call(t, e) && t[e].test(i))
                  return e;
            })(s);
      let d;
      return (
        (d = t.valueCallback ? t.valueCallback(c) : c),
        (d = n.valueCallback ? n.valueCallback(d) : d),
        { value: d, rest: e.slice(i.length) }
      );
    };
  }
  const C = {
    ordinalNumber:
      ((E = {
        matchPattern: /^(\d+)(th|st|nd|rd)?/i,
        parsePattern: /\d+/i,
        valueCallback: (t) => parseInt(t, 10),
      }),
      (t, e = {}) => {
        const n = t.match(E.matchPattern);
        if (!n) return null;
        const r = n[0],
          o = t.match(E.parsePattern);
        if (!o) return null;
        let a = E.valueCallback ? E.valueCallback(o[0]) : o[0];
        return (
          (a = e.valueCallback ? e.valueCallback(a) : a),
          { value: a, rest: t.slice(r.length) }
        );
      }),
    era: S({
      matchPatterns: {
        narrow: /^(b|a)/i,
        abbreviated:
          /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/^b/i, /^(a|c)/i] },
      defaultParseWidth: "any",
    }),
    quarter: S({
      matchPatterns: {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
      defaultParseWidth: "any",
      valueCallback: (t) => t + 1,
    }),
    month: S({
      matchPatterns: {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      defaultParseWidth: "any",
    }),
    day: S({
      matchPatterns: {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      defaultMatchWidth: "wide",
      parsePatterns: {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      defaultParseWidth: "any",
    }),
    dayPeriod: S({
      matchPatterns: {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      defaultMatchWidth: "any",
      parsePatterns: {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      defaultParseWidth: "any",
    }),
  };
  var E;
  const D = {
      code: "en-US",
      formatDistance: (t, e, n) => {
        let r;
        const o = y[t];
        return (
          (r =
            "string" == typeof o
              ? o
              : 1 === e
                ? o.one
                : o.other.replace("{{count}}", e.toString())),
          n?.addSuffix
            ? n.comparison && n.comparison > 0
              ? "in " + r
              : r + " ago"
            : r
        );
      },
      formatLong: w,
      formatRelative: (t, e, n, r) => k[t],
      localize: x,
      match: C,
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    },
    T = (t, e) => {
      switch (t) {
        case "P":
          return e.date({ width: "short" });
        case "PP":
          return e.date({ width: "medium" });
        case "PPP":
          return e.date({ width: "long" });
        default:
          return e.date({ width: "full" });
      }
    },
    j = (t, e) => {
      switch (t) {
        case "p":
          return e.time({ width: "short" });
        case "pp":
          return e.time({ width: "medium" });
        case "ppp":
          return e.time({ width: "long" });
        default:
          return e.time({ width: "full" });
      }
    },
    I = {
      p: j,
      P: (t, e) => {
        const n = t.match(/(P+)(p+)?/) || [],
          r = n[1],
          o = n[2];
        if (!o) return T(t, e);
        let a;
        switch (r) {
          case "P":
            a = e.dateTime({ width: "short" });
            break;
          case "PP":
            a = e.dateTime({ width: "medium" });
            break;
          case "PPP":
            a = e.dateTime({ width: "long" });
            break;
          default:
            a = e.dateTime({ width: "full" });
        }
        return a.replace("{{date}}", T(r, e)).replace("{{time}}", j(o, e));
      },
    },
    P = /^D+$/,
    M = /^Y+$/,
    q = ["D", "DD", "YY", "YYYY"];
  function A(t) {
    return P.test(t);
  }
  function N(t) {
    return M.test(t);
  }
  function L(t, e, n) {
    const r = (function (t, e, n) {
      const r = "Y" === t[0] ? "years" : "days of the month";
      return `Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
    })(t, e, n);
    if ((console.warn(r), q.includes(t))) throw new RangeError(r);
  }
  Math.pow(10, 8);
  const O = 6048e5,
    B = Symbol.for("constructDateFrom");
  function H(t, e) {
    return "function" == typeof t
      ? t(e)
      : t && "object" == typeof t && B in t
        ? t[B](e)
        : t instanceof Date
          ? new t.constructor(e)
          : new Date(e);
  }
  let Y = {};
  function W() {
    return Y;
  }
  function F(t, e) {
    return H(e || t, t);
  }
  class J {
    subPriority = 0;
    validate(t, e) {
      return !0;
    }
  }
  class Q extends J {
    constructor(t, e, n, r, o) {
      super(),
        (this.value = t),
        (this.validateValue = e),
        (this.setValue = n),
        (this.priority = r),
        o && (this.subPriority = o);
    }
    validate(t, e) {
      return this.validateValue(t, this.value, e);
    }
    set(t, e, n) {
      return this.setValue(t, e, this.value, n);
    }
  }
  class G extends J {
    priority = 10;
    subPriority = -1;
    constructor(t, e) {
      super(), (this.context = t || ((t) => H(e, t)));
    }
    set(t, e) {
      return e.timestampIsSet
        ? t
        : H(
            t,
            (function (t, e) {
              const n = (function (t) {
                return "function" == typeof t && t.prototype?.constructor === t;
              })(e)
                ? new e(0)
                : H(e, 0);
              return (
                n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()),
                n.setHours(
                  t.getHours(),
                  t.getMinutes(),
                  t.getSeconds(),
                  t.getMilliseconds(),
                ),
                n
              );
            })(t, this.context),
          );
    }
  }
  class $ {
    run(t, e, n, r) {
      const o = this.parse(t, e, n, r);
      return o
        ? {
            setter: new Q(
              o.value,
              this.validate,
              this.set,
              this.priority,
              this.subPriority,
            ),
            rest: o.rest,
          }
        : null;
    }
    validate(t, e, n) {
      return !0;
    }
  }
  const R = /^(1[0-2]|0?\d)/,
    z = /^(3[0-1]|[0-2]?\d)/,
    U = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    X = /^(5[0-3]|[0-4]?\d)/,
    V = /^(2[0-3]|[0-1]?\d)/,
    K = /^(2[0-4]|[0-1]?\d)/,
    Z = /^(1[0-1]|0?\d)/,
    _ = /^(1[0-2]|0?\d)/,
    tt = /^[0-5]?\d/,
    et = /^[0-5]?\d/,
    nt = /^\d/,
    rt = /^\d{1,2}/,
    ot = /^\d{1,3}/,
    at = /^\d{1,4}/,
    it = /^-?\d+/,
    st = /^-?\d/,
    ct = /^-?\d{1,2}/,
    dt = /^-?\d{1,3}/,
    lt = /^-?\d{1,4}/,
    ut = /^([+-])(\d{2})(\d{2})?|Z/,
    mt = /^([+-])(\d{2})(\d{2})|Z/,
    pt = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    ht = /^([+-])(\d{2}):(\d{2})|Z/,
    ft = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
  function gt(t, e) {
    return t ? { value: e(t.value), rest: t.rest } : t;
  }
  function yt(t, e) {
    const n = e.match(t);
    return n ? { value: parseInt(n[0], 10), rest: e.slice(n[0].length) } : null;
  }
  function bt(t, e) {
    const n = e.match(t);
    return n
      ? "Z" === n[0]
        ? { value: 0, rest: e.slice(1) }
        : {
            value:
              ("+" === n[1] ? 1 : -1) *
              (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
            rest: e.slice(n[0].length),
          }
      : null;
  }
  function wt(t) {
    return yt(it, t);
  }
  function kt(t, e) {
    switch (t) {
      case 1:
        return yt(nt, e);
      case 2:
        return yt(rt, e);
      case 3:
        return yt(ot, e);
      case 4:
        return yt(at, e);
      default:
        return yt(new RegExp("^\\d{1," + t + "}"), e);
    }
  }
  function vt(t, e) {
    switch (t) {
      case 1:
        return yt(st, e);
      case 2:
        return yt(ct, e);
      case 3:
        return yt(dt, e);
      case 4:
        return yt(lt, e);
      default:
        return yt(new RegExp("^-?\\d{1," + t + "}"), e);
    }
  }
  function xt(t) {
    switch (t) {
      case "morning":
        return 4;
      case "evening":
        return 17;
      case "pm":
      case "noon":
      case "afternoon":
        return 12;
      default:
        return 0;
    }
  }
  function St(t, e) {
    const n = e > 0,
      r = n ? e : 1 - e;
    let o;
    if (r <= 50) o = t || 100;
    else {
      const e = r + 50;
      o = t + 100 * Math.trunc(e / 100) - (t >= e % 100 ? 100 : 0);
    }
    return n ? o : 1 - o;
  }
  function Ct(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
  }
  function Et(t, e) {
    const n = W(),
      r =
        e?.weekStartsOn ??
        e?.locale?.options?.weekStartsOn ??
        n.weekStartsOn ??
        n.locale?.options?.weekStartsOn ??
        0,
      o = F(t, e?.in),
      a = o.getDay(),
      i = (a < r ? 7 : 0) + a - r;
    return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
  }
  function Dt(t, e) {
    const n = F(t, e?.in),
      r = n.getFullYear(),
      o = W(),
      a =
        e?.firstWeekContainsDate ??
        e?.locale?.options?.firstWeekContainsDate ??
        o.firstWeekContainsDate ??
        o.locale?.options?.firstWeekContainsDate ??
        1,
      i = H(e?.in || t, 0);
    i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
    const s = Et(i, e),
      c = H(e?.in || t, 0);
    c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
    const d = Et(c, e);
    return +n >= +s ? r + 1 : +n >= +d ? r : r - 1;
  }
  function Tt(t, e) {
    return Et(t, { ...e, weekStartsOn: 1 });
  }
  function jt(t, e) {
    const n = F(t, e?.in),
      r =
        +Et(n, e) -
        +(function (t, e) {
          const n = W(),
            r =
              e?.firstWeekContainsDate ??
              e?.locale?.options?.firstWeekContainsDate ??
              n.firstWeekContainsDate ??
              n.locale?.options?.firstWeekContainsDate ??
              1,
            o = Dt(t, e),
            a = H(e?.in || t, 0);
          return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Et(a, e);
        })(n, e);
    return Math.round(r / O) + 1;
  }
  function It(t, e) {
    const n = (function (t, e) {
        const n = F(t, e?.in),
          r = n.getFullYear(),
          o = H(n, 0);
        o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
        const a = Tt(o),
          i = H(n, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        const s = Tt(i);
        return n.getTime() >= a.getTime()
          ? r + 1
          : n.getTime() >= s.getTime()
            ? r
            : r - 1;
      })(t, e),
      r = H(e?.in || t, 0);
    return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Tt(r);
  }
  function Pt(t, e, n) {
    const r = F(t, n?.in),
      o =
        (function (t, e) {
          const n = F(t, e?.in),
            r = +Tt(n) - +It(n);
          return Math.round(r / O) + 1;
        })(r, n) - e;
    return r.setDate(r.getDate() - 7 * o), r;
  }
  const Mt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    qt = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function At(t, e, n) {
    const r = F(t, n?.in);
    return isNaN(e)
      ? H(n?.in || t, NaN)
      : e
        ? (r.setDate(r.getDate() + e), r)
        : r;
  }
  function Nt(t, e, n) {
    const r = W(),
      o =
        n?.weekStartsOn ??
        n?.locale?.options?.weekStartsOn ??
        r.weekStartsOn ??
        r.locale?.options?.weekStartsOn ??
        0,
      a = F(t, n?.in),
      i = a.getDay(),
      s = 7 - o;
    return At(
      a,
      e < 0 || e > 6
        ? e - ((i + s) % 7)
        : (((((e % 7) + 7) % 7) + s) % 7) - ((i + s) % 7),
      n,
    );
  }
  function Lt(t, e, n) {
    const r = F(t, n?.in);
    return At(
      r,
      e -
        (function (t, e) {
          const n = F(t, e?.in).getDay();
          return 0 === n ? 7 : n;
        })(r, n),
      n,
    );
  }
  function Ot(t) {
    const e = F(t),
      n = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds(),
        ),
      );
    return n.setUTCFullYear(e.getFullYear()), +t - +n;
  }
  const Bt = {
      G: new (class extends $ {
        priority = 140;
        parse(t, e, n) {
          switch (e) {
            case "G":
            case "GG":
            case "GGG":
              return (
                n.era(t, { width: "abbreviated" }) ||
                n.era(t, { width: "narrow" })
              );
            case "GGGGG":
              return n.era(t, { width: "narrow" });
            default:
              return (
                n.era(t, { width: "wide" }) ||
                n.era(t, { width: "abbreviated" }) ||
                n.era(t, { width: "narrow" })
              );
          }
        }
        set(t, e, n) {
          return (e.era = n), t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = ["R", "u", "t", "T"];
      })(),
      y: new (class extends $ {
        priority = 130;
        incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
        parse(t, e, n) {
          const r = (t) => ({ year: t, isTwoDigitYear: "yy" === e });
          switch (e) {
            case "y":
              return gt(kt(4, t), r);
            case "yo":
              return gt(n.ordinalNumber(t, { unit: "year" }), r);
            default:
              return gt(kt(e.length, t), r);
          }
        }
        validate(t, e) {
          return e.isTwoDigitYear || e.year > 0;
        }
        set(t, e, n) {
          const r = t.getFullYear();
          if (n.isTwoDigitYear) {
            const e = St(n.year, r);
            return t.setFullYear(e, 0, 1), t.setHours(0, 0, 0, 0), t;
          }
          const o = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
          return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
      })(),
      Y: new (class extends $ {
        priority = 130;
        parse(t, e, n) {
          const r = (t) => ({ year: t, isTwoDigitYear: "YY" === e });
          switch (e) {
            case "Y":
              return gt(kt(4, t), r);
            case "Yo":
              return gt(n.ordinalNumber(t, { unit: "year" }), r);
            default:
              return gt(kt(e.length, t), r);
          }
        }
        validate(t, e) {
          return e.isTwoDigitYear || e.year > 0;
        }
        set(t, e, n, r) {
          const o = Dt(t, r);
          if (n.isTwoDigitYear) {
            const e = St(n.year, o);
            return (
              t.setFullYear(e, 0, r.firstWeekContainsDate),
              t.setHours(0, 0, 0, 0),
              Et(t, r)
            );
          }
          const a = "era" in e && 1 !== e.era ? 1 - n.year : n.year;
          return (
            t.setFullYear(a, 0, r.firstWeekContainsDate),
            t.setHours(0, 0, 0, 0),
            Et(t, r)
          );
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ];
      })(),
      R: new (class extends $ {
        priority = 130;
        parse(t, e) {
          return vt("R" === e ? 4 : e.length, t);
        }
        set(t, e, n) {
          const r = H(t, 0);
          return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Tt(r);
        }
        incompatibleTokens = [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      u: new (class extends $ {
        priority = 130;
        parse(t, e) {
          return vt("u" === e ? 4 : e.length, t);
        }
        set(t, e, n) {
          return t.setFullYear(n, 0, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      Q: new (class extends $ {
        priority = 120;
        parse(t, e, n) {
          switch (e) {
            case "Q":
            case "QQ":
              return kt(e.length, t);
            case "Qo":
              return n.ordinalNumber(t, { unit: "quarter" });
            case "QQQ":
              return (
                n.quarter(t, { width: "abbreviated", context: "formatting" }) ||
                n.quarter(t, { width: "narrow", context: "formatting" })
              );
            case "QQQQQ":
              return n.quarter(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.quarter(t, { width: "wide", context: "formatting" }) ||
                n.quarter(t, { width: "abbreviated", context: "formatting" }) ||
                n.quarter(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 4;
        }
        set(t, e, n) {
          return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      q: new (class extends $ {
        priority = 120;
        parse(t, e, n) {
          switch (e) {
            case "q":
            case "qq":
              return kt(e.length, t);
            case "qo":
              return n.ordinalNumber(t, { unit: "quarter" });
            case "qqq":
              return (
                n.quarter(t, { width: "abbreviated", context: "standalone" }) ||
                n.quarter(t, { width: "narrow", context: "standalone" })
              );
            case "qqqqq":
              return n.quarter(t, { width: "narrow", context: "standalone" });
            default:
              return (
                n.quarter(t, { width: "wide", context: "standalone" }) ||
                n.quarter(t, { width: "abbreviated", context: "standalone" }) ||
                n.quarter(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 4;
        }
        set(t, e, n) {
          return t.setMonth(3 * (n - 1), 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      M: new (class extends $ {
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
        priority = 110;
        parse(t, e, n) {
          const r = (t) => t - 1;
          switch (e) {
            case "M":
              return gt(yt(R, t), r);
            case "MM":
              return gt(kt(2, t), r);
            case "Mo":
              return gt(n.ordinalNumber(t, { unit: "month" }), r);
            case "MMM":
              return (
                n.month(t, { width: "abbreviated", context: "formatting" }) ||
                n.month(t, { width: "narrow", context: "formatting" })
              );
            case "MMMMM":
              return n.month(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.month(t, { width: "wide", context: "formatting" }) ||
                n.month(t, { width: "abbreviated", context: "formatting" }) ||
                n.month(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
        }
      })(),
      L: new (class extends $ {
        priority = 110;
        parse(t, e, n) {
          const r = (t) => t - 1;
          switch (e) {
            case "L":
              return gt(yt(R, t), r);
            case "LL":
              return gt(kt(2, t), r);
            case "Lo":
              return gt(n.ordinalNumber(t, { unit: "month" }), r);
            case "LLL":
              return (
                n.month(t, { width: "abbreviated", context: "standalone" }) ||
                n.month(t, { width: "narrow", context: "standalone" })
              );
            case "LLLLL":
              return n.month(t, { width: "narrow", context: "standalone" });
            default:
              return (
                n.month(t, { width: "wide", context: "standalone" }) ||
                n.month(t, { width: "abbreviated", context: "standalone" }) ||
                n.month(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      w: new (class extends $ {
        priority = 100;
        parse(t, e, n) {
          switch (e) {
            case "w":
              return yt(X, t);
            case "wo":
              return n.ordinalNumber(t, { unit: "week" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 53;
        }
        set(t, e, n, r) {
          return Et(
            (function (t, e, n) {
              const r = F(t, n?.in),
                o = jt(r, n) - e;
              return r.setDate(r.getDate() - 7 * o), F(r, n?.in);
            })(t, n, r),
            r,
          );
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ];
      })(),
      I: new (class extends $ {
        priority = 100;
        parse(t, e, n) {
          switch (e) {
            case "I":
              return yt(X, t);
            case "Io":
              return n.ordinalNumber(t, { unit: "week" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 53;
        }
        set(t, e, n) {
          return Tt(Pt(t, n));
        }
        incompatibleTokens = [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      d: new (class extends $ {
        priority = 90;
        subPriority = 1;
        parse(t, e, n) {
          switch (e) {
            case "d":
              return yt(z, t);
            case "do":
              return n.ordinalNumber(t, { unit: "date" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          const n = Ct(t.getFullYear()),
            r = t.getMonth();
          return n ? e >= 1 && e <= qt[r] : e >= 1 && e <= Mt[r];
        }
        set(t, e, n) {
          return t.setDate(n), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      D: new (class extends $ {
        priority = 90;
        subpriority = 1;
        parse(t, e, n) {
          switch (e) {
            case "D":
            case "DD":
              return yt(U, t);
            case "Do":
              return n.ordinalNumber(t, { unit: "date" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return Ct(t.getFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
        }
        set(t, e, n) {
          return t.setMonth(0, n), t.setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      E: new (class extends $ {
        priority = 90;
        parse(t, e, n) {
          switch (e) {
            case "E":
            case "EE":
            case "EEE":
              return (
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            case "EEEEE":
              return n.day(t, { width: "narrow", context: "formatting" });
            case "EEEEEE":
              return (
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "formatting" }) ||
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Nt(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
      })(),
      e: new (class extends $ {
        priority = 90;
        parse(t, e, n, r) {
          const o = (t) => {
            const e = 7 * Math.floor((t - 1) / 7);
            return ((t + r.weekStartsOn + 6) % 7) + e;
          };
          switch (e) {
            case "e":
            case "ee":
              return gt(kt(e.length, t), o);
            case "eo":
              return gt(n.ordinalNumber(t, { unit: "day" }), o);
            case "eee":
              return (
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            case "eeeee":
              return n.day(t, { width: "narrow", context: "formatting" });
            case "eeeeee":
              return (
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "formatting" }) ||
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                n.day(t, { width: "short", context: "formatting" }) ||
                n.day(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Nt(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ];
      })(),
      c: new (class extends $ {
        priority = 90;
        parse(t, e, n, r) {
          const o = (t) => {
            const e = 7 * Math.floor((t - 1) / 7);
            return ((t + r.weekStartsOn + 6) % 7) + e;
          };
          switch (e) {
            case "c":
            case "cc":
              return gt(kt(e.length, t), o);
            case "co":
              return gt(n.ordinalNumber(t, { unit: "day" }), o);
            case "ccc":
              return (
                n.day(t, { width: "abbreviated", context: "standalone" }) ||
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
            case "ccccc":
              return n.day(t, { width: "narrow", context: "standalone" });
            case "cccccc":
              return (
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
            default:
              return (
                n.day(t, { width: "wide", context: "standalone" }) ||
                n.day(t, { width: "abbreviated", context: "standalone" }) ||
                n.day(t, { width: "short", context: "standalone" }) ||
                n.day(t, { width: "narrow", context: "standalone" })
              );
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 6;
        }
        set(t, e, n, r) {
          return (t = Nt(t, n, r)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ];
      })(),
      i: new (class extends $ {
        priority = 90;
        parse(t, e, n) {
          const r = (t) => (0 === t ? 7 : t);
          switch (e) {
            case "i":
            case "ii":
              return kt(e.length, t);
            case "io":
              return n.ordinalNumber(t, { unit: "day" });
            case "iii":
              return gt(
                n.day(t, { width: "abbreviated", context: "formatting" }) ||
                  n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            case "iiiii":
              return gt(
                n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            case "iiiiii":
              return gt(
                n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
            default:
              return gt(
                n.day(t, { width: "wide", context: "formatting" }) ||
                  n.day(t, { width: "abbreviated", context: "formatting" }) ||
                  n.day(t, { width: "short", context: "formatting" }) ||
                  n.day(t, { width: "narrow", context: "formatting" }),
                r,
              );
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 7;
        }
        set(t, e, n) {
          return (t = Lt(t, n)).setHours(0, 0, 0, 0), t;
        }
        incompatibleTokens = [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ];
      })(),
      a: new (class extends $ {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "a":
            case "aa":
            case "aaa":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "aaaaa":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(xt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
      })(),
      b: new (class extends $ {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "b":
            case "bb":
            case "bbb":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "bbbbb":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(xt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
      })(),
      B: new (class extends $ {
        priority = 80;
        parse(t, e, n) {
          switch (e) {
            case "B":
            case "BB":
            case "BBB":
              return (
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) || n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
            case "BBBBB":
              return n.dayPeriod(t, { width: "narrow", context: "formatting" });
            default:
              return (
                n.dayPeriod(t, { width: "wide", context: "formatting" }) ||
                n.dayPeriod(t, {
                  width: "abbreviated",
                  context: "formatting",
                }) ||
                n.dayPeriod(t, { width: "narrow", context: "formatting" })
              );
          }
        }
        set(t, e, n) {
          return t.setHours(xt(n), 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "t", "T"];
      })(),
      h: new (class extends $ {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "h":
              return yt(_, t);
            case "ho":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 12;
        }
        set(t, e, n) {
          const r = t.getHours() >= 12;
          return (
            r && n < 12
              ? t.setHours(n + 12, 0, 0, 0)
              : r || 12 !== n
                ? t.setHours(n, 0, 0, 0)
                : t.setHours(0, 0, 0, 0),
            t
          );
        }
        incompatibleTokens = ["H", "K", "k", "t", "T"];
      })(),
      H: new (class extends $ {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "H":
              return yt(V, t);
            case "Ho":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 23;
        }
        set(t, e, n) {
          return t.setHours(n, 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
      })(),
      K: new (class extends $ {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "K":
              return yt(Z, t);
            case "Ko":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 11;
        }
        set(t, e, n) {
          return (
            t.getHours() >= 12 && n < 12
              ? t.setHours(n + 12, 0, 0, 0)
              : t.setHours(n, 0, 0, 0),
            t
          );
        }
        incompatibleTokens = ["h", "H", "k", "t", "T"];
      })(),
      k: new (class extends $ {
        priority = 70;
        parse(t, e, n) {
          switch (e) {
            case "k":
              return yt(K, t);
            case "ko":
              return n.ordinalNumber(t, { unit: "hour" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 1 && e <= 24;
        }
        set(t, e, n) {
          const r = n <= 24 ? n % 24 : n;
          return t.setHours(r, 0, 0, 0), t;
        }
        incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
      })(),
      m: new (class extends $ {
        priority = 60;
        parse(t, e, n) {
          switch (e) {
            case "m":
              return yt(tt, t);
            case "mo":
              return n.ordinalNumber(t, { unit: "minute" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 59;
        }
        set(t, e, n) {
          return t.setMinutes(n, 0, 0), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      s: new (class extends $ {
        priority = 50;
        parse(t, e, n) {
          switch (e) {
            case "s":
              return yt(et, t);
            case "so":
              return n.ordinalNumber(t, { unit: "second" });
            default:
              return kt(e.length, t);
          }
        }
        validate(t, e) {
          return e >= 0 && e <= 59;
        }
        set(t, e, n) {
          return t.setSeconds(n, 0), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      S: new (class extends $ {
        priority = 30;
        parse(t, e) {
          return gt(kt(e.length, t), (t) =>
            Math.trunc(t * Math.pow(10, 3 - e.length)),
          );
        }
        set(t, e, n) {
          return t.setMilliseconds(n), t;
        }
        incompatibleTokens = ["t", "T"];
      })(),
      X: new (class extends $ {
        priority = 10;
        parse(t, e) {
          switch (e) {
            case "X":
              return bt(ut, t);
            case "XX":
              return bt(mt, t);
            case "XXXX":
              return bt(pt, t);
            case "XXXXX":
              return bt(ft, t);
            default:
              return bt(ht, t);
          }
        }
        set(t, e, n) {
          return e.timestampIsSet ? t : H(t, t.getTime() - Ot(t) - n);
        }
        incompatibleTokens = ["t", "T", "x"];
      })(),
      x: new (class extends $ {
        priority = 10;
        parse(t, e) {
          switch (e) {
            case "x":
              return bt(ut, t);
            case "xx":
              return bt(mt, t);
            case "xxxx":
              return bt(pt, t);
            case "xxxxx":
              return bt(ft, t);
            default:
              return bt(ht, t);
          }
        }
        set(t, e, n) {
          return e.timestampIsSet ? t : H(t, t.getTime() - Ot(t) - n);
        }
        incompatibleTokens = ["t", "T", "X"];
      })(),
      t: new (class extends $ {
        priority = 40;
        parse(t) {
          return wt(t);
        }
        set(t, e, n) {
          return [H(t, 1e3 * n), { timestampIsSet: !0 }];
        }
        incompatibleTokens = "*";
      })(),
      T: new (class extends $ {
        priority = 20;
        parse(t) {
          return wt(t);
        }
        set(t, e, n) {
          return [H(t, n), { timestampIsSet: !0 }];
        }
        incompatibleTokens = "*";
      })(),
    },
    Ht = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Yt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    Wt = /^'([^]*?)'?$/,
    Ft = /''/g,
    Jt = /\S/,
    Qt = /[a-zA-Z]/;
  function Gt(t, e, n, r) {
    const o = () => H(r?.in || n, NaN),
      a = Object.assign({}, W()),
      i = r?.locale ?? a.locale ?? D,
      s =
        r?.firstWeekContainsDate ??
        r?.locale?.options?.firstWeekContainsDate ??
        a.firstWeekContainsDate ??
        a.locale?.options?.firstWeekContainsDate ??
        1,
      c =
        r?.weekStartsOn ??
        r?.locale?.options?.weekStartsOn ??
        a.weekStartsOn ??
        a.locale?.options?.weekStartsOn ??
        0;
    if (!e) return t ? o() : F(n, r?.in);
    const d = { firstWeekContainsDate: s, weekStartsOn: c, locale: i },
      l = [new G(r?.in, n)],
      u = e
        .match(Yt)
        .map((t) => {
          const e = t[0];
          return e in I ? (0, I[e])(t, i.formatLong) : t;
        })
        .join("")
        .match(Ht),
      m = [];
    for (let n of u) {
      !r?.useAdditionalWeekYearTokens && N(n) && L(n, e, t),
        !r?.useAdditionalDayOfYearTokens && A(n) && L(n, e, t);
      const a = n[0],
        s = Bt[a];
      if (s) {
        const { incompatibleTokens: e } = s;
        if (Array.isArray(e)) {
          const t = m.find((t) => e.includes(t.token) || t.token === a);
          if (t)
            throw new RangeError(
              `The format string mustn't contain \`${t.fullToken}\` and \`${n}\` at the same time`,
            );
        } else if ("*" === s.incompatibleTokens && m.length > 0)
          throw new RangeError(
            `The format string mustn't contain \`${n}\` and any other token at the same time`,
          );
        m.push({ token: a, fullToken: n });
        const r = s.run(t, n, i.match, d);
        if (!r) return o();
        l.push(r.setter), (t = r.rest);
      } else {
        if (a.match(Qt))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              a +
              "`",
          );
        if (
          ("''" === n
            ? (n = "'")
            : "'" === a && (n = n.match(Wt)[1].replace(Ft, "'")),
          0 !== t.indexOf(n))
        )
          return o();
        t = t.slice(n.length);
      }
    }
    if (t.length > 0 && Jt.test(t)) return o();
    const p = l
      .map((t) => t.priority)
      .sort((t, e) => e - t)
      .filter((t, e, n) => n.indexOf(t) === e)
      .map((t) =>
        l
          .filter((e) => e.priority === t)
          .sort((t, e) => e.subPriority - t.subPriority),
      )
      .map((t) => t[0]);
    let h = F(n, r?.in);
    if (isNaN(+h)) return o();
    const f = {};
    for (const t of p) {
      if (!t.validate(h, d)) return o();
      const e = t.set(h, f, d);
      Array.isArray(e) ? ((h = e[0]), Object.assign(f, e[1])) : (h = e);
    }
    return h;
  }
  function $t(t) {
    return H(t, Date.now());
  }
  function Rt(t, ...e) {
    const n = H.bind(null, t || e.find((t) => "object" == typeof t));
    return e.map(n);
  }
  function zt(t, e) {
    const n = F(t, e?.in);
    return n.setHours(0, 0, 0, 0), n;
  }
  function Ut(t, e, n) {
    const [r, o] = Rt(n?.in, t, e);
    return +zt(r) == +zt(o);
  }
  function Xt(t, e) {
    return (function (t, e, n) {
      const [r, o] = Rt(n?.in, t, e);
      return +Et(r, n) == +Et(o, n);
    })(H(e?.in || t, t), $t(e?.in || t), e);
  }
  const Vt = new Date(),
    Kt = [],
    Zt = [],
    _t = [],
    te = [],
    ee = [],
    ne = [];
  function re() {
    (Kt.length = 0),
      (Zt.length = 0),
      (_t.length = 0),
      (te.length = 0),
      (ee.length = 0),
      (ne.length = 0),
      console.log("ohlala");
    const t = JSON.parse(localStorage.getItem("projects"));
    console.log("nhan chua"),
      t.forEach((t) => {
        t.taskList.length > 0 &&
          t.taskList.forEach((t) => {
            console.log(t.taskDuedate);
            const e = Gt(t.taskDuedate, "yyyy-MM-dd", new Date());
            !(function (t, e) {
              return Ut(H(e?.in || t, t), $t(e?.in || t));
            })(e) || "not complete" !== t.taskState
              ? (function (t, e) {
                  return Ut(t, At($t(e?.in || t), 1), e);
                })(e) && "not complete" === t.taskState
                ? Zt.push(t)
                : Xt(e) && "not complete" === t.taskState
                  ? _t.push(t)
                  : Xt(e) || "not complete" !== t.taskState || te.push(t)
              : (console.log("today ne"), Kt.push(t)),
              "completed" === t.taskState && ne.push(t);
          });
      });
  }
  function oe(t, e, n) {
    return e > n ? t.substring(0, n) + "..." : t;
  }
  console.log(Vt);
  const ae = (t) => {
      document.querySelector("body").innerHTML = "";
      const e = se(),
        n = ce();
      e.headerDOMGenerate(),
        e.mainDOMGenerate(),
        e.mainSidebarDOMGenerate(),
        e.renderMainContent(),
        e.footerDOMGenerate();
      const r = document.querySelectorAll(".projects h3");
      n.addDataIntoElement(r),
        n.displayProject(),
        n.addIconProjectClick(),
        n.printProjects(),
        n.taskThreeDotsIconClick(),
        n.clickOutsideOfProjectOptionBox(),
        re(),
        n.renderCategory(),
        t && n.renderProject(t);
    },
    ie = () => {
      document.querySelector("body").innerHTML = "";
      const t = se(),
        e = ce();
      t.headerDOMGenerate(),
        t.mainDOMGenerate(),
        t.mainSidebarDOMGenerate(),
        t.renderMainContent(),
        t.footerDOMGenerate();
      const n = document.querySelectorAll(".projects h3");
      e.addDataIntoElement(n),
        e.displayProject(),
        e.addIconProjectClick(),
        e.printProjects(),
        e.clickOutsideOfProjectOptionBox(),
        re(),
        e.renderCategory();
    },
    se = () => {
      const t = document.querySelector("body");
      return {
        headerDOMGenerate: function () {
          const e = document.createElement("header"),
            n = document.createElement("h1");
          (n.textContent = "To Do List"), e.appendChild(n), t.appendChild(e);
        },
        mainDOMGenerate: function () {
          const e = document.createElement("main");
          t.appendChild(e);
        },
        footerDOMGenerate: function () {
          const e = document.createElement("footer"),
            n = document.createElement("p");
          n.textContent = "Created By Michael Ben";
          const r = document.createElement("a");
          r.href = "https://github.com/BenerdAndrian";
          const o = document.createElement("img");
          (o.src = f),
            r.appendChild(o),
            e.appendChild(n),
            e.appendChild(r),
            t.appendChild(e);
        },
        mainSidebarDOMGenerate: function () {
          const t = document.querySelector("main"),
            e = document.createElement("div");
          e.setAttribute("class", "projects"),
            (function (t) {
              const e = JSON.parse(localStorage.getItem("projects")) || [];
              console.log(e);
              const n = document.createElement("div");
              n.setAttribute("class", "projectCategory");
              const r = document.createElement("h2");
              (r.textContent = "Projects"), n.appendChild(r);
              const o = document.createElement("img");
              (o.src = p),
                o.setAttribute("class", "addIconProject"),
                n.appendChild(o);
              const a = document.createElement("ul");
              e.forEach((t) => {
                const e = document.createElement("img");
                (e.src = m), e.setAttribute("class", "projectThreeDotIcon");
                const n = document.createElement("li"),
                  r = document.createElement("h3"),
                  o = oe(t.name, t.name.length, 25);
                (r.textContent = `${o}`),
                  n.appendChild(r),
                  n.appendChild(e),
                  a.appendChild(n);
              }),
                t.appendChild(n),
                t.appendChild(a);
            })(e),
            t.appendChild(e);
        },
        renderMainContent: function () {
          const t = document.querySelector("main"),
            e = document.createElement("div");
          e.setAttribute("class", "mainContent"),
            t.appendChild(e),
            (function (t) {
              const e = document.createElement("div");
              e.setAttribute("class", "category");
              const n = document.createElement("ul");
              [
                "Inbox",
                "Today",
                "Tomorrow",
                "This Week",
                "Upcoming",
                "Complete",
              ].forEach((t) => {
                const e = document.createElement("h3"),
                  r = document.createElement("li");
                r.setAttribute("class", `${t}`);
                const o = document.createElement("img"),
                  a = (function (t) {
                    let e;
                    switch (t) {
                      case "Inbox":
                        e = i;
                        break;
                      case "Today":
                        e = c;
                        break;
                      case "Tomorrow":
                        e = l;
                        break;
                      case "This Week":
                        e = s;
                        break;
                      case "Complete":
                        e = d;
                        break;
                      case "Upcoming":
                        e = u;
                    }
                    return e;
                  })(t);
                (o.src = a),
                  (o.alt = `${t} icon image.`),
                  (e.textContent = t),
                  r.appendChild(o),
                  r.appendChild(e),
                  n.appendChild(r);
              }),
                e.appendChild(n),
                t.appendChild(e);
            })(e),
            (function () {
              const t = document.querySelector(".mainContent"),
                e = document.createElement("div");
              e.setAttribute("class", "mainPart"), t.appendChild(e);
            })();
        },
        find: function (t) {
          return 2 * t;
        },
      };
    },
    ce = () => {
      function t(t) {
        t.forEach((t, e) => {
          t.setAttribute("data-index", e), console.log(e);
        });
      }
      function e(e) {
        const r = JSON.parse(localStorage.getItem("projects")).find(
          (t) => t.id === Number(e),
        );
        console.log(r);
        const o = document.querySelector(".mainPart"),
          a = document.createElement("ul");
        a.setAttribute("class", "taskList"), o.appendChild(a);
        const i = document.createElement("div");
        i.setAttribute("class", "taskHeader");
        const s = document.createElement("h2"),
          d = oe(r.name, r.name.length, 60);
        (s.textContent = d), i.appendChild(s);
        const u = document.createElement("img");
        if (
          ((u.src = g),
          (u.alt = "add Task Icon"),
          u.setAttribute("class", "addTaskIcon"),
          i.appendChild(u),
          o.insertBefore(i, a),
          r)
        ) {
          const o = r.taskList;
          console.log(o),
            o.length > 0 &&
              (console.log(o), n(o), t(document.querySelectorAll(".task"))),
            l(e, !1),
            p(e),
            c();
        }
      }
      function n(t) {
        const e = document.querySelector(".taskList");
        document.querySelector(".mainPart").appendChild(e),
          t.forEach((n, r) => {
            const o = document.createElement("li");
            o.setAttribute("class", "task");
            const a = document.createElement("p");
            a.setAttribute("class", "priorityLevelUI");
            const i =
              "High" === (s = n.taskPriority)
                ? "rgb(189, 20, 20)"
                : "Medium" === s
                  ? "rgb(185, 159, 13)"
                  : "green";
            var s;
            a.style.backgroundColor = `${i}`;
            const c = document.createElement("input");
            (c.type = "checkbox"), c.setAttribute("class", "complete");
            const d = document.createElement("p"),
              l = document.createElement("p"),
              u = document.createElement("p"),
              p = document.createElement("p"),
              h = document.createElement("img");
            (h.src = m), h.setAttribute("class", "taskThreeDotIcon");
            const f = n.taskName.length,
              g = n.taskDetail.length,
              y = oe(n.taskName, f, 20),
              b = oe(n.taskDetail, g, 20);
            (d.textContent = y),
              (l.textContent = n.taskPriority),
              (u.textContent = n.taskDuedate),
              (p.textContent = b),
              o.appendChild(a),
              o.appendChild(c),
              o.appendChild(d),
              o.appendChild(l),
              o.appendChild(u),
              o.appendChild(p),
              o.appendChild(h),
              e.appendChild(o),
              (function (t, e) {
                "completed" === t &&
                  ((e.checked = !0), e.parentNode.classList.add("discarded"));
              })(n.taskState, c),
              (function (t, e, n, r) {
                r.addEventListener("click", () => {
                  !(function (t) {
                    t.parentNode.classList.toggle("discarded");
                  })(r);
                  const o = (function (t) {
                    return !!t.parentNode.classList.contains("discarded");
                  })(r);
                  !(function (t, e, n) {
                    const r = JSON.parse(localStorage.getItem("projects")),
                      o = t[e];
                    console.log("day la task: " + o.taskState),
                      r.forEach((t, e) => {
                        Number(o.projectID) === e &&
                          ((t.taskList[o.taskID].taskState = n
                            ? "completed"
                            : "not complete"),
                          localStorage.setItem("projects", JSON.stringify(r)));
                      });
                  })(n, e, o),
                    ae(t);
                });
              })(n.projectID, r, t, c);
          });
      }
      function a() {
        const t = document.createElement("img");
        (t.src = h),
          (t.alt = "close icon"),
          t.setAttribute("class", "closeBtn");
        const e = document.querySelector("body"),
          n = document.createElement("form");
        n.setAttribute("class", "projectAddBoard");
        const r = document.createElement("label");
        r.setAttribute("for", "projectName"),
          (r.innerText = "Project's Name: ");
        const o = document.createElement("input");
        o.setAttribute("id", "projectName"),
          o.setAttribute("type", "text"),
          (o.required = !0);
        const a = document.createElement("button");
        a.setAttribute("class", "projectSubmitBtn"),
          a.setAttribute("value", "submit"),
          (a.textContent = "Submit"),
          n.appendChild(t),
          n.appendChild(r),
          n.appendChild(o),
          n.appendChild(a),
          e.appendChild(n);
      }
      function i() {
        const t = document.createElement("div");
        t.setAttribute("class", "blurLayer"),
          document.querySelector("body").appendChild(t),
          console.log("sole sole");
      }
      function s(t, e) {
        console.log("i"),
          t &&
            (console.log(!0),
            t.addEventListener("click", () => {
              !(function (t) {
                t.remove(), document.querySelector(".blurLayer").remove();
              })(e);
            }));
      }
      function c() {
        document.querySelectorAll(".projectThreeDotIcon").forEach((t, e) => {
          t.addEventListener("click", () => {
            const e = t.previousElementSibling,
              n = Number(e.dataset.index);
            d(),
              (function (t) {
                document.querySelectorAll(".projects li").forEach((e) => {
                  const n = e.firstElementChild;
                  if (Number(n.dataset.index) === t) {
                    console.log("fn");
                    const t = document.createElement("ul");
                    t.setAttribute("class", "projectOptionBox");
                    const n = document.createElement("li"),
                      r = document.createElement("li"),
                      o = document.createElement("button"),
                      a = document.createElement("button");
                    (o.textContent = "Update"),
                      (a.textContent = "Delete"),
                      o.setAttribute("class", "projectUpdateBtn"),
                      a.setAttribute("class", "projectDeleteBtn"),
                      n.appendChild(o),
                      r.appendChild(a),
                      t.appendChild(n),
                      t.appendChild(r),
                      e.appendChild(t),
                      console.log(e),
                      console.log("fen");
                  }
                }),
                  (function (t) {
                    document
                      .querySelector(".projectUpdateBtn")
                      .addEventListener("click", () => {
                        i(),
                          a(),
                          (function (t) {
                            const e = JSON.parse(
                              localStorage.getItem("projects"),
                            );
                            document
                              .querySelector(".projectSubmitBtn")
                              .addEventListener("click", () => {
                                let n;
                                const r =
                                  document.querySelector("#projectName");
                                r.value
                                  ? ((n = r.value),
                                    console.log(n),
                                    e.forEach((r, o) => {
                                      console.log(r),
                                        t === o &&
                                          ((r.name = n), console.log(r.name)),
                                        localStorage.setItem(
                                          "projects",
                                          JSON.stringify(e),
                                        ),
                                        ae(t),
                                        c();
                                    }))
                                  : r.reportValidity();
                              }),
                              console.log(e);
                          })(t),
                          s(
                            document.querySelector(".closeBtn"),
                            document.querySelector(".projectAddBoard"),
                          );
                      });
                  })(t),
                  (function (t) {
                    const e = document.querySelector(".projectDeleteBtn"),
                      n = JSON.parse(localStorage.getItem("projects"));
                    e.addEventListener("click", () => {
                      n.forEach((e, r) => {
                        r === t &&
                          (n.splice(r, 1),
                          localStorage.setItem("projects", JSON.stringify(n)),
                          o(),
                          ae(t),
                          c());
                      });
                    });
                  })(t);
              })(n);
          });
        });
      }
      function d() {
        const t = document.querySelectorAll(".projectOptionBox");
        t &&
          t.forEach((t) => {
            t.remove();
          });
      }
      function l(t, e) {
        document.querySelector(".addTaskIcon").addEventListener("click", () => {
          i(),
            u(0, "Add Task", e),
            (function (t) {
              const e = JSON.parse(localStorage.getItem("projects")),
                n = document.querySelector(".taskAddBoardBtn"),
                r = document.querySelector(".taskAddBoard"),
                o = document.querySelector("#taskNameInput"),
                a = document.querySelector("#taskPriorityInput"),
                i = document.querySelector("#taskDuedateInput"),
                s = document.querySelector("#taskDetailInput");
              -1 != t
                ? n.addEventListener("click", (n) => {
                    n.preventDefault(),
                      r.checkValidity()
                        ? (console.log(r.checkValidity()),
                          console.log("hello kitty"),
                          e.forEach((n, r) => {
                            if (Number(t) === r) {
                              console.log("toi bi khung");
                              const r = n.taskList.length;
                              n.taskList.push({
                                taskID: r,
                                taskName: o.value,
                                taskPriority: a.value,
                                taskDuedate: i.value,
                                taskDetail: s.value,
                                taskState: "not complete",
                                projectID: t,
                              }),
                                localStorage.setItem(
                                  "projects",
                                  JSON.stringify(e),
                                ),
                                ae(t),
                                p(t);
                            }
                          }))
                        : r.reportValidity();
                  })
                : n.addEventListener("click", (t) => {
                    if ((t.preventDefault(), r.checkValidity())) {
                      const t = document.querySelector("#projectChoosing"),
                        n = Number(t.options[t.selectedIndex].dataset.index);
                      console.log(n),
                        console.log(t),
                        e.forEach((t) => {
                          if (n === t.id) {
                            const r = t.taskList.length;
                            t.taskList.push({
                              taskID: r,
                              taskName: o.value,
                              taskPriority: a.value,
                              taskDuedate: i.value,
                              taskDetail: s.value,
                              taskState: "not complete",
                              projectID: n,
                            }),
                              localStorage.setItem(
                                "projects",
                                JSON.stringify(e),
                              ),
                              ae(n);
                          }
                        });
                    }
                  });
            })(t);
        });
      }
      function u(t, e, n) {
        const r = document.createElement("div");
        r.setAttribute("class", "btnTaskBoard");
        const o = document.querySelector("body"),
          a = document.createElement("h2");
        a.textContent = e;
        const i = document.createElement("form");
        i.setAttribute("class", "taskAddBoard");
        const c = document.createElement("label"),
          d = document.createElement("label"),
          l = document.createElement("label"),
          u = document.createElement("label"),
          m = document.createElement("input"),
          p = document.createElement("select"),
          h = document.createElement("option"),
          f = document.createElement("option"),
          g = document.createElement("option");
        (h.textContent = "High"),
          (f.textContent = "Medium"),
          (g.textContent = "Low"),
          p.appendChild(h),
          p.appendChild(f),
          p.appendChild(g);
        const y = document.createElement("input"),
          b = document.createElement("textarea");
        (b.rows = 5),
          (b.cols = 30),
          (b.placeholder = "Describe Task Information Or Task's Notes..."),
          (m.required = !0),
          (p.required = !0),
          (y.required = !0);
        const w = document.createElement("button"),
          k = document.createElement("button");
        w.setAttribute("class", "taskAddBoardCloseBtn"),
          k.setAttribute("class", "taskAddBoardBtn"),
          (k.textContent = e),
          (w.textContent = "Cancel"),
          (c.htmlFor = "taskNameInput"),
          (d.htmlFor = "taskPriorityInput"),
          (l.htmlFor = "taskDuedateInput"),
          (u.htmlFor = "taskDetailInput"),
          (c.textContent = "Task's Name: "),
          (d.textContent = "Task's Priority: "),
          (l.textContent = "Task's Duedate: "),
          (u.textContent = "Task's Detail: "),
          m.setAttribute("id", "taskNameInput"),
          p.setAttribute("id", "taskPriorityInput"),
          y.setAttribute("id", "taskDuedateInput"),
          b.setAttribute("id", "taskDetailInput"),
          (m.type = "text"),
          (y.type = "date");
        const v = new Date().toISOString().split("T")[0];
        if (
          ((y.min = v),
          r.appendChild(k),
          r.appendChild(w),
          i.appendChild(a),
          i.appendChild(c),
          i.appendChild(m),
          i.appendChild(d),
          i.appendChild(p),
          i.appendChild(l),
          i.appendChild(y),
          i.appendChild(u),
          i.appendChild(b),
          i.appendChild(r),
          o.appendChild(i),
          s(w, i),
          n)
        ) {
          const t = document.createElement("label");
          (t.textContent = "Choose Project to insert: "),
            (t.HTMLFor = "projectChoosing");
          const e = document.createElement("select");
          e.setAttribute("id", "projectChoosing"),
            JSON.parse(localStorage.getItem("projects")).forEach((t, n) => {
              const r = document.createElement("option");
              (r.innerText = t.name),
                r.setAttribute("class", "projectOption"),
                r.setAttribute("data-index", n),
                e.appendChild(r);
            }),
            i.appendChild(t),
            i.appendChild(e);
        }
      }
      function p(t) {
        document
          .querySelectorAll(".taskList .task .taskThreeDotIcon")
          .forEach((e) => {
            e.addEventListener("click", (e) => {
              const n = Number(e.target.parentNode.dataset.index);
              d(),
                (function (t, e) {
                  f(e), y(t, e), b(t, e);
                })(t, n);
            });
          });
      }
      function f(t) {
        console.log("kakakakaakaka"),
          document.querySelectorAll(".taskList .task").forEach((e, n) => {
            if ((console.log("kikiki"), console.log(n), n === Number(t))) {
              console.log("fn");
              const t = document.createElement("ul");
              t.setAttribute("class", "projectOptionBox");
              const n = document.createElement("li"),
                r = document.createElement("li"),
                o = document.createElement("button"),
                a = document.createElement("button");
              (o.textContent = "Update"),
                (a.textContent = "Delete"),
                o.setAttribute("class", "taskUpdateBtn"),
                a.setAttribute("class", "taskDeleteBtn"),
                n.appendChild(o),
                r.appendChild(a),
                t.appendChild(n),
                t.appendChild(r),
                e.appendChild(t),
                console.log("fen");
            }
          });
      }
      function y(t, e) {
        document
          .querySelector(".taskUpdateBtn")
          .addEventListener("click", () => {
            i(),
              (function (t, e) {
                console.log(t);
                const n = JSON.parse(localStorage.getItem("projects"));
                console.log(t), u(0, "Update Task", !1);
                const r = document.querySelector("#taskNameInput"),
                  o = document.querySelector("#taskPriorityInput"),
                  a = document.querySelector("#taskDuedateInput"),
                  i = document.querySelector("#taskDetailInput");
                n.forEach((n, s) => {
                  if (s === Number(t)) {
                    console.log("index can tim " + e),
                      console.log("task can tim: " + n.taskList[e]);
                    const t = n.taskList[Number(e)];
                    console.log("task can tim: " + t),
                      (r.value = t.taskName),
                      (o.value = t.taskPriority),
                      (a.value = t.taskDuedate),
                      (i.value = t.taskDetail);
                  }
                });
              })(t, e),
              console.log("salim"),
              console.log(t),
              (function (t, e) {
                console.log("duoc ko");
                const n = JSON.parse(localStorage.getItem("projects")),
                  r = document.querySelector(".taskAddBoardBtn"),
                  o = document.querySelector(".taskAddBoard"),
                  a = document.querySelector("#taskNameInput"),
                  i = document.querySelector("#taskPriorityInput"),
                  s = document.querySelector("#taskDuedateInput"),
                  c = document.querySelector("#taskDetailInput");
                r.addEventListener("click", (r) => {
                  r.preventDefault(),
                    console.log("lolo"),
                    o.checkValidity()
                      ? (console.log("lalisa"),
                        n.forEach((r, o) => {
                          console.log(t),
                            o === Number(t) &&
                              (console.log("mamilll"),
                              (r.taskList[e] = {
                                taskID: e,
                                taskName: a.value,
                                taskPriority: i.value,
                                taskDuedate: s.value,
                                taskDetail: c.value,
                                taskState: "not complete",
                                projectID: t,
                              }),
                              localStorage.setItem(
                                "projects",
                                JSON.stringify(n),
                              ),
                              ae(t),
                              p(t));
                        }))
                      : o.reportValidity();
                });
              })(t, e),
              console.log("rai tham");
          });
      }
      function b(t, e) {
        const n = JSON.parse(localStorage.getItem("projects"));
        document
          .querySelector(".taskDeleteBtn")
          .addEventListener("click", () => {
            console.log("loo"),
              n.forEach((r, o) => {
                Number(t) === o &&
                  (console.log("kep"),
                  r.taskList.splice(e, 1),
                  localStorage.setItem("projects", JSON.stringify(n)),
                  (function (t) {
                    let e = JSON.parse(localStorage.getItem("projects"));
                    e.forEach((n) => {
                      n.id === t &&
                        (n.taskList.forEach((t, e) => {
                          t.taskID = e;
                        }),
                        localStorage.setItem("projects", JSON.stringify(e)));
                    });
                  })(t),
                  ae(t));
              });
          });
      }
      function w(e, r) {
        const o = document.querySelector(".mainPart");
        o.innerHTML = "";
        const a = document.createElement("ul");
        a.setAttribute("class", "taskList"), o.appendChild(a);
        const i = document.createElement("div");
        i.setAttribute("class", "taskHeader");
        const s = document.createElement("h2");
        (s.textContent = e), i.appendChild(s);
        const c = document.createElement("img");
        if (
          ((c.src = g),
          (c.alt = "add Task Icon"),
          c.setAttribute("class", "addTaskIcon"),
          i.appendChild(c),
          o.insertBefore(i, a),
          r)
        ) {
          const e = r;
          e.length > 0 &&
            (console.log(e), n(e), t(document.querySelectorAll(".task"))),
            l(-1, !0),
            (function (t) {
              console.log(t),
                document
                  .querySelectorAll(".taskThreeDotIcon")
                  .forEach((e, n) => {
                    e.addEventListener("click", () => {
                      d(),
                        console.log("vi tri click : " + n),
                        f(n),
                        (function (t, e) {
                          t.forEach((t, n) => {
                            console.log(t),
                              n === e &&
                                (y(t.projectID, t.taskID),
                                b(t.projectID, t.taskID),
                                console.log("linee"));
                          });
                        })(t, n);
                    });
                  });
            })(r);
        }
      }
      return {
        displayProject: function () {
          document.querySelectorAll(".projects h3").forEach((t) => {
            t.addEventListener("click", () => {
              document.querySelector(".mainPart").innerHTML = "";
              const n = t.dataset.index;
              console.log(n), e(n);
            });
          });
        },
        displayCategory: function () {
          document.querySelectorAll(".category li").forEach((t) => {
            t.addEventListener("click", () => {
              console.log(t.innerText);
            });
          });
        },
        addIconProjectClick: function () {
          document
            .querySelector(".addIconProject")
            .addEventListener("click", () => {
              i(), a();
              const t = document.querySelector(".closeBtn");
              !(function () {
                const t = document.querySelector(".projectSubmitBtn"),
                  e = document.querySelector("#projectName");
                t.addEventListener("click", () => {
                  const t = document.querySelector(".projectAddBoard");
                  e.setCustomValidity(""),
                    t.checkValidity()
                      ? (console.log(e.value),
                        (function (t) {
                          let e = JSON.parse(localStorage.getItem("projects"));
                          console.log(e), console.log(e);
                          const n = e.length,
                            a = new r(n, t);
                          e.push(a),
                            o(),
                            localStorage.setItem("projects", JSON.stringify(e));
                        })(e.value),
                        ie(),
                        c())
                      : e.setCustomValidity("this box can not be blank.");
                });
              })(),
                s(t, document.querySelector(".projectAddBoard"));
            });
        },
        printProjects: function () {
          const t = JSON.parse(localStorage.getItem("projects"));
          console.log(t);
        },
        threeDotIconClick: c,
        clickOutsideOfProjectOptionBox: function () {
          document.body.addEventListener("click", (t) => {
            ("IMG" === t.target.tagName &&
              "LI" === t.target.parentNode.tagName) ||
              d();
          });
        },
        addDataIntoElement: t,
        renderProject: e,
        taskThreeDotsIconClick: p,
        renderCategory: function () {
          document.querySelector(".Today").addEventListener("click", () => {
            w("Today", Kt);
          }),
            document
              .querySelector(".Tomorrow")
              .addEventListener("click", () => {
                w("Tomorrow", Zt);
              }),
            document.querySelector(".Week").addEventListener("click", () => {
              w("This Week", _t);
            }),
            document
              .querySelector(".Upcoming")
              .addEventListener("click", () => {
                console.log("nihao"), w("Upcoming", te);
              }),
            document
              .querySelector(".Complete")
              .addEventListener("click", () => {
                w("Complete", ne);
              });
        },
      };
    },
    de = se();
  console.log(de.find(2));
  var le = n(72),
    ue = n.n(le),
    me = n(825),
    pe = n.n(me),
    he = n(659),
    fe = n.n(he),
    ge = n(56),
    ye = n.n(ge),
    be = n(540),
    we = n.n(be),
    ke = n(113),
    ve = n.n(ke),
    xe = n(159),
    Se = {};
  (Se.styleTagTransform = ve()),
    (Se.setAttributes = ye()),
    (Se.insert = fe().bind(null, "head")),
    (Se.domAPI = pe()),
    (Se.insertStyleElement = we()),
    ue()(xe.A, Se),
    xe.A && xe.A.locals && xe.A.locals,
    new r(1, "bake a cakedf"),
    new a(1, "buy sugar", "high", "today", 1),
    new a(2, "buy cream", "medium", "today", 1),
    document.addEventListener("DOMContentLoaded", () => {
      ie();
    }),
    ce().threeDotIconClick(),
    console.log(Kt);
})();
