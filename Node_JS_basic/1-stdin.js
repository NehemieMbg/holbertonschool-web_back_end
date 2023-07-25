// module to read user input from the command line
const readline = require('readline');

// Create interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Function that Read the user input from the command line
 * @param question - the question to be answered
 * @returns a promise that will be resolved when the user input is read
 */
function userResponse(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  const name = await userResponse(
    'Welcome to Holberton School, what is your name?\n'
  );
  console.log(`Your name is: ${name}`);
  console.log('This is important software is now closing');
  rl.close();
}

main();
