import { UPDATE_USER_SEARCH } from '../actions/Types';

export const UpdateSearch = (search) => {
	return {
		type: UPDATE_USER_SEARCH,
		search: search
	};
};