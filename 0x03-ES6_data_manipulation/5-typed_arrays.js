export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const myarry = new DataView(new ArrayBuffer(length), 0, length);
  myarry.setInt8(position, value);
  return myarry;
}
