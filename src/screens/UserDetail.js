import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';
import api from '../services/api';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 10,
		width: 500,
		flex: 1,
		flexDirection: "colum",
		position: 'absolute', left: '50%', top: '30%',
		transform: 'translate(-50%, -30%)',
		alignSelf: "center",
		backgroundColor: "#f7f7f7"
	},
	large: {
		width: 150,
		height: 150,
		left: '50%',
		top: '30%',
		transform: 'translate(-50%, -30%)'
	},
	title: {
		marginTop: 15,
		textAlign: "center"
	}
}));

const UserDetail = () => {
	const [user, setUser] = useState({});
	const classes = useStyles();
	const User = useSelector(UserObject => UserObject.User.user);

	useEffect(() => {
		api.about(User.url)
			.then(function (data) {
				setUser(data);
			})
			.catch(function (err) {
				console.log(err.message);
			});
	}, []);

	return (
		<Paper className={classes.root} elevation={1}>
			<Avatar alt="User" src={User.avatar_url} className={classes.large} />
			<Typography gutterBottom variant="h5" component="h2" className={classes.title}>
				{user.name === null ? User.login : user.name}
			</Typography>
			<Typography gutterBottom variant="subtitle1" component="h5" className={classes.title}>
				{user.location}
			</Typography>
			<Typography gutterBottom variant="body1" component="h5" className={classes.title}>
				{user.bio}
			</Typography>
			<Typography gutterBottom variant="caption" component="h5" className={classes.title}>
				{`Followers: ${user.followers}`}
			</Typography>
			<Typography gutterBottom variant="caption" component="h5" className={classes.title}>
				{`Public Repos: ${user.public_repos}`}
			</Typography>
		</Paper>
	);
};

export default UserDetail;
