
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Importez le middleware redux-thunk
import rootReducer from './reducers/index.js'; // Importez vos reducers ici

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
