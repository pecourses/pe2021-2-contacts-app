import { put } from 'redux-saga/effects';
import {
  createContactRequest,
  createContactSuccess,
  createContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from '../actions/actionCreators';
import { createContact, getContacts, updateContact } from '../api';

export function * createContactSaga (action) {
  yield put(createContactRequest());
  try {
    const { values } = action;
    const data = yield createContact(values);
    yield put(createContactSuccess(data));
  } catch (e) {
    yield put(createContactError(e));
  }
}

export function * getContactsSaga () {
  yield put(getContactsRequest());
  try {
    const data = yield getContacts();
    yield put(getContactsSuccess(data));
  } catch (e) {
    yield put(getContactsError(e));
  }
}

export function * updateContactSaga ({ id, values }) {
  yield put(updateContactRequest());
  try {
    const data = yield updateContact(id, values);
    yield put(updateContactSuccess(data));
  } catch (e) {
    yield put(updateContactError(e));
  }
}
