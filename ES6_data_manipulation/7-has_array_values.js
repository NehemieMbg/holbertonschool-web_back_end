export default function hasValuesFromArray(set, array) {
  let hasValue = true;
  array.forEach((value) => {
    if (!set.has(value)) {
      hasValue = false;
    }
  });

  return hasValue;
}
