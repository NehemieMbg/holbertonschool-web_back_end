export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) throw new Error('cannot divide by 0');

    return numerator / denominator;
  } catch (error) {
    console.error(error);
  }
}

console.log(divideFunction(10, 2));
console.log(divideFunction(10, 0));
