import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  return Promise.allSettled([signUpUser, uploadPhoto])
    .then((result) => {
      const output = [];
      for (const item of result) {
        output.push({ status: item.status, value: item.value });
      }
      return output;
    });
}
