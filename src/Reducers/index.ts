import {
  FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS,
  ADD_ITEMS
} from '../Action/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null
}

export default function Reducer(state: State = initialState, action: Action) {
  const { error, items } = action;
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items
      }
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
}
