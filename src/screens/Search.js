import React from 'react';
import SearchField from '../components/SearchField';
import User from './User';

const Search = (props) => {
	return (
		<>
			<SearchField />
			<User {...props} />
		</>
	);
};

export default Search;
