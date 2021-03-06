import React, { useState } from 'react';
import {
	Paper,
	InputBase,
	IconButton,
	makeStyles,
	Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useDispatch } from 'react-redux';
import { UpdateSearch } from '../redux/actions/UserSearchAction';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
		margin: 70,
		backgroundColor: '#eee'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	divider: {
		height: 28,
		margin: 4,
	},
	title: {
		position: 'absolute', left: '50%', top: '30%',
		transform: 'translate(-50%, -40%)',
		fontWeight: 900
	}
}));

const SearchField = (props) => {
	const [user, setuser] = useState('');
	const classes = useStyles();
	const dispatch = useDispatch();

	const onSearchClick = () => {
		dispatch(UpdateSearch(user));
	};

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			onSearchClick();
		}
	};

	return (
		<>
			<Paper className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder="Search for a GitHub user"
					inputProps={{ 'aria-label': 'Search for a GitHub user' }}
					onChange={(e) => setuser(e.target.value)}
					onKeyDown={onKeyDown}
				/>
				<IconButton onClick={onSearchClick} className={classes.iconButton} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>
		</>
	);
};

export default SearchField;