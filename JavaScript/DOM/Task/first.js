let buttonElement = document.querySelector("button");
let isBackgroundApplied = true;

// buttonElement.addEventListener("click", function() {
//     if (isBackgroundApplied) {
//         document.querySelector("body").style.background = "red";
//         isBackgroundApplied = false;
//     } else {
//         document.querySelector("body").style.background = "green";
//         isBackgroundApplied = true;
//     }
// });

buttonElement.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("green");
});