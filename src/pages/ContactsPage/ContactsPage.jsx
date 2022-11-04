import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactsPage.module.css';

import { Loader } from 'components/Loader/Loader';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';

import { selectFilter } from 'redux/filter/filterSelector';
import {
  selectIsLoading,
  selectVisibleContacts,
  selectError,
} from 'redux/contacts/contactsSelectors';
import { filterContacts } from 'redux/filter/filterSlice';
import {
  fetchContacts,
  addContact,
  deleteContacts,
} from 'redux/contacts/contactsOperations';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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

  return (
    <div className={css.container}>
      <h1 className={css.container__title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler} />

      {isLoading && <Loader />}
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter filter={filter} onFilter={onFilter} />
      {error && (
        <ContactList contacts={contacts} deleteButton={deleteContact} />
      )}
    </div>
  );
};

export default ContactsPage;
