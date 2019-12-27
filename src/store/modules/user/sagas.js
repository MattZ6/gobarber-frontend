import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import ActionTypes from '~/store/modules/user/types';
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailure,
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* loadUser() {
  try {
    const { data } = yield call(api.get, 'users');

    yield put(loadUserSuccess(data));
  } catch (err) {
    yield put(loadUserFailure());
  }
}

export function* updateUser({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    yield call(api.put, 'users', profile);

    yield put(loadUserRequest());

    yield put(updateProfileSuccess());

    toast.success('Perfil atualizado com sucesso!');
  } catch (err) {
    toast.error('Não foi possível atualizar o perfil, confira seus dados');

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(ActionTypes.LOAD_REQUEST, loadUser),
  takeLatest(ActionTypes.UPDATE_REQUEST, updateUser),
]);
