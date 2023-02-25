const birthday = document.querySelector("#input-birthday");
const number = document.querySelector("#input-number");
const button = document.querySelector("#check-number");
const output = document.querySelector("#output");

button.addEventListener("click", checkButton);
function checkButton() {
  const dob = birthday.value.replaceAll("-", "");
  const lucky = number.value;
  if (dob && lucky) {
    if (dob % lucky === 0) {
      output.innerText = "Your birthday is lucky woohooo🥳";
    } else {
      output.innerText = "Your birthday is not lucky 🥲";
    }
  } else {
    output.innerText = "Please put both values first!";
  }
  console.log(dob, lucky);
}
