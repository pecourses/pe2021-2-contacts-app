import React from 'react';
import { updateContact } from '../../actions/actionCreators';
import { connect } from 'react-redux';

function ContactsListItem (props) {
  const {
    contact: { id, name, isFavourite, birthday, telNumber },
    update,
  } = props;

  const handleChange = () => {
    update({ isFavourite: !isFavourite }, id);
  };

  return (
    <li>
      <input type='checkbox' checked={isFavourite} onChange={handleChange} />
      Name: {name}, tel: {telNumber},
      {!birthday || <span>birthday: {birthday}</span>}
    </li>
  );
}

// PropTypes

const mapDispathToProps = dispatch => ({
  update: (values, id) => {
    dispatch(updateContact(values, id));
  },
});

export default connect(null, mapDispathToProps)(ContactsListItem);
