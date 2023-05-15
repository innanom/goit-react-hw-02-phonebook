import React, { Component } from 'react';
// import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
  }
 
  // formSubmitHendler = data => {
  //   console.log(data);
  //   // const contact = {...data};
  //   // contact.id = nanoid();
  // }

 
  render() {
    const { contacts } = this.state;
    console.log(this.state)


     return (
    <div>
        {/* <Form onSubmit={this.formSubmitHendler} /> */}
        <h1>Contacts</h1>
        <ContactsList contacts={contacts} />
           
          
    </div>
  );
  }
 
};
