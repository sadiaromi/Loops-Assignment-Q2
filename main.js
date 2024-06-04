// ================================== Q#2 =========================================
// ================================= STEP#1 =======================================
var maxiValue = 10;
// ================================ STEP#2 ========================================
var randomNum = (Math.floor(Math.random() * maxiValue + 1));
console.log(randomNum);
// ================================ STEP#3 =========================================
var correctGuess = false;
// ================================ STEP#4 ===========================================
var guessedNum = [2, 3, 8, 6, 5, 9, 1];
var n = 0;
// =============================== STEP#5 ============================================
while (!correctGuess && n < guessedNum.length) {
    var currentGuess = guessedNum[n];
    // ============================== STEP#6 ==============================================
    if (currentGuess === randomNum) {
        correctGuess = true;
        console.log("Congrats! You've guessed the correct number.");
    }
    else if (currentGuess < randomNum) {
        console.log("Your guess ".concat(currentGuess, " is too low... Try Again"));
    }
    else
        (currentGuess > randomNum);
    {
        console.log("Your guess ".concat(currentGuess, " is too high... Try Again"));
    }
    ;
    n++;
}
;
console.log("The random number was ".concat(randomNum));
