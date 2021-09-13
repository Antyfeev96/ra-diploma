import { createStore, combineReducers, applyMiddleware } from 'redux'
import Reducer from "../Reducers";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducer: Reducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))