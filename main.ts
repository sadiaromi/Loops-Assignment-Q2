// ================================== Q#2 =========================================

// ================================= STEP#1 =======================================

let maxiValue : number= 10;

// ================================ STEP#2 ========================================

let randomNum: number =(Math.floor(Math.random() * maxiValue + 1 ));
console.log(randomNum);

// ================================ STEP#3 =========================================

let correctGuess: boolean = false;

// ================================ STEP#4 ===========================================

let guessedNum :number[] = [ 2 , 3 , 8 , 6 , 5 ,9 , 1];

let n = 0;

// =============================== STEP#5 ============================================

while (!correctGuess && n < guessedNum.length ) {
    let currentGuess = guessedNum[n];

// ============================== STEP#6 ==============================================

    if( currentGuess === randomNum){
        correctGuess = true;
        console.log(`Congrats! You've guessed the correct number.`);
    }else if(currentGuess < randomNum){
        console.log(`Your guess ${currentGuess} is too low... Try Again` );
    }
    else (currentGuess > randomNum){
        console.log(`Your guess ${currentGuess} is too high... Try Again` );

    };
    n++;
    
};

console.log(`The random number was ${randomNum}`);






















