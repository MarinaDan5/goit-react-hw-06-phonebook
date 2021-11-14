export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const filterContacts = state => {
  const allContacts = getContacts(state);
  const filter = getFilter(state);
  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};
