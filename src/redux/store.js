import { createStore, combineReducers } from 'redux';
import ReducerSearch from './reducers/Search';
import FetchUsers from './reducers/FetchUsers';
import SelectedUser from './reducers/SelectedUser';

const rootReducer = combineReducers({
	Search: ReducerSearch,
	Users: FetchUsers,
	User: SelectedUser
});

const store = createStore(rootReducer);

export default store;