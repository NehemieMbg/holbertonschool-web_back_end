export default function getFullResponseFromAPI(success) {
  if (success)
    return {
      status: 200,
      body: 'Success',
    };

  if (!success) throw new Error('The fake API is not working currently');
}
