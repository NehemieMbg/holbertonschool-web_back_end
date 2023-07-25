function askQuestion(question) {
  process.stdout.write(question);
  return new Promise((resolve) => {
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim());
    });
  });
}

async function main() {
  const name = await askQuestion(
    'Welcome to Holberton School, what is your name?\n'
  );
  console.log(`Your name is: ${name}`);

  // Event listener for the 'end' event
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });

  // Listend for the 'end' event on stdin
  process.stdin.resume();
}

main();
