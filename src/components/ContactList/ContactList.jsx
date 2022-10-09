
const ContactList = ({contacts, deleteButton}) => {
    return (
        <div>
              <ul >
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <span >{name} {number}</span>
                <button type="button" onClick={deleteButton(id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
        </div>
    )
}

export default ContactList;