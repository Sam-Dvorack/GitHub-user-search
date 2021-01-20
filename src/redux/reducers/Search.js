import { UPDATE_USER_SEARCH } from '../actions/Types';

const initialState = {
	search: ''
};

const ReducerSearch = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USER_SEARCH:
			return {
				search: action.search
			};
		default:
			return state;
	}
};

export default ReducerSearch;