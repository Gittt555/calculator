const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const delit = document.getElementById("delit");
const ymnohit = document.getElementById("ymnohit");
const otvet = document.getElementById("otvet");
const reshit = document.getElementById("reshit");

let athemet = "+";
const num = Number(input1) + Number(input2);
console.log(num);
reshit.onclick = function () {
  if (athemet == "+") {
    const num = Number(input1.value) + Number(input2.value);
    otvet.textContent = num;
  }
  if (athemet == "-") {
    const num = Number(input1.value) - Number(input2.value);
    otvet.textContent = num;
  }
  if (athemet == "/") {
    const num = Number(input1.value) / Number(input2.value);
    otvet.textContent = num;
  }
  if (athemet == "*") {
    const num = Number(input1.value) * Number(input2.value);
    otvet.textContent = num;
  }
};
minus.onclick = function () {
  athemet = "-";
};
plus.onclick = function () {
  athemet = "+";
};
delit.onclick = function () {
  athemet = "/";
};
ymnohit.onclick = function () {
  athemet = "*";
};
