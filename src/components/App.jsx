import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContacts } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const CONTACT_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    contactCheck(newUser.name)
      ? alert(`${newUser.name} is already in contacts!`)
      : dispatch(addContact(newUser));
  };

  const contactCheck = newUser => {
    return contacts.some(contact => contact.name === newUser);
  };

  const onFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  const deleteContact = contactId => {
    return dispatch(deleteContacts(contactId));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.container}>
      <h1 className={css.container__title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter filter={filter} onFilter={onFilter} />
      <ContactList contacts={filteredContacts} deleteButton={deleteContact} />
    </div>
  );
};
