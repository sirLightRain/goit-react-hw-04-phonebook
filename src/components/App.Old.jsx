import React from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Component } from 'react';

import { ContactForm as ContactFormComponent } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// Для гарного Алерту
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };

  // componentDidMount() {
  //   const savedContscts = localStorage.getItem('contacts');
  //   if (savedContscts !== null) {
  //     this.setState({ contacts: JSON.parse(savedContscts) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // // Метод, щро дадає контакт у state.
  // addContact = newContact => {
  //   const isDublicate = this.state.contacts.some(
  //     contact =>
  //       contact.name.toLowerCase() === newContact.name.toLowerCase() ||
  //       contact.number === newContact.number
  //   );

  //   if (isDublicate) {
  //     toast.error(
  //       'A contact with this name or number is already in the list!',
  //       {
  //         position: 'top-right',
  //         autoClose: 2500,
  //         theme: 'colored',
  //       }
  //     );
  //     return;
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, newContact],
  //     }));
  //   }
  // };

  // // Метод оновлення state в залежності від введеного в фільтр
  // handleFiltrChange = value => {
  //   this.setState({ filter: value });
  // };

  // // Фільтрація контактів
  // filterContacts = (contacts, filter) => {
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // // Видалення контакту
  // handleDeleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactFormComponent addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={this.handleFiltrChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />

        <ToastContainer />
        <GlobalStyle />
      </Layout>
    );
  }
}
