import ACTION_TYPES from './actionTypes';

export const createContact = newContact => ({
  type: ACTION_TYPES.CREATE_CONTACT,
  newContact,
});
