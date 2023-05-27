const bill = document.querySelector(".bill-input");
const tipBtnContainer = document.querySelector(".tip__percent-btns");
const tipDisplay = document.querySelector(
  ".tip__wrapper--display__amount .amount"
);

const icon = document.querySelector(".tip__bill-icon");

const person = document.querySelector(".person");
const personDisplay = document.querySelector(
  ".tip__wrapper--display__person .amount"
);
const tipCalculator = (tip_percentage, bill) => {
  const tip = (tip_percentage / 100) * bill;
  tipDisplay.textContent = `$${tip.toFixed(2)}`;
};

let billAmount;

bill.addEventListener("input", () => {
  icon.style.display = "none";
  billAmount = bill.value;
});
person.addEventListener("input", () => {
  const personval = +person.value;
  personDisplay.textContent = personval;
});

tipBtnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("tip_btn")) {
    const tipButtons = document.querySelectorAll("button");
    tipButtons.forEach((button) => {
      button.classList.remove("active");
    });

    e.target.classList.add("active");
    const tipPercentage = +e.target.textContent.replace("%", "");
    tipCalculator(+tipPercentage, +billAmount);
  }
});
