import React, { Component } from 'react';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    
  }
 
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };
    this.setState(prevState => ({
     contacts: [contact, ...prevState.contacts],
   }))
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
 
  render() {
    const { contacts } = this.state;
    console.log(this.state.filter)
   

     return (
    <div>
        <Form onSubmit={this.addContact} />
        <h1>Contacts</h1>
         <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={contacts} onDeleteContact={this.deleteContact} />
        
           
          
    </div>
  );
  }
 
};
