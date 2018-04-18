/* Check Tracking Number field
Contains a value
The value is non-empty
The value is be exactly 5 characters long
Each character is a number
*/

export const required = value => (value ? undefined : "Required");
export const nonEmpty = value =>
    value.trim() !== '' ? undefined : "Cannot be empty";
export const numLength = value =>
    (value.length === 5) ? undefined : "Must be 5 characters long";
export const isANumber = value =>  /^\d+$/.test(value) ? undefined : 'Must only contain numbers';