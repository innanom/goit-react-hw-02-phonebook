import React from 'react';
import { PropTypes } from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ name, number,id }) => (
            <li key={id}>
                <p>{name}: {number}</p>
                <button onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>
        ))
        }
    </ul>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id:  PropTypes.string.isRequired
    
  }))
}

export default ContactsList;