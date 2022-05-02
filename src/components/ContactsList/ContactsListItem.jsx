import React from 'react';
import { connect } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import classNames from 'classnames';
import { updateContact, removeContact } from '../../actions/actionCreators';
import styles from './ContactsListItem.module.scss';
import { isBirthdayToday } from '../../utils/dateUtils';

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

  const isTodayContactBirthday = isBirthdayToday(
    new Date(birthday),
    new Date()
  );

  const contactClassName = classNames(styles.contactInfo, {
    [styles.contactWithBirthdayToday]: isTodayContactBirthday,
  });

  return (
    <li className={contactClassName}>
      <input type='checkbox' checked={isFavourite} onChange={handleChange} />
      Name: {name}, tel: {telNumber},
      {!birthday || <span> birthday: {birthday}</span>}
      {isTodayContactBirthday && (
        <span className={styles.reminder}>
          Congratulate {name} with Birthday!
        </span>
      )}
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
