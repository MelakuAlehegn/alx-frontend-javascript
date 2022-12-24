export default function getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    }
  });
}
getFullResponseFromAPI()
  .then(console.log('Got a response from the API'))
  .catch(() => {
    console.log('rejected the promise, something wrong happened');
  });
