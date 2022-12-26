export default function appendToEachArrayValue(array, appendString) {
  const array1 = [];
  for (const idx of array) {
    const value = appendString + idx;
    array1.push(value);
  }
  return (array1);
}
