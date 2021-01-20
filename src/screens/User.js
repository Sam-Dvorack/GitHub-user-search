import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { useSelector, useDispatch } from 'react-redux';
import { FetchUsers } from '../redux/actions/FetchUsers';

import api from '../services/api';
import dbOperations from '../services/dbOperation';
import DetailCard from '../components/DetailCard';
import SpinGif from '../resources/loading.gif';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: 15
	},
	control: {
		padding: theme.spacing(2)
	},
	Breadcrumbs: {
		marginLeft: 10
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh'
	}
}));

const User = (props) => {
	const Search = useSelector(UserObject => UserObject.Search.search);
	const classes = useStyles();
	const dispatch = useDispatch();
	const Users = useSelector(UserObject => UserObject.Users.users);

	useEffect(() => {
		if (Search === '') {
			return;
		}

		api.svc(Search)
			.then(function (data) {
				// Dispatch action.
				dispatch(FetchUsers(data.items));

				// Save to indexedDB
				dbOperations.setData(data.items);
			})
			.catch(function (err) {
				alert(err.message);
			});
	}, []);

	const getDetail = () => {
		return Users.map(user => {
			return <Grid key={user.id} item>
				<DetailCard
					image={user.avatar_url}
					name={user.login}
					gitHubProfile={user.html_url}
					user={user}
					{...props}
				/>
			</Grid>;
		});
	};

	return (
		<>
			<Breadcrumbs className={classes.Breadcrumbs} aria-label="breadcrumb">
				<Link color="inherit" href="/">
					Home
      			</Link>
			</Breadcrumbs>
			{
				Users === undefined
					?
					<div className={classes.loading}>
						<img alt='' src={SpinGif} />
					</div>
					:
					<Grid container className={classes.root} spacing={2}>
						<Grid item xs={12}>
							<Grid container justify="center" spacing={3}>
								{
									getDetail()
								}
							</Grid>
						</Grid>
					</Grid>
			}
		</>
	);
};

export default User;
