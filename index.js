/* readlineSync Module */

var readlineSync = require('readline-sync');
var chalk = require('chalk');
 
var userName = readlineSync.question(chalk.black.bgRed.bold("Hi There! What's your name? \n"));
console.log("Welcome " + chalk.white.bgBlack.bold(userName) + " to the quiz", chalk.white.bgGray.bold('Guess the Netflix Show'));
console.log("-------------------------------------------");
var keyPress = readlineSync.question(chalk.white.bgGray.bold("QUIZ INSTRUCTIONS:\n") + "Press e to exit at any time during the game\nAnswer by entering correct alphabet\n--------------------\nPress any key to start playing... \n");
console.log("\n--------------Quiz Starts---------------");

var score = 0;
var index = 0;
var queBank = [
  {question:"\nQ1. In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours.\n\na.Dark\nb.Stranger Things\nc.Black Mirror\n", answer:"c"},
  {question:"\nQ2. Cameras follow the banter and bonding between four fun-loving women from Bollywood’s inner circle as they juggle professions, family and friendship.\n\na.Koffee with Karan\nb.Fabulous lives of Bollywood Wives\nc.Indian Matchmaking\n", answer:"b"},
  {question:"\nQ3. Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.\n\na.Money Heist\nb.Suits\nc.Breaking Bad\n", answer:"a"},
  {question:"\nQ4. A married couple suddenly go bankrupt and the only remaining asset they have is an ugly small town named after this show.\n\na.Riverdale\nb.Schitt's Creek\nc.Brooklyn-99\n", answer:"b"},
  {question:"\nQ5. Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.\n\na.Big Bang Theory\nb.Friends\nc.How I met your Mother\n", answer:"b"},
  {question:"\nQ6. After being set-up by their families, two teenagers strike up a tentative friendship at their summer programme.\n\na.Mismatched\nb.Little Things\nc.Girls Hostel\n", answer:"c"}
  
];

function play(){
  var answer = readlineSync.question(queBank[index].question);
  if(answer.toLowerCase() == queBank[index].answer){
    score++;
    console.log("\nCorrect!\nYour score is: "+ score);
    index++;
    if( index != queBank.length){
      play();
    }
    else{
      console.log(chalk.white.bgBlue.bold("\nThanks for playing!"));
      console.log("Your final score is: "+ score +" out of "+ queBank.length);
    }
  }
  else if(answer.toLowerCase() == 'e'){
    console.log("\nWe're sorry to let you go... :'(");
    console.log("Your high score is: "+ score);
  }
  else{
    console.log("\nIncorrect! Correct answer is: "+ queBank[index].answer);
    console.log("Your score remains: "+ score);
    index++;
    if(index != queBank.length){
      play();
    }
    else{
      console.log(chalk.white.bgBlue.bold("\nThanks for playing!"));
      console.log("Your final score is: "+ score +" out of "+queBank.length);
    }
  }
}

play();
if(score<=0.6*queBank.length){
  console.log("Umm, you don't watch Netflix much!");
}
else if(score>0.6*queBank.length && score<=0.8*queBank.length){
  console.log("Not bad! You watch Netflix fairly well!");
}
else{
  console.log("Voila! Seems like you're a Netflix baby!");
}





/* readline Module */

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Nested rl.question for 2 questions and answers from user
// rl.question("Hi There! What's your name? \n", (username) => {
//   console.log("Welcome "+ username +" to the quiz 'Do You Know Krisha?'");
//   console.log("-------------------------------------------------");
//   rl.question("Press e to exit or any other key to continue... \n", (choice) => {
//     if(choice.toLowerCase() == 'e'){
//     console.log("We're sorry to let you go... :'(");
//     }
//     else{
//       console.log("Game starts!");
//     }
//     console.log("------------------------------------------------");  
//   })    
// })    