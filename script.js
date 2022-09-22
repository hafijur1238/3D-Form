const singUpBtn = document.querySelector(".signup-btn");
const singInBtn = document.querySelector(".signin-btn");
const formsWrapper = document.querySelector(".forms-wrapper")

singUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.add("change");
});
singInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.remove("change");
});