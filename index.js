const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

function setdate() {
  const now = new Date();

  const getsecond = now.getSeconds();
  const getminute = now.getMinutes();
  const gethours = now.getHours();

  const secondDegree = (getsecond / 60) * 360;
  const minutedegree = (getminute/60)*360;
  const hoursdegree = (gethours/12)*360;

  document.querySelector(".seconds").style.transform = `rotate(${secondDegree}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minutedegree}deg)`;
  document.querySelector(".hour").style.transform = `rotate(${hoursdegree}deg)`;
}

setInterval(setdate, 1000);
