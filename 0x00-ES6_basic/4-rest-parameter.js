export default function returnHowManyArguments(...args) {
    let count = 0;
    for (let arg = 0; arg<args.length; arg++) count++
    return count
}