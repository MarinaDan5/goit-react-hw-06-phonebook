import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts-selectors';

import contactsActions from '../../redux/contacts-actions';

export default function Contacts() {
  // const contacts = useSelector(state =>
  //   filterContacts(state.contacts.items, state.contacts.filter),
  // );

  const contacts = useSelector(filterContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsActions.delContacts(id));

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
// const filterContacts = (allContacts, filter) => {
//   return allContacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
//   );
// };

// const mapStateToPrors = ({ contacts: { items, filter } }) => ({
//   contacts: filterContacts(items, filter),
// });

// const mapDispatchToPrors = dispatch => ({
//   onDelete: id => dispatch(contactsActions.delContacts(id)),
// });

// export default connect(mapStateToPrors, mapDispatchToPrors)(Contacts);
