const btn = document.querySelector("button");
const tip = document.querySelector(".tip");
const bill = document.querySelector(".bill");
const center = document.querySelector(".center");

btn.addEventListener("click", add);
bill.addEventListener("click", reset);

function add() {
  let per = (tip.value / bill.value) * 100;
  const h1 = document.createElement("h1");
  h1.innerHTML = `${per}%`;
  h1.classList.add("per");
  if (per < 10) {
    h1.style.color = "red";
  } else if (per >= 20) {
    h1.style.color = "green";
  }
  center.appendChild(h1);
}

function reset() {
  document.querySelector(".per").remove();
}
