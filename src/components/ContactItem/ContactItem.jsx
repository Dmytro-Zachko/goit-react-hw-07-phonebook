import PropTypes from 'prop-types';
import { Button, Item} from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Operations';

export const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();

   const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
       <li>
        <span>{name}</span>: <Item>{phone}</Item>

        <Button type="button" onClick={handleDelete}>
          Delete
        </Button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};