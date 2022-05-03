import { format } from 'date-fns';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: [
    {
      id: 0,
      name: 'Test',
      telNumber: '+380123456789',
      birthday: '2000-12-01',
      isFavourite: false,
    },
    {
      id: -1,
      name: 'Test1',
      telNumber: '+380123456788',
      birthday: format(new Date(), 'Y-MM-dd'),
      isFavourite: true,
    },
  ],
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
