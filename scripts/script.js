"use strict";

const inputEle = document.getElementById("amount");

const convertBtn = document.getElementById("btn-convert");

const selectFrom = document.getElementById("selectFrom");

const selectTo = document.getElementById("selectTo");

const swapBtn = document.getElementById("swapBtn");

const output = document.getElementById("output");

const rateEl = document.getElementById("rateEl");

const url = `https://v6.exchangerate-api.com/v6/7fca41dfd7e94e2db32bdcdd/latest/`;

// const init = () => {
//   showProp(selectFrom);
//   showProp(selectTo);
// };

fetch(url + "USD")
  .then((res) => res.json())
  .then((data) => {
    const objProp = Object.keys(data.conversion_rates);
    showProp(objProp, selectFrom);
    showProp(objProp, selectTo);
  });
const showProp = async (prop, selectEl) => {
  // const request = await fetch(url + "USD");
  // const data = await request.json();
  // const prop = Object.keys(data.conversion_rates);
  prop.forEach((val) => {
    const optionEl = document.createElement("option");
    optionEl.value = val;
    optionEl.innerText = val;
    selectEl.appendChild(optionEl);
    console.log(selectEl);
  });
};

inputEle.addEventListener("input");
