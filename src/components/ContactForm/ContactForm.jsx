import { Component } from "react";
import { nanoid } from 'nanoid';

import css from "./ContactForm.module.css";

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      };

      handleNameInput = ({target: {name, value}}) => {
        this.setState({
          [name]: value
        })
      };
    
      onSubmit = (event) => {
        event.preventDefault();
    
        this.props.onSubmit(this.state)

        this.reset()
      };

      reset = () => {
        this.setState({name: '', number: ''});
      };

      
    render () {
        const { name, number} = this.state;

        return (
            <>
            <form className={css.form} onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              id={nanoid()}
              onChange={this.handleNameInput}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              id={nanoid()}
              onChange={this.handleNameInput}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className={css.add__button} type="submit">Add contact</button>
        </form>
            </>
        )
    }
}

export default ContactForm;