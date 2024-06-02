import Contact from "../Contact/Contact";
import css from "./ContacList.module.css";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <>
      <h3 className={css.results}>Results:</h3>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContacts={onDeleteContacts}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
