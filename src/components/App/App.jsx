import { useEffect, useState } from "react";
import css from "./App.module.css";
import initialData from "../../data/initialData.json";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const getInitialData = () => {
  const savedContacts = window.localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : initialData;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialData);
  const [filter, setFilter] = useState("");

  // Filter by name
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Add new contacts
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  // Delete Contacts
  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  //Save Data to local storage
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.appTitle}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        contacts={visibleContacts}
        onDeleteContacts={deleteContacts}
      />
    </div>
  );
}
