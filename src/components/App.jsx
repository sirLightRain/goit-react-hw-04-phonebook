import React, { useState, useEffect } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';

import { ContactForm as ContactFormComponent } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// Для гарного Алерту
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  // Аналог DidMount. Запускаємо один раз на тсадії монтування і більше ніколи
  useEffect(() => {
    const savedContscts = localStorage.getItem('contacts');
    if (savedContscts !== null) {
      setContacts(JSON.parse(savedContscts));
    }
  }, []);

  // Аналог DidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Метод, щро дадає контакт у state.
  const addContact = newContact => {
    const isDublicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isDublicate) {
      toast.error(
        'A contact with this name or number is already in the list!',
        {
          position: 'top-right',
          autoClose: 2500,
          theme: 'colored',
        }
      );
      return;
    } else {
      // Заміна this.setState на функцію setContacts для оновлення стану
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  // Метод оновлення state в залежності від введеного в фільтр
  const handleFiltrChange = value => {
    setFilter(value);
  };

  // Фільтрація контактів
  const filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  // Видалення контакту
  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactFormComponent addContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFiltrChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />

      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
