import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {
  createContactSaga,
  getContactsSaga,
  updateContactSaga,
} from './contactsSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_CONTACT_ACTION, createContactSaga);
  yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_CONTACT_ACTION, updateContactSaga);
}

export default rootSaga;
