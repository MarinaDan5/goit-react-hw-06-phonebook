import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    let namesArray = state.map(item => item.name);
    if (!namesArray.includes(payload.name)) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in contacts!`);
      return state;
    }
  },
  [actions.delContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});
export default combineReducers({ items, filter });

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       let namesArray = state.map(item => item.name);
//       if (!namesArray.includes(payload.name)) {
//         return [...state, payload];
//       } else {
//         alert(`${payload.name} is already in contacts!`);
//         return state;
//       }

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [actions.filterContacts]:
//       return payload;

//     default:
//       return state;
//   }
// };
