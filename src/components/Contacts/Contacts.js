import { connect } from 'react-redux';

import contactsActions from '../../redux/contacts-actions';

function Contacts({ contacts, onDelete }) {
  console.log(contacts);
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => {
        return (
          <li className="contact-list__item" key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button className="button" id={id} onClick={() => onDelete(id)}>
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
const filterContacts = (allContacts, filter) => {
  return allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};

const mapStateToPrors = ({ contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToPrors = dispatch => ({
  onDelete: id => dispatch(contactsActions.delContacts(id)),
});

export default connect(mapStateToPrors, mapDispatchToPrors)(Contacts);
