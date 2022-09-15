var image = document.getElementsByTagName("img");
image[0].getAttribute("src");
image[0].setAttribute("src", "../../css/littleWebSite/img/ninja4.webp")

var link = document.getElementsByTagName("a");
link[0].getAttribute("href");
link[0].setAttribute("href", "https://www.yandex.ru");


var h1 = document.getElementById("header");
console.log(h1.innerHTML);

h1.addEventListener("click", function() {
    this.style.background = "red";
});

h1.addEventListener("click", function() {
    this.style.color = "blue";
});



//////////////////////////////////////////////////////////////////////////////
// var liElements = document.getElementsByTagName("li");
// console.log(liElements);

// for (let i = 0; i < liElements.length; i++) {
//     liElements[i].addEventListener("click", function() {
//         this.style.color = "green";
//         this.style.fontSize = "200%";
//     })
// }


///////////////////// //another way to write function

// var colorLiElement = function() {
//     this.style.color = "red";
// }

// for (let i = 0; i < liElements.length; i++) {
//     liElements[i].addEventListener("click", colorLiElement);
// }

//task