import React, { Component } from 'react';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number:''
  }
  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    // this.props.onSubmit(this.state);
    this.reset();

  }

  reset = () => {
    this.setState({
    contacts: [],
    name: '',
    number:''})
  }
  render() {


     return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 20,
      //   color: '#010101'
      // }}
       >
      <form onSubmit={this.handleSubmit}>
          <h1>Phonebook</h1>
          <label>Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           </label>
           <label>Number
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
           </label>
          <button type='submit'>Add contact</button>
         </form>
          <div>
            <h1>Contacts</h1>
           <ul>
                     
                       
            </ul>
          </div>
    </div>
  );
  }
 
};
