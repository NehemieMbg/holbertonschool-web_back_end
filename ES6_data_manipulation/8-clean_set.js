export default function cleanSet(set, startString) {
  if (!startString) return '';
  if (typeof startString !== 'string') return '';

  const filteredValues = Array.from(set).filter((value) => {
    if (value.startsWith(startString)) {
      return value;
    }
  });

  return filteredValues
    .map((value) => value.split('').slice(startString.length).join(''))
    .join('-');
}
