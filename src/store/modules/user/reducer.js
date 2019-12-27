import produce from 'immer';

import ActionTypes from '~/store/modules/user/types';

const INITIAL_STATE = {
  user: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.LOAD_SUCCESS:
      return produce(state, draft => {
        draft.user = action.payload.user;
        draft.loading = false;
      });

    default:
      return state;
  }
}
