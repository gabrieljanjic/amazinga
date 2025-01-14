"use strict";

const submit = document.querySelector(".submit");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
let popis = [];

submit.addEventListener("click", function () {
  const numberHours = Number(document.querySelector(".number-hours").value);
  const numberNightHours = Number(
    document.querySelector(".number-night-hours").value
  );
  if (numberHours >= 0 && numberNightHours >= 0) {
    //const date = document.querySelector(".date").value;
    const hour = 6.06;
    let rezultat = numberHours * hour + numberNightHours * hour * 1.5;
    //result.textContent = `${date}.2025 sam zaradio ${rezultat}€`;
    result.textContent = rezultat.toFixed(2) + "€";
  } else {
    alert("Broj ne može bit negativan.");
  }
});
reset.addEventListener("click", function () {
  result.textContent = "";
  document.querySelector(".number-hours").value = "";
  document.querySelector(".number-night-hours").value = "";
});
