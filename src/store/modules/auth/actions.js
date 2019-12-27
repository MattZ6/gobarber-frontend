import ActionTypes from '~/store/modules/auth/types';

export function signInRequest(email, password) {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload: { token },
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signFailure() {
  return {
    type: ActionTypes.SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: ActionTypes.SIGN_OUT,
  };
}
