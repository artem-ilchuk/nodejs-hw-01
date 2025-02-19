import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const data = await readContacts();
    return data;
  } catch (error) {
    console.log('Getting contacts went wrong', error);
  }
};

console.log(await getAllContacts());
