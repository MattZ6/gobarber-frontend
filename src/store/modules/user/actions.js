import ActionTypes from '~/store/modules/user/types';

export function loadUserRequest() {
  return {
    type: ActionTypes.LOAD_REQUEST,
  };
}

export function loadUserSuccess(user) {
  return {
    type: ActionTypes.LOAD_SUCCESS,
    payload: { user },
  };
}

export function loadUserFailure() {
  return {
    type: ActionTypes.LOAD_FAILURE,
  };
}
