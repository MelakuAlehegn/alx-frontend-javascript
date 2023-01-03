import { signUpUser } from "./4-user-promise";
import { uploadPhoto } from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
        const output = []
        for (const item of result){
            output.push({status: item.status, value: item.value})
        }
        return output
    })
}