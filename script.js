//elements for changing the values of time
let workHour = document.getElementById("workHour");
let playHour = document.getElementById("playHour");
let socialHour = document.getElementById("socialHour");
let exerciseHour = document.getElementById("exerciseHour");
let studyHour = document.getElementById("studyHour");
let selfHour = document.getElementById("selfHour");

//elements for changing the value of period
let workPeriod = document.getElementById("workPeriod");
let playPeriod = document.getElementById("playPeriod");
let socialPeriod = document.getElementById("socialPeriod");
let exercisePeriod = document.getElementById("exercisePeriod");
let studyPeriod = document.getElementById("studyPeriod");
let selfPeriod = document.getElementById("selfPeriod");

//buttons to listen the click event
let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");

daily.onclick = () => {
  showTime("daily");
};

weekly.onclick = () => {
  showTime("weekly");
};

monthly.onclick = () => {
  showTime("monthly");
};

//function for updating the values on the DOM
function showTime(time) {
  try {
    // setting the time of events
    workHour.innerText = work[time].current + "Hrs";
    playHour.innerText = play[time].current + "Hrs";
    studyHour.innerText = study[time].current + "Hrs";
    exerciseHour.innerText = exercise[time].current + "Hrs";
    socialHour.innerText = social[time].current + "Hrs";
    selfHour.innerText = self[time].current + "Hrs";

    //setting the period of the events
    workPeriod.innerText = work[time].previous + "Hrs";
    playPeriod.innerText = play[time].previous + "Hrs";
    studyPeriod.innerText = study[time].previous + "Hrs";
    exercisePeriod.innerText = exercise[time].previous + "Hrs";
    socialPeriod.innerText = social[time].previous + "Hrs";
    selfPeriod.innerText = self[time].previous + "Hrs";
  } catch (error) {
    console.log(error);
  }
}

//database for getting the values

(work = {
  daily: {
    current: 5,
    previous: "Yesterday- " + 7,
  },
  weekly: {
    current: 32,
    previous: "Last Week- " + 36,
  },
  monthly: {
    current: 103,
    previous: "Last Month- " + 128,
  },
}),
  (play = {
    daily: {
      current: 1,
      previous: "Yesterday- " + 2,
    },
    weekly: {
      current: 10,
      previous: "Last Week- " + 8,
    },
    monthly: {
      current: 23,
      previous: "Last Month- " + 29,
    },
  }),
  (study = {
    daily: {
      current: 0,
      previous: "Yesterday- " + 1,
    },
    weekly: {
      current: 4,
      previous: "Last Week- " + 7,
    },
    monthly: {
      current: 13,
      previous: "Last Month- " + 19,
    },
  }),
  (exercise = {
    daily: {
      current: 1,
      previous: "Yesterday- " + 1,
    },
    weekly: {
      current: 4,
      previous: "Last Week- " + 5,
    },
    monthly: {
      current: 11,
      previous: "Last Month- " + 18,
    },
  }),
  (social = {
    daily: {
      current: 1,
      previous: "Yesterday- " + 3,
    },
    weekly: {
      current: 5,
      previous: "Last Week- " + 10,
    },
    monthly: {
      current: 21,
      previous: "Last Month- " + 23,
    },
  }),
  (self = {
    daily: {
      current: 0,
      previous: "Yesterday- " + 1,
    },
    weekly: {
      current: 2,
      previous: "Last Week- " + 2,
    },
    monthly: {
      current: 7,
      previous: "Last Month- " + 11,
    },
  });
