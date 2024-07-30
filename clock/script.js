const modeBtn = document.querySelector(".dark-btn");
const arm = document.querySelectorAll(".arm");
const page = document.querySelector(".page");
const digTime = document.querySelector(".dig-time");
const currDate = document.querySelector(".date");

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
modeBtn.addEventListener("click", () => {
    if(modeBtn.innerText == "Dark Mode"){
        page.style.color = "white";
        page.style.backgroundColor = "black";
        arm[0].style.backgroundColor = "white";
        arm[1].style.backgroundColor = "white";
        modeBtn.innerText = "Light Mode";
        modeBtn.style.backgroundColor = "white";
        modeBtn.style.color = "black";
    }
    else{
        location.reload();
    }
});
function setTime() {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let degreeHr = hour*30-90;
    let degreeMin = min/5*30-90;
    let degreeSec = sec/5*30-90;
    digTime.innerText = `${hour}:${min}:${sec}`;
    arm[0].style.transform = `rotate(${degreeHr}deg)`;
    arm[1].style.transform = `rotate(${degreeMin}deg)`;
    arm[2].style.transform = `rotate(${degreeSec}deg)`;
    currDate.innerText = `${days[day-1]} ${date}/${months[month-1]}/${year}`;
};
setTime();
setInterval(setTime, 1000);
