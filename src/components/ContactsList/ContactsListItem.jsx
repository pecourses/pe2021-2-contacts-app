import React from 'react';
import { connect } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { updateContact, removeContact } from '../../actions/actionCreators';

function ContactsListItem (props) {
  const {
    contact: { id, name, isFavourite, birthday, telNumber },
    update,
    remove,
  } = props;

  const handleChange = () => {
    update({ isFavourite: !isFavourite }, id);
  };

  const handleClickDelete = () => remove(id);

  return (
    <li>
      <input type='checkbox' checked={isFavourite} onChange={handleChange} />
      Name: {name}, tel: {telNumber},
      {!birthday || <span> birthday: {birthday}</span>}
      <DeleteForeverIcon onClick={handleClickDelete} />
    </li>
  );
}

// PropTypes

const mapDispathToProps = dispatch => ({
  update: (values, id) => {
    dispatch(updateContact(values, id));
  },
  remove: id => {
    dispatch(removeContact(id));
  },
});

export default connect(null, mapDispathToProps)(ContactsListItem);
