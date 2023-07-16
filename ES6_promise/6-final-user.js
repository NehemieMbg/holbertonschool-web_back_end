import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const arr = [];
  try {
    const user = await signUpUser(firstName, lastName);
    arr.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  } catch (error) {
    arr.push({
      status: 'rejected',
      value: error.toString(),
    });
  }
  return arr;
}
