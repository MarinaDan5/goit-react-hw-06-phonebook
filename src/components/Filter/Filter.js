import contactsActions from '../../redux/contacts-actions';
import { connect } from 'react-redux';

function Filter({ value, onChange }) {
  return (
    <div className="filter-container">
      <p className="title-text">Find contacts by name</p>
      <input
        className="form__input"
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
const mapStateToPrors = state => ({ value: state.contacts.filter });
const mapDispatchToPrors = dispatch => ({
  onChange: e =>
    dispatch(contactsActions.filterContacts(e.currentTarget.value)),
});

export default connect(mapStateToPrors, mapDispatchToPrors)(Filter);
