window.onload = () => {
  let frisrInput = document.querySelector("main .Verfication-OTP input");
  frisrInput.focus();
};

let generateOtp = Math.round(Math.random() * 9000) + 1000;

let allEnteryInputs = document.querySelectorAll("main .Verfication-OTP input");

let verfiyOtpButton = document.querySelector("main .container .otpButton");

let generateError = document.querySelector("main span");

function collectEnteryOtb() {
  let enteryOtb = "";
  allEnteryInputs.forEach((ele) => {
    enteryOtb += ele.value;
  });
  return enteryOtb;
}

function checkEmptyInput() {
  let emptyInputs = [];
  allEnteryInputs.forEach((input) => {
    if (input.value == "") {
      emptyInputs.push(input);
      emptyInputs.length != 0 ? emptyInputs[0].focus() : false;
    }
  });
  return emptyInputs;
}

function compareValues(enteryOtb, generateOtp) {
  if (enteryOtb == generateOtp) {
    return "succses";
  } else {
    return "failled";
  }
}

function generateErrorPopup() {
  generateError.classList.add("error");
  allEnteryInputs.forEach((input, index) => {
    input.value = "";
  });
}
function generateSuccsesPopup() {
  let cloneContainer = document
    .querySelector(".ActivationCodeContainer main .container")
    .cloneNode(false);
  cloneContainer.innerText = `deer customer congratulation  you have successfully registed`;

  cloneContainer.classList.add("container", "addition");
  document.body.prepend(cloneContainer);
  console.log(cloneContainer);
  document.querySelector(".ActivationCodeContainer").remove();
}

(function checkValueInpus() {
  let onlyKey = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  allEnteryInputs.forEach((input, index) => {
    input.onkeyup = (e) => {
      generateError.classList.remove("error");
      if (
        e.target.value != " " &&
        e.target.value != "" &&
        e.target.value.length <= 1 &&
        onlyKey.includes(+e.target.value)
      ) {
        e.target.blur();
        index < allEnteryInputs.length - 1
          ? e.target.nextElementSibling.focus()
          : false;
      } else if (e.key == "Backspace" && e.target.value == "") {
        index != 0 ? e.target.previousElementSibling.focus() : false;
      }
    };
  });
})();

verfiyOtpButton.addEventListener("click", () => {
  let enteryOtb = collectEnteryOtb();
  let emptyInputs = checkEmptyInput();
  let stateOtp = compareValues(enteryOtb, generateOtp);
  stateOtp == "succses" ? generateSuccsesPopup() : generateErrorPopup();
});

console.log(generateOtp);
