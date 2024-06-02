import css from "./Contact.module.css";
import { IoCallSharp } from "react-icons/io5";

import { FaUser } from "react-icons/fa6";

const Contact = ({ name, number, id, onDeleteContacts }) => {
  return (
    <li className={css.contactList}>
      <div className={css.contactContainer}>
        <p className={css.contactText}>
          <FaUser size={20} />
          {name}
        </p>
        <p className={css.contactText}>
          <IoCallSharp size={20} />
          {number}
        </p>
      </div>
      <button onClick={() => onDeleteContacts(id)}>Delete</button>
    </li>
  );
};

export default Contact;
