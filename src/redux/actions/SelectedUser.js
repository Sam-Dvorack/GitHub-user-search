import { SELECTED_USER } from '../actions/Types';

export const SelectedUser = (user) => {
	return {
		type: SELECTED_USER,
		user: user
	};
};