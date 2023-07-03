export default function appendToEachArrayValue(
  array,
  appendString = 'correctly-'
) {
  for (let value of array) {
    const string = `${appendString}${value}`;
    value = string;
  }

  return array;
}
