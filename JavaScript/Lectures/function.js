// function hello() {
//     return "Hello stranger";
// }
// hello();
// ///////////////////////////////////////////////////////////////


// function alertHello() {
//     alert(hello());
// }
// alertHello();
// /////////////////////////////////////////////////////////////


// function complexHello(text, name, age) {
//     console.log(text + "My name is " + name + "I'm " + age + "years old.");
// }
// complexHello("hi bro ", "Sergei. ", 44);
// 
// 
// 
// 
// //////////////////////////////////////////////////////////////////

// function square(number) {
//     console.log(number * number);
// }
// square(1111);
// /////////////////////////////////////////////////////////////////

// function twoReturns(x) {

//     x = x - 8;

//     console.log(x);

//     return x;

//     x = x + 8;

//     console.log(x);

//     return x;

// }
// console.log(twoReturns(10));


///////////////////////////////////////////////////////////////////

// function animalVoice(animal, animalName) {
//     switch (animal) {
//         case "dog":
//             return animalName + "barks.";
//         case "cat":
//             return animalName + "Meows";
//         default:
//             return animalName + "makes some sound";
//     }
// }
// console.log(animalVoice("tiger", "Richard "));

///////////////////////////////////////////////////////////////////
// var animalVoice = function(animal, animalName) {
//     switch (animal) {
//         case "dog":
//             return animalName + "barks.";
//         case "cat":
//             return animalName + "Meows";
//         default:
//             return animalName + "makes some sound";
//     }
// }
// console.log(animalVoice("tiger", "Richard "));


//the first task isNumberOdd
function isNumberOdd(number) {
    if (number % 2 == 0)
        return false;
    else
        return true;
}
//isNumberOdd(prompt("write a number"));




//the second task Factorial
function factorial(number) {
    let answer = 1;
    for (n = 1; n <= number; n++) {
        answer *= n;
    }
    return answer;
}
//console.log(fuctorial(5));



//the third task ChangeSpaceto under Score
function changeSpaceToUnderScore(str) {
    let newString = "",
        countForNewString = 0;
    for (let char of str) {
        if (char != " ") {
            newString += char;
        }
    }
    return newString;

    //newString = str.replace(/ /g,"_");
}
console.log(changeSpaceToUnderScore(" Create a a function "));