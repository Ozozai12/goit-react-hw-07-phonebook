import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from 'components/App.module.css';
import { addedContact, deletedContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in your contact list`);
      return;
    }

    dispatch(addedContact(contact));
  };

  const deleteContact = deleteContactId => {
    dispatch(deletedContact(deleteContactId));
  };

  const handleFilterChange = event => {
    dispatch(filterChange(event.target.value));
  };

  const loweredFilter = filter.toLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(loweredFilter);
  });

  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter query={filter} onChange={handleFilterChange} />
      <ContactList
        filterContacts={filterContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
