import { put } from 'redux-saga/effects';
import {
  createContactRequest,
  createContactSuccess,
  createContactError,
} from '../actions/actionCreators';
import { createContact } from '../api';

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
