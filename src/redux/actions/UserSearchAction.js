import {
	UPDATE_USER_SEARCH,
	FETCH_USERS,
	SELECTED_USER
} from '../actions/Types';

const UpdateSearch = (search) => {
	return {
		type: UPDATE_USER_SEARCH,
		search: search
	};
};

const FetchUsers = (users) => {
	return {
		type: FETCH_USERS,
		users: users
	};
};

const SelectedUser = (user) => {
	return {
		type: SELECTED_USER,
		user: user
	};
};

export {
	UpdateSearch,
	FetchUsers,
	SelectedUser
};