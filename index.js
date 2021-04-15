// #### 1. Color Analyzer
// Create a switch statement that prints a different statement for each color possibility (red, blue, green, yellow).

{
    const color = "orange";

    switch (color) {
        case "red" :
            console.log(`${color} is the color`);
            break;
        case "blue" :
            console.log(`${color} is the color`);
            break;
        case "green" :
            console.log(`${color} is the color`);
            break;
        case "yellow" :
            console.log(`${color} is the color`);
            break;
        default :
            console.log("This is not a color in the color scheme.");
    };
}

// #### 2. Grading
// Create a switch statement that prints different comments depending on a grade.

{
    const grade = 4;

    switch (grade) {
        case 1 :
            console.log("Best grade possible!");
            break;
        case 2 :
            console.log("Quite good, young padawan.");
            break;
        case 3 :
            console.log("Still good, even better next time?");
            break;
        case 4 :
            console.log("Yes, you passed!");
            break;
        case 5 :
            console.log("Dang, you didn't pass.");
            break;
        default :
            console.log("Let's not talk about it.");
    };
}

// #### 3. Fruits
// Create a switch statement that prints different statement for various fruit (e.g. banana, orange, strawberry, apple).

{
    const fruit = "strawberry";

    switch (fruit) {
        case "banana" :
            console.log(`The ${fruit} is 0.40€ per piece.`);
            break;
        case "orange" :
            console.log(`The ${fruit} is 0.30€ per piece.`);
            break;
        case "strawberry" :
            console.log(`The ${fruit} is 2.40€ per 500g.`);
            break;
        case "apple" :
            console.log(`The ${fruit} is 0.10€ per piece.`);
            break;
        default :
        console.log(`Ask at the till how much this article costs.`);
    }
}

// #### 4. Percentage Complete. 
// * If percentageComplete is below 30, print "Still a long way to go". 
// * If the percentageComplete is between 30 and 50, print "Slowly getting there". 
// * If percentageComplete is between 51 and 80, print "You can do it!". 
// * If percentageComplete is between 81 and 99, print "This is the last push!".
// * If percentageComplete is 100, print "You're there. Well done!". 

{
    const percentage = 90;

    switch (true) {
        case (percentage >= 0 && percentage < 30) :
            console.log("Still a long way to go.");
            break;
        case (percentage >= 30 && percentage <= 50) :
            console.log("Slowly getting there.");
            break;
        case (percentage > 51 && percentage <= 80) :
            console.log("You can do it.");
            break;
        case (percentage > 81 && percentage <= 99) :
            console.log("This is the last push!");
            break;
        case (percentage === 100) :
            console.log("You're there. Well done!");
            break;
        default :
            console.log("This percentage is impossible. Check again.");
    };
};

// #### 5. Differences
// * When should you use a switch statement versus an `if else` statement. Comment your answer in your js file.

// when you have a lot of options you need to play out, switch can be faster to write as you don't need as many curly braces and `else if`'s. If you only have to options, use if and else or even ternaries to have it in a single line.
// also, if you need to do comparison operations with your variables (see task 4), it might be better to use `if else` statements. With a switch statement you would need to evaluate your statements to true rather then give cases (aka options) for values of the variable itself, which is more of a hack than what switch statements are intended for.