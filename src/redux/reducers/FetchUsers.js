import { FETCH_USERS } from '../actions/Types';

const initialState = {
	users: []
};

const FetchUsers = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				users: action.users
			};
		default:
			return state;
	}
};

export default FetchUsers;