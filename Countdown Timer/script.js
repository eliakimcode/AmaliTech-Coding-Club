const launchDate = new Date("2025-06-5t00:06:00");
const launchContainer = document.querySelector(".countdown-container");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const currentTime = new Date();
  const timeDifference = launchDate.getTime() - currentTime.getTime();

  if (timeDifference <= 0) {
    countdowncontainer.textContent = "Launch Day";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60 * 60)
  );
  const seconds = Math.floor((timeDifference % (1000 * 60 * 60)) / 1000);

  daysElement.textContent = padZero(days);
  hoursElement.textContent = padZero(hours);
  minutesElement.textContent = padZero(minutes);
  secondsElement.textContent = padZero(seconds);
}

function padZero(num) {
  return;
  num.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();
