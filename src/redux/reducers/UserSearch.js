import {
	UPDATE_USER_SEARCH,
	FETCH_USERS,
	SELECTED_USER
} from '../actions/Types';

const initialState = {
	users: [],
	user: {},
	search: ''
};

const UserSearch = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				users: action.users,
				user: state.user,
				search: state.search
			};
		case SELECTED_USER:
			return {
				users: state.users,
				user: action.user,
				search: state.search
			};
		case UPDATE_USER_SEARCH:
			return {
				users: state.users,
				user: state.user,
				search: action.search
			};
		default:
			return state;
	}
};

export default UserSearch;