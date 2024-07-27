let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let openbtn1 = document.querySelector("#btn1");
let openbtn2 = document.querySelector("#btn2");
let up_cv = document.querySelector(".Update-cv");
let up_ph = document.querySelector(".Update-photo");


// admin page script
closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
});

openbtn1.addEventListener("click", () => {
    up_cv.classList.add("open");
    up_ph.classList.remove("open");
    optionopen1();
    optionopen2();
});

openbtn2.addEventListener("click", () => {
    up_ph.classList.add("open");
    up_cv.classList.remove("open");
    optionopen2();
    optionopen1();
});

// following are the code to change sidebar button(optional)

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        document.getElementById("top-bar").removeAttribute("id");
    } else {
        document.getElementsByTagName("div")[0].setAttribute("id", "top-bar");
    }
}



function optionopen1() {
    if (up_cv.classList.contains("open")) {
        up_cv.setAttribute("style", "display:block");
    } else {
        up_cv.removeAttribute("style", "display:block");
    }
}


function optionopen2() {
    if (up_ph.classList.contains("open")) {
        up_ph.setAttribute("style", "display:block");
    } else {
        up_ph.removeAttribute("style", "display:block");
    }
}

function logout() {
    var logout_password = window.prompt("Enter your password.");
    if (logout_password === "Sachin@1234") {
        window.location.href = "index.html";
    }
    else {
        confirm("Please Retry (Enter correct password).");
    }
}

function visit_portfolio() {
    if (confirm("You want visit portfolio.") == true) {
        window.location.href = "portfolio.html";
    }
    else {
        return false;
    }
}