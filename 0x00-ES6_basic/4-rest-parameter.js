export default function returnHowManyArguments(...args) {
  let count = 0;
  for (let arg = 0; arg < args.length; arg += 1) count += 1;
  return count;
}
