let age = prompt("Write your age");
let weight = prompt("Write your weight");
let height = prompt("Write your height");
let imt = weight / (height * height);
alert(imt);
if (age >= 18 && age <= 25) {
    if (imt <= 17.5)
        alert('not enough,is dangerous to your health')
    else if (imt <= 19.5)
        alert('slightly reduced, but isn\'t dangerous to your health');
    else if (imt <= 22.9)
        alert('normal');
    else if (imt <= 27.4)
        alert("excessive");
    else if (imt <= 29.9)
        alert("the first step of obesity");
    else if (imt <= 34.9)
        alert("the second step of obesity");
    else if (imt <= 39.9)
        alert("the third step of obesity");
    else if (imt >= 40)
        alert("the fourth step of obesity");
} else if (age >= 26 && age <= 46) {
    if (imt <= 18)
        alert('not enough,is dangerous to your health')
    else if (imt <= 20)
        alert('slightly reduced, but isn\'t dangerous to your health');
    else if (imt <= 25.9)
        alert('normal');
    else if (imt <= 27.9)
        alert("excessive");
    else if (imt <= 30.9)
        alert("the first step of obesity");
    else if (imt <= 35.9)
        alert("the second step of obesity");
    else if (imt <= 40.9)
        alert("the third step of obesity");
    else if (imt >= 41)
        alert("the fourth step of obesity");
} else {
    alert("fault");
}