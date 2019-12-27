import produce from 'immer';

import ActionTypes from '~/store/modules/user/types';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.LOAD_REQUEST: {
        draft.loading = true;
        break;
      }

      case ActionTypes.LOAD_SUCCESS: {
        draft.profile = action.payload.user;
        draft.loading = false;
        break;
      }

      case ActionTypes.LOAD_FAILURE: {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
