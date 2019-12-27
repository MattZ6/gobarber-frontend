import produce from 'immer';

import ActionTypes from '~/store/modules/auth/types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case ActionTypes.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case ActionTypes.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
