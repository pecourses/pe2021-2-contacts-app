import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  contacts: [],
  isFetching: false,
  error: null,
  filter: {
    isFavourite: '',
  },
};

const contactsReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    // CREATE_CONTACT_...
    case ACTION_TYPES.CREATE_CONTACT_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.CREATE_CONTACT_SUCCESS: {
      const { newContact } = action;
      const { contacts } = state;
      const newContacts = [...contacts, { ...newContact }];
      return { ...state, contacts: newContacts, isFetching: false };
    }
    case ACTION_TYPES.CREATE_CONTACT_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFetching: false };
    }
    // GET_CONTACTS_...
    case ACTION_TYPES.GET_CONTACTS_REQUEST: {
      return { ...state, isFetching: true, error: null };
    }
    case ACTION_TYPES.GET_CONTACTS_SUCCESS: {
      const { newContacts: receivedContacts } = action;

      const newContacts = [...receivedContacts];
      return { ...state, contacts: newContacts, isFetching: false };
    }
    case ACTION_TYPES.GET_CONTACTS_ERROR: {
      const { err } = action;
      return { ...state, error: err, isFetching: false };
    }
    //-------------------------
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
