import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';

import { useDispatch } from 'react-redux';
import { UpdateSearch } from '../redux/actions/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: 400,
		position: 'absolute', left: '50%', top: '40%',
		transform: 'translate(-50%, -40%)',
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

		props.history.push('/users');
	};

	const onKeyDown = (e) => {
		if (e.keyCode == 13) {
			onSearchClick();
		}
	};

	return (
		<>
			<Typography gutterBottom variant="h3" component="h2" className={classes.title}>
				GitHub Search
			</Typography>
			<Paper className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder="Search for a GitHub user"
					inputProps={{ 'aria-label': 'search google maps' }}
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