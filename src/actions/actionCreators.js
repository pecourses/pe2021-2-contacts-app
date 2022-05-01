import ACTION_TYPES from './actionTypes';

export const createContact = newContact => ({
  type: ACTION_TYPES.CREATE_CONTACT,
  newContact,
});

export const updateContact = (newContactInfo, contactId) => ({
  type: ACTION_TYPES.UPDATE_CONTACT,
  newContactInfo,
  contactId,
});
