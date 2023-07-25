// Display the message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set the encoding of the standard input to UTF-8
process.stdin.setEncoding('utf8');

// Listen for 'readable' event
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) process.stdout.write(`Your name is: ${name}`);
});

// Event listener for the 'end' event
process.stdin.on('end', () => {
  console.log('This important software is now closing');
  process.exit(0);
});

process.stdin.resume();
