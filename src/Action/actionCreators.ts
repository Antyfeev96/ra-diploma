import {
  FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS,
  ADD_ITEMS
} from "./actionTypes";

export const fetchRequest = () => ({
  type: FETCH_REQUEST
});

export const addItems = (items: Array<Item>) => ({
  type: ADD_ITEMS, payload: { items }
});