import { createStore, combineReducers } from 'redux';
import getPostsReducer from './reducers/getPostsReducer';

const reducer = combineReducers({
    getPostsReducer,
});

const store = createStore( reducer );

export default store;