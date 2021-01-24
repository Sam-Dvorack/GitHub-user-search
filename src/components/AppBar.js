import React from 'react';
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Link
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		marginLeft: 15
	},
	appBar: {
		backgroundColor: "#24292e",
		textAlign: "center"
	}
}));

const MenuAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h4" className={classes.title}>
						<Link color="inherit" href="/" underline="none">
							GitHub Search
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default MenuAppBar;