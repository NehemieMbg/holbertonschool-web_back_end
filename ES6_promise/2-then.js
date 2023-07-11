export default function handleResponseFromAPI(promise) {
  return promise
    .then((value) => {
      if (value) return value;
    })
    .catch((error) => error)
    .finally(() => console.log('Got a response from the API'));
}
