const targetDate = new Date("december 28, 2024 11:14:59 UTC").getTime();
console.log("hello", targetDate);

const interval = setInterval(function () {
  const currentDate = new Date().getTime();
    console.log("hi ",currentDate);
  const timeDifference = targetDate - currentDate;
  console.log("difer ",timeDifference);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minuts").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
  if (timeDifference < 0) {
    clearInterval(interval);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "EXPIRED";
    document.getElementById("minuts").innerHTML = "EXPIRED";
    document.getElementById("seconds").innerHTML = "EXPIRED";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
