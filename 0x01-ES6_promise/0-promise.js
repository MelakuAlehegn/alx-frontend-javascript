export default function getResponseFromAPI() {
  const promise = new Promise((resolve, reject) => {
    const error = false;
    if (error) {
      resolve('Hello resolved');
    } else reject(new Error('something bad happened'));
  });
  return promise;
}
