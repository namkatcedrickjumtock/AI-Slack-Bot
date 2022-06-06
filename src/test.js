date = new Date()


let ispitchFriday = date.getDay()
let minutes = date.getMinutes()
let isHackthon = date.getHours();
let month = date.getMonth


// console.log(date);

function getMondayOfCurrentWeek() {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
  
    return new Date(today.setDate(first));
  }
  
  // 👇️ Mon Jan 17 2022
  console.log(getMondayOfCurrentWeek());
  