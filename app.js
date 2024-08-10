// First form
const ctaForm = document.querySelector("#cta__form");
const ctaInput = document.querySelector(".cta__input > input");
const ctaError = document.querySelector(".cta__error");

// Second form
const ctaForm2 = document.querySelector("#cta__form2");
const ctaInput2 = document.querySelector("#cta__email");
const ctaError2 = document.querySelector(".email__error");

// Validate First Form
ctaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // check if valid email or else show error
  if (!ctaInput.value.includes("@")) {
    ctaInput.classList.add("input__error");
    ctaError.style.display = "block";
    ctaError.textContent = "Please enter a valid email address";

    // clear error after 5 seconds
    setTimeout(() => {
      ctaError.style.display = "none";
      ctaInput.classList.remove("input__error");
    }, 5000);
  } else {
    // show success message
    ctaError.style.display = "block";
    ctaError.textContent = "Thank you for subscribing!";
    ctaError.style.color = "green";
    ctaInput.style.border = "2px solid green";

    // clear error after 5 seconds
    setTimeout(() => {
      ctaError.style.display = "none";
      ctaError.style.color = "red";
      ctaInput.style.border = "2px solid black";
      ctaInput.value = "";
    }, 5000);
  }
});

// Validate Second Form
ctaForm2.addEventListener("submit", (e) => {
  e.preventDefault();

  // check if valid email or else show error
  if (!ctaInput2.value.includes("@")) {
    ctaInput2.classList.add("input__error");
    ctaError2.style.display = "block";
    ctaError2.textContent = "Please enter a valid email address";
    ctaInput2.style.border = "2px solid red";
    console.log("SUBMITTED");
    // clear error after 5 seconds
    setTimeout(() => {
      ctaError2.style.display = "none";
      ctaInput2.classList.remove("input__error");
      ctaInput2.style.border = "transparent";
    }, 5000);
  } else {
    // show success message
    ctaError2.style.display = "block";
    ctaError2.textContent = "Thank you for subscribing!";
    ctaError2.style.color = "white";
    ctaInput2.style.border = "2px solid lightgreen";

    // clear error after 5 seconds
    setTimeout(() => {
      ctaError2.style.display = "none";
      ctaError2.style.color = "red";
      ctaInput2.style.border = "transparent";
      ctaInput2.value = "";
    }, 5000);
  }
});
