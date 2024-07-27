// log in script

let passwodmsg = document.querySelector(".msg");
let login_success = document.querySelector(".msg1");
let login_failed = document.querySelector(".msg2");
let enter_password = document.querySelector(".pw");
let btn = document.querySelector(".button");
enter_password.addEventListener("click", () => {
    enter_password.classList.add("open");
    password_ruls();//calling the function(optional)
    return false;
});

btn.addEventListener("click", () => {
    enter_password.classList.remove("open");
    password_ruls();//calling the function(optional)
    return false;
});

function password_ruls() {
    if (enter_password.classList.contains("open")) {
        passwodmsg.setAttribute("style", "display:block");
    } else {
        passwodmsg.removeAttribute("style", "display:block");
    }
}

function login_submit() {
    var user_name = document.querySelector(".u_name").value;
    console.log(user_name);
    var user_password = document.querySelector(".pw").value;
    console.log(user_password);
    if (user_name === "Username" && user_password === "Password@1234") {
        login_failed.removeAttribute("style", "display:block");
        login_success.setAttribute("style", "display:block");
        alert("Login Successful");
        window.location.href = "admin.html";
        return false;
    } else {
        login_success.removeAttribute("style", "display:block");
        login_failed.setAttribute("style", "display:block");
        return false;
    }

}




