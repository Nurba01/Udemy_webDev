//WHILE
//The first task
let number = 1;
while (number < 31) {
    if (number % 2 == 1)
        console.log(number);
    number++;
}



//the second task
number = 1;
while (number < 31) {
    if (number % 5 == 0)
        console.log(number);
    number++;
}

// the third task
number = 30;
while (number > 0) {
    if (number % 2 == 0)
        console.log(number);
    number--;
}
/////////////////////////////////////////////////////////////////////////
//FOR 
for (number = 1; number < 31; number++)
    if (number % 2 == 0)
        console.log(number);

    //the second task
for (number = 1; number < 31; number++)
    if (number % 7 == 0)
        console.log(number);

    //the third task
for (number = 30; number > 0; number--)
    if (number % 2 == 1)
        console.log(number);