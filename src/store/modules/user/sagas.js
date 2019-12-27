import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { loadUserSuccess, loadUserFailure } from '~/store/modules/user/actions';
import ActionTypes from '~/store/modules/user/types';

export function* loadUser() {
  try {
    const { data } = yield call(api.get, 'users');

    yield put(loadUserSuccess(data));
  } catch (err) {
    yield put(loadUserFailure());
  }
}

export default all([takeLatest(ActionTypes.LOAD_REQUEST, loadUser)]);
