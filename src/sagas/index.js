import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createContactSaga } from './contactsSaga';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_CONTACT_ACTION, createContactSaga);
}

export default rootSaga;
