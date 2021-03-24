let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// Listener callback function
let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

// Receive input from the terminal
process.stdin.on('data', playGame);
