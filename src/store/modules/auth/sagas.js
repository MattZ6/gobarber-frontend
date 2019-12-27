import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from '~/store/modules/auth/actions';
import ActionTypes from '~/store/modules/auth/types';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { data } = yield call(api.post, 'sessions', { email, password });

    const { token } = data;

    yield put(signInSuccess(token));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export default all([takeLatest(ActionTypes.SIGN_IN_REQUEST, signIn)]);
