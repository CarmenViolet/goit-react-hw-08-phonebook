import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

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
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('key'))
  );

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
      : setContacts(prevContacts => [...prevContacts, newUser]);
  };

  const contactCheck = newUser => {
    return contacts.some(contact => contact.name === newUser);
  };

  const onFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContact = contactId => {
    return setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.container}>
      <h1 className={css.container__title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter filter={filter} onFilter={onFilter} />
      <ContactList contacts={filteredContacts} deleteButton={deleteContact} />
    </div>
  );
};
