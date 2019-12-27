import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess } from '~/store/modules/auth/actions';
import ActionTypes from '~/store/modules/auth/types';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const { data } = yield call(api.post, 'sessions', { email, password });

  const { token } = data;

  yield put(signInSuccess(token));

  history.push('/dashboard');
}

export default all([takeLatest(ActionTypes.SIGN_IN_REQUEST, signIn)]);
