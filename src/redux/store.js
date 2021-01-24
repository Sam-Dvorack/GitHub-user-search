import { createStore, combineReducers } from 'redux';
import UserSearch from './reducers/UserSearch';

const rootReducer = combineReducers({
	User: UserSearch
});

const store = createStore(rootReducer);

export default store;