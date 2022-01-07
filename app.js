const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    console.log(e);
}

loginForm.addEventListener("submit", onLoginSubmit);