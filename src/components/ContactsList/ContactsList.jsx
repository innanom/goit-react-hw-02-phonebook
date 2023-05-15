import React from 'react';
import { PropTypes } from 'prop-types';

const ContactsList = ({ contacts }) => {
    <ul>
        {contacts.map(({ name, number,id }) => (
            <li key={id}>
                <p>{name}: {number}</p>
            </li>
        ))
        }
    </ul>
};

ContactsList.proptypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id:  PropTypes.string.isRequired
    
  }))
}

export default ContactsList;