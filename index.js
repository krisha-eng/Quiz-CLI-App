/* readlineSync Module */

var readlineSync = require('readline-sync');
var chalk = require('chalk');
 
var userName = readlineSync.question(chalk.black.bgRed.bold("Hi There! What's your name? \n"));
console.log("Welcome " + chalk.white.bgBlack.bold(userName) + " to the quiz", chalk.white.bgGray.bold('Do You Know Krisha?'));
console.log("--------------------------------------------");
var keyPress = readlineSync.question(chalk.white.bgGray.bold("QUIZ INSTRUCTIONS:\n") + "Press e to exit at any time during the game\nAnswer by entering correct alphabet\n--------------------\nPress any key to start playing... \n");
console.log("\n--------------Quiz Starts---------------");

var score = 0;
var index = 0;
var queBank = [
  {question:"\nHow old is Krisha?\na.21\nb.22\nc.23\n", answer:"b"},
  {question:"\nWhere does she work?\na.Cognizant\nb.Cisco\nc.Capgemini\n", answer:"c"},
  {question:"\nWhat is her favorite color?\na.Blue\nb.Yellow\nc.Red\n", answer:"b"},
  {question:"\nWhich is her recent favorite series?\na.Emily in Paris\nb.Mismatched\nc.Gilmore Girls\n", answer:"b"},
  {question:"\nWhich quality best describes her?\na.Kind\nb.Honest\nc.Driven\n", answer:"c"},
  {question:"\nIf She Could Only Eat One Pizza Topping, For The Rest Of Her Life, What Would It Be?\na.Olives\nb.Baby Corn\nc.Paneer\n", answer:"c"},
  {question:"\nIf money didn’t matter, what would her dream job be?\na.Call center\nb.Nanny\nc.Primary Teacher\n", answer:"b"},
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
  console.log("Umm, you don't know Krisha well enough!");
}
else if(score>0.6*queBank.length && score<=0.8*queBank.length){
  console.log("Not bad! You and Krisha seem like good friends!");
}
else{
  console.log("Voila! Seems like you and Krisha are really close friends!");
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