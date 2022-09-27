const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//list of array with question
let questions = [    
  'What\'s your name? Nicknames are also acceptable :) ',
  'What\'s an activity you like doing? ',
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.) ',
  'What\'s your favourite thing to eat for that meal? ',
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! '
  ];

let answerInput = "";

const askQuestion = (x) => {
  if(x < questions.length) {
    rl.question(questions[x], (answer) => {
      answerInput += '\n'+answer;
      askQuestion(x + 1);
    });
  }else {
    console.log(`The input you have entered:${answerInput}`);
    rl.close();
  }
};

askQuestion(0);