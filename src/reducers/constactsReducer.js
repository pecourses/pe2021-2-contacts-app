import { format } from 'date-fns';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: [],
  isFetching: false,
  error: null,
  filter: {
    isFavourite: '',
  },
};

let serial = 1;

const contactsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_CONTACT: {
      const { newContact } = action;
      const { contacts } = state;
      const newContacts = [
        ...contacts,
        {
          ...newContact,
          id: serial++,
          isFavourite: false,
        },
      ];
      return { ...state, contacts: newContacts };
    }
    case ACTION_TYPES.UPDATE_CONTACT: {
      const { newContactInfo, contactId } = action;
      const { contacts } = state;

      const newContacts = [...contacts];
      const contactIndex = newContacts.findIndex(c => c.id === contactId);
      newContacts[contactIndex] = {
        ...newContacts[contactIndex],
        ...newContactInfo,
      };

      return { ...state, contacts: newContacts };
    }
    case ACTION_TYPES.REMOVE_CONTACT: {
      const { contactId } = action;
      const { contacts } = state;

      const newContacts = [...contacts];
      const contactIndex = newContacts.findIndex(c => c.id === contactId);
      newContacts.splice(contactIndex, 1);

      return { ...state, contacts: newContacts };
    }
    case ACTION_TYPES.UPDATE_FILTER: {
      const { values } = action;
      const { filter } = state;
      return {
        ...state,
        filter: { ...filter, ...values },
      };
    }
    default:
      return state;
  }
};

export default contactsReducer;
