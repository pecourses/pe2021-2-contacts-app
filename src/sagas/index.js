import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createContactSaga, getContactsSaga } from './contactsSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_CONTACT_ACTION, createContactSaga);
  yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga);
}

export default rootSaga;
