const FirstButton = document.getElementById("button1");
const SecondButton = document.getElementById("button2");
const ThirdButton = document.getElementById("button3");

let count = 0;

FirstButton.onclick = function () {
  count--;
  document.getElementById("first").textContent = count;
};

SecondButton.onclick = function () {
  count = 0;
  document.getElementById("first").textContent = count;
};

ThirdButton.onclick = function () {
  count++;
  document.getElementById("first").textContent = count;
};
