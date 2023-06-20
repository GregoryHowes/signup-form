const enteredPassword = document.querySelector("#password");
const confirmedPassword = document.querySelector("#confirmpassword");

enteredPassword.addEventListener("input", confirmPasswords);
confirmedPassword.addEventListener("input", confirmPasswords);

function confirmPasswords() {
    if (enteredPassword.value === confirmedPassword.value) {
        enteredPassword.classList.remove("no-match");
        confirmedPassword.classList.remove("no-match");
    } else {
        enteredPassword.classList.add("no-match");
        confirmedPassword.classList.add("no-match");
    }
}