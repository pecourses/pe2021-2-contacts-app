import ACTION_TYPES from './actionTypes';

export const createContactAction = values => ({
  type: ACTION_TYPES.CREATE_CONTACT_ACTION,
  values,
});
export const createContactRequest = () => ({
  type: ACTION_TYPES.CREATE_CONTACT_REQUEST,
});
export const createContactSuccess = newContact => ({
  type: ACTION_TYPES.CREATE_CONTACT_SUCCESS,
  newContact,
});
export const createContactError = err => ({
  type: ACTION_TYPES.CREATE_CONTACT_ERROR,
  err,
});

export const getContactsAction = () => ({
  type: ACTION_TYPES.GET_CONTACTS_ACTION,
});
export const getContactsRequest = () => ({
  type: ACTION_TYPES.GET_CONTACTS_REQUEST,
});
export const getContactsSuccess = newContacts => ({
  type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
  newContacts,
});
export const getContactsError = err => ({
  type: ACTION_TYPES.GET_CONTACTS_ERROR,
  err,
});

export const updateContactAction = (values, id) => ({
  type: ACTION_TYPES.UPDATE_CONTACT_ACTION,
  id,
  values,
});
export const updateContactRequest = () => ({
  type: ACTION_TYPES.UPDATE_CONTACT_REQUEST,
});
export const updateContactSuccess = updatedContact => ({
  type: ACTION_TYPES.UPDATE_CONTACT_SUCCESS,
  updatedContact,
});
export const updateContactError = err => ({
  type: ACTION_TYPES.UPDATE_CONTACT_ERROR,
  err,
});

export const removeContact = contactId => ({
  type: ACTION_TYPES.REMOVE_CONTACT,
  contactId,
});

export const updateFilter = values => ({
  type: ACTION_TYPES.UPDATE_FILTER,
  values,
});
