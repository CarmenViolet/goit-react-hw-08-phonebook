import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if(contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  formSubmitHandler = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    this.contactCheck(newUser.name)
      ? alert(`${newUser.name} is already in contacts!`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newUser],
        }));
  };

  contactCheck = newUser => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name === newUser);
  };

  onFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className={css.container}>
        <h1 className={css.container__title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2 className={css.contacts__title}>Contacts</h2>
        <Filter filter={filter} onFilter={this.onFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteButton={this.deleteContact}
        />
      </div>
    );
  }
}
