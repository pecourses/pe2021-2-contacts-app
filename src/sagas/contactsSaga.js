import { put } from 'redux-saga/effects';
import {
  createContactRequest,
  createContactSuccess,
  createContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
} from '../actions/actionCreators';
import { createContact, getContacts } from '../api';

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
