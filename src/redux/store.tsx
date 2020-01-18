import { createStore, combineReducers } from 'redux';
import postReducer from './reducers/postReducer';

const reducer = combineReducers({
    postReducer,    
});

const store = createStore( reducer );

export default store;