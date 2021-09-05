import {
  FETCH_REQUEST,
  FETCH_ERROR,
  FETCH_SUCCESS
} from '../Action/actionTypes'
import {ReducerAction} from "react";

const initialState = {
  loading: false,
  error: null
}

export default function servicesReducer(state = initialState, action: ReducerAction<any>) {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
}
