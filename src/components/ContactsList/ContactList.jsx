import PropTypes from 'prop-types';
import { Contacts } from './Contacts'

export const ContactList = ({ contacts, deleteUser }) => {
    return (
      <div>
         {contacts.map(({ id, name, number }) => {
        return (
          <Contacts
                key={id}
                name={name}
                number={number}
                id={id}
                deleteUser={deleteUser}
          />
        );
      })}
        
      </div>
    )
}


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    deleteUser: PropTypes.func.isRequired
}
