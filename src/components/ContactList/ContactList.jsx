import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { Contactlist } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Contactlist>
      {filteredContacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact}></ContactItem>;
      })}
    </Contactlist>
  );
};
