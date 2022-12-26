export default function appendToEachArrayValue(array, appendString) {
  let array1 = []
  for (let value of array.entries()) {
    value = appendString + value;
    array1.push(value)
  }
  return array1;
}
