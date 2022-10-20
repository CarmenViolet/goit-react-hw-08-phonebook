import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const ContactForm = ({formSubmitHandler}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();

    formSubmitHandler({name, number});

    reset();
  };


  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.form} onSubmit={onSubmit}>
        <label>
          Name
          <input
            className={css.form__input}
            id={nanoid()}
            onChange={handleNameInput}
            value={name}
            type="text"
            name="name"
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            className={css.form__input}
            id={nanoid()}
            onChange={handleNameInput}
            type="tel"
            name="number"
            placeholder="Enter your phone number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.add__button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
