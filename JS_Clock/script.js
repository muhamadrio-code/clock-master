function clock() {
  const secondHand = document.querySelector(".second-hand");
  const minsHand = document.querySelector(".mins-hand");
  const hoursHand = document.querySelector(".hours-hand");
  const date = new Date();

  const secondsDeg = (date.getSeconds() / 60) * 360;
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;

  const minsDeg = (date.getMinutes() / 60) * 360;
  minsHand.style.transform = `rotate(${minsDeg}deg)`;

  const hoursDeg = (date.getHours() / 12) * 360 + (minsDeg / 60) * 5;
  hoursHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(clock, 1000);
