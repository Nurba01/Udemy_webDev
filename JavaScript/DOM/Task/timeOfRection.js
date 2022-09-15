// var shape = document.querySelector("div");
// var timeOfReaction = document.querySelector("h1");
// var isTimeClicked = true;

// shape.addEventListener("click", function() {
//     shape.style.backgroundColor = getRandomColor();
//     shape.style.marginLeft = getRandomIntPX(600);
//     shape.style.marginTop = getRandomIntPX(600);
//     shape.style.width = getRandomIntPX(300);
//     shape.style.height = getRandomIntPX(300);
//     let start = Date.now();
//     if(isTimeClicked){
//         setInterval(function() {
//         var delta = Date.now() - start;
//         output(Math.floor(delt / 1000));
//         output(new Date().tuUTCString());
//         }, 1000);
//     }else{

//     }
// });



// function getRandomIntPX(max) {
//     return Math.floor(Math.random() * max) + "px";
// }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var startTime = new Date().getTime();

var makeShapeVision = function() {
    var shape = document.getElementById("someShape");
    shape.style.display = "none";
    shape.style.left = Math.random() * 500 + "px";
    shape.style.top = Math.random() * 500 + "px";
    shape.style.backgroundColor = getRandomColor();
    shape.style.display = "block";

    startTime = new Date().getTime();

    if (Math.random() < 0.3) {
        shape.style.borderRadius = "50%";
    } else if (Math.random() >= 0.3 && Math.random() <= 0.7) {
        shape.style.borderRadius = "0";
    } else if (Math.random() > 0.7) {
        shape.style.borderRadius = "0";
        shape.style.left = "0";
        shape.style.width = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px slid red";

    }
}
makeShapeVision();


document.getElementById("someShape").onclick = function() {
    var shape = document.getElementById("someShape");
    shape.style.display = "none";
    shape.style.left = Math.random() * 500 + "px";
    shape.style.top = Math.random() * 500 + "px";
    shape.style.backgroundColor = getRandomColor();



    var finishTime = new Date().getTime();
    document.getElementById("someShape").style.display = "none";
    var reactionTime = (finishTime - startTime) / 1000;
    console.log(reactionTime);
    document.getElementsByClassName("timeOfReaction")[0].innerHTML = reactionTime + "sec.";

    var random = Math.random() * 100;
    setTimeout(makeShapeVision, random);
}