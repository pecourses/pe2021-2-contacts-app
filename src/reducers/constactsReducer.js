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
  ],
  isFetching: false,
  error: null,
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
    default:
      return state;
  }
};

export default contactsReducer;
