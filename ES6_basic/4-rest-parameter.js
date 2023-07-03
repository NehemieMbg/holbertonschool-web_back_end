export default function returnHowManyArguments(...args) {
  return args.length;
}

console.log(returnHowManyArguments('test', 'test', 't'));
