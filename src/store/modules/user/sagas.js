import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { loadUserSuccess } from '~/store/modules/user/actions';
import ActionTypes from '~/store/modules/user/types';

export function* loadUser() {
  const { data } = yield call(api.get, 'users');

  const { user } = data;

  yield put(loadUserSuccess(user));
}

export default all([takeLatest(ActionTypes.LOAD_REQUEST, loadUser)]);
