export default function cleanSet(set, startString) {
  if (startString === '' || !startString) return '';
  const matchLength = startString.length;

  const setArray = [...set.values()];
  const regexPattern = new RegExp(`^${startString}`);

  const newArr = setArray.map((ele) => {
    if (regexPattern.test(ele))
      return ele.slice().split('').slice(matchLength).join('');
  });

  if (newArr[-1] === undefined) newArr.pop();
  return newArr.join('-');
}
