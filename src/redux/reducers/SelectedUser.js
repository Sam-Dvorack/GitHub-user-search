import { SELECTED_USER } from '../actions/Types';

const initialState = {
	user: {}
};

const SelectedUser = (state = initialState, action) => {
	switch (action.type) {
		case SELECTED_USER:
			return {
				user: action.user
			};
		default:
			return state;
	}
};

export default SelectedUser;