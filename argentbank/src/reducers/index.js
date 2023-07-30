import { combineReducers } from 'redux';
import userReducer from './user.js'

const rootReducer = combineReducers({
  user: userReducer
  // Ajoutez d'autres reducers si nécessaire
});

export default rootReducer;
