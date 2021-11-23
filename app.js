const signUpForm = document.querySelector("form");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  for (const input of signUpForm) {
    // console.dir(input);
    if (input.tagName === "INPUT") {
      if (input.value === "") {
        if (input.nextElementSibling.tagName !== "P") {
          let errELement = document.createElement("P");
          errELement.innerText = `${input.placeholder} can not be empty`;
          errELement.classList.add("error-text");
          input.after(errELement);
          console.dir(errELement);
          input.classList.add("error");
        }
      } else if (input.nextElementSibling.tagName === "P") {
        input.classList.remove("error");
        input.nextElementSibling.remove();
      }
    }
  }
});
