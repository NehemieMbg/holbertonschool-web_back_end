export default function handleResponseFromAPI(promise) {
  return promise
    .then((value) => value.body)
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
