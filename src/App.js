import { useState, useEffect } from 'react';

import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';
import './components/Form/Form.css';

import { v4 as uuidv4 } from 'uuid';

const useLocalStorage = (key, defaultContacts) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);
  // const [filter, setFilter] = useState('');

  // const deleteContact = e => {
  //   setContacts(contacts.filter(({ id }) => id !== e.target.id));
  // };

  // const filterContacts = () => {
  //   return contacts.filter(({ name }) =>
  //     name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  //   );
  // };
  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (contacts.some(contact => contact.name.includes(name))) {
  //     alert(`${name} is already in contacts!`);
  //   } else {
  //     setContacts([newContact, ...contacts]);
  //   }
  // };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
