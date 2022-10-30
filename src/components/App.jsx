import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContacts } from 'redux/contacts/contactsOperations';
import { selectContacts, selectIsLoading } from  "../redux/contacts/contactsSelectors";
import { selectFilter } from 'redux/filter/filterSelector';
import { filterContacts } from 'redux/filter/filterSlice';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
      {isLoading && <h2>Is Loading...</h2>}
      <h1 className={css.container__title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter onFilter={onFilter} />
      <ContactList contacts={filteredContacts} deleteButton={deleteContact} />
    </div>
  );
};
