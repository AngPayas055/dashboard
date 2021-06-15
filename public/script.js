function dashboard() {
    document.getElementById("wallet").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("dashboard-row").style.display = "block";
    document.getElementById("statistics-one").style.display = "none";
    document.getElementById("statistics-two").style.display = "none";
    document.getElementById("statistics-three").style.display = "none";
}

function statistics() {
    document.getElementById("wallet").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("dashboard-row").style.display = "none";
    document.getElementById("statistics-one").style.display = "flex";
    document.getElementById("statistics-two").style.display = "flex";
    document.getElementById("statistics-three").style.display = "flex";
}


function wallet() {
    document.getElementById("wallet").style.display = "block";
    document.getElementById("messages").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("dashboard-row").style.display = "none";
    document.getElementById("statistics-one").style.display = "none";
    document.getElementById("statistics-two").style.display = "none";
    document.getElementById("statistics-three").style.display = "none";
}

function messages() {
    document.getElementById("wallet").style.display = "none";
    document.getElementById("messages").style.display = "flex";
    document.getElementById("settings").style.display = "none";
    document.getElementById("dashboard-row").style.display = "none";
    document.getElementById("statistics-one").style.display = "none";
    document.getElementById("statistics-two").style.display = "none";
    document.getElementById("statistics-three").style.display = "none";
}

function settings() {
    document.getElementById("wallet").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("settings").style.display = "flex";
    document.getElementById("dashboard-row").style.display = "none";
    document.getElementById("statistics-one").style.display = "none";
    document.getElementById("statistics-two").style.display = "none";
    document.getElementById("statistics-three").style.display = "none";
}

// let btn = document.querySelector("#nav-button");
// let sidebar = document.querySelector("#side-menu");
// let searchBtn = document.querySelector(".bx-search");




//   function myFunction() {
//     var wallet = document.getElementById("wallet");
//     var messages = document.getElementById("messages");
//     var settings = document.getElementById("settings");
//     if (wallet.style.display === "none") {
//         wallet.style.display = "block";
//     } else {
//         wallet.style.display = "none";
//         messages.style.display = "none";
//         settings.style.display = "none";
//     }
//   }