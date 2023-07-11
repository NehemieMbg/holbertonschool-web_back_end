export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => body)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
