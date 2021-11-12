import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/ADD', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
const delContacts = createAction('contacts/DELETE');
const filterContacts = createAction('contacts/FILTER');

export default { addContact, delContacts, filterContacts };

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });
// const delContacts = id => ({
//   type: types.DELETE,
//   payload: id,
// });
// const filterContacts = value => ({
//   type: types.FILTER,
//   payload: value,
// });
