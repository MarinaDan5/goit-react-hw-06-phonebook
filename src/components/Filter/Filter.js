import contactsActions from '../../redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="filter-container">
      <p className="title-text">Find contacts by name</p>
      <input
        className="form__input"
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(contactsActions.filterContacts(e.currentTarget.value))
        }
      />
    </div>
  );
}
// const mapStateToPrors = state => ({ value: state.contacts.filter });
// const mapDispatchToPrors = dispatch => ({
//   onChange: e =>
//     dispatch(contactsActions.filterContacts(e.currentTarget.value)),
// });

// export default connect(mapStateToPrors, mapDispatchToPrors)(Filter);
