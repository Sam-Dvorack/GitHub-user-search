import { FETCH_USERS } from './Types';

export const FetchUsers = (users) => {
	return {
		type: FETCH_USERS,
		users: users
	};
};