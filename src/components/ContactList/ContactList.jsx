import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteButton }) => {
  return (
    <>
      <ul className={css.contact__list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contact} key={id}>
              <span className={css.contact__name}>
                {name} {number}
              </span>
              <button
                className={css.delete__button}
                type="button"
                onClick={() => deleteButton(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
};
