const submitBtn = document.getElementById("submitBtn");

function enableSubmit() {
  submitBtn.removeAttribute("disabled");
  submitBtn.classList.remove("disabledBtn");
  submitBtn.classList.add("enabledBtn");
}

function disableSubmit() {
  submitBtn.setAttribute("disabled", "disabled");
  submitBtn.classList.remove("enabledBtn");
  submitBtn.classList.add("disabledBtn");
}

const inputFields = document.querySelectorAll("input");

inputFields.forEach((input) => {
  const inputId = input.id;
  let listenFor;
  let isValid;
  switch (inputId) {
    case "usernameInput":
      isValid = (inputValue) => {
        return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])/.test(inputValue);
      };
      listenFor = "change";
      break;

    case "firstnameInput":
    case "lastnameInput":
      isValid = (inputValue) => {
        return /^[a-zA-Z\s\-\']*$/.test(inputValue);
      };
      listenFor = "keyup";
      break;

    case "dobInput":
      isValid = (inputValue) => {
        const currentDate = new Date();
        return (currentDate - inputValue) / 31536000000 >= 18;
      };
      listenFor = "change";
      break;
  }
  input.addEventListener(listenFor, (event) => {
    const inputValue = event.target.value;
    const isWarning = input.nextElementSibling;
    if (!isValid(inputValue)) {
      if (!isWarning) {
        const invalidUser = document.createElement("p");
        invalidUser.classList.add("invalidInput");
        invalidUser.textContent =
          "Username must contain at least: 1 character, 1 number and 1 special character.";
        input.parentElement.appendChild(invalidUser);
      }
      input.classList.add("invalidBox");
      input.classList.remove("validBox");
    } else {
      input.classList.add("validBox");
      input.classList.remove("invalidBox");
      if (isWarning) input.parentElement.removeChild(isWarning);
    }
    if (document.getElementsByClassName("validBox").length === 4) {
      enableSubmit();
    } else {
      disableSubmit();
    }
  });
});

// const userInput = document.getElementById("usernameInput");
// userInput.addEventListener("change", (event) => {
//   const inputValue = event.target.value;
//   const isValid = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])/.test(inputValue);
//   if (!isValid) {
//     const invalidUser = document.createElement("p");
//     invalidUser.classList.add("invalidInput");
//     invalidUser.textContent =
//       "Username must contain at least: 1 character, 1 number and 1 special character.";
//     userInput.parentElement.appendChild(invalidUser);
//     userInput.classList.add("invalidBox");
//     userInput.classList.remove("validBox");
//   } else {
//     userInput.classList.add("validBox");
//     userInput.classList.remove("invalidBox");
//     const isWarning = userInput.nextElementSibling;
//     if (isWarning) userInput.parentElement.removeChild(isWarning);
//   }
//   if (document.getElementsByClassName("validBox").length === 4) {
//     enableSubmit();
//   } else {
//     disableSubmit();
//   }
// });

// const firstnameInput = document.getElementById("firstnameInput");
// firstnameInput.addEventListener("keyup", (event) => {
//   const inputValue = event.target.value;
//   const isValid = /^[a-zA-Z\s\-\']*$/.test(inputValue);
//   const isWarning = firstnameInput.nextElementSibling;

//   if (!isValid) {
//     const invalidName = document.createElement("p");

//     if (!isWarning) {
//       invalidName.classList.add("invalidInput");
//       invalidName.textContent =
//         "Firstname can only contain letters(a-z), spaces, hyphens(-) and apostrophes(')";
//       firstnameInput.parentElement.appendChild(invalidName);
//     }
//     firstnameInput.classList.remove("validBox");
//     firstnameInput.classList.add("invalidBox");
//   } else {
//     firstnameInput.classList.remove("invalidBox");
//     firstnameInput.classList.add("validBox");
//     if (isWarning) firstnameInput.parentElement.removeChild(isWarning);
//   }
//   if (document.getElementsByClassName("validBox").length === 4) {
//     enableSubmit();
//   } else {
//     disableSubmit();
//   }
// });

// const lastnameInput = document.getElementById("lastnameInput");
// lastnameInput.addEventListener("keyup", (event) => {
//   const inputValue = event.target.value;
//   const isValid = /^[a-zA-Z\s\-\']*$/.test(inputValue);
//   const isWarning = lastnameInput.nextElementSibling;

//   if (!isValid) {
//     const invalidName = document.createElement("p");

//     if (!isWarning) {
//       invalidName.classList.add("invalidInput");
//       invalidName.textContent =
//         "Lastname can only contain letters(a-z), spaces, hyphens(-) and apostrophes(')";
//       lastnameInput.parentElement.appendChild(invalidName);
//     }
//     lastnameInput.classList.add("invalidBox");
//     lastnameInput.classList.remove("validBox");
//   } else {
//     lastnameInput.classList.add("validBox");
//     lastnameInput.classList.remove("invalidBox");
//     if (isWarning) lastnameInput.parentElement.removeChild(isWarning);
//   }
//   if (document.getElementsByClassName("validBox").length === 4) {
//     enableSubmit();
//   } else {
//     disableSubmit();
//   }
// });

// const dobInput = document.getElementById("dobInput");
// dobInput.addEventListener("change", (event) => {
//   const inputValue = new Date(event.target.value);
//   const currentDate = new Date();
//   const isValid = (currentDate - inputValue) / 31536000000 >= 18;
//   const isWarning = dobInput.nextElementSibling;

//   if (!isValid) {
//     const invalidDob = document.createElement("p");
//     if (!isWarning) {
//       invalidDob.classList.add("invalidInput");
//       invalidDob.textContent =
//         "You must be over 18 years old to enter the site";
//       dobInput.parentElement.appendChild(invalidDob);
//     }
//     dobInput.classList.add("invalidBox");
//     dobInput.classList.remove("validBox");
//   } else {
//     dobInput.classList.add("validBox");
//     dobInput.classList.remove("invalidBox");
//     if (isWarning) dobInput.parentElement.removeChild(isWarning);
//   }
//   if (document.getElementsByClassName("validBox").length === 4) {
//     enableSubmit();
//   } else {
//     disableSubmit();
//   }
// });

// const validItems = document.getElementsByClassName("validBox");
// console.log(validItems);
