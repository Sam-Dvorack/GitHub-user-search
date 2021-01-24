import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppBar from '../components/AppBar';
import Search from '../screens/Search';
import User from '../screens/User';
import UserDetail from '../screens/UserDetail';

import { Provider } from 'react-redux';
import store from '../redux/store';

const Home = () => {
	return (
		<Provider store={store}>
			<AppBar />
			<Router>
				<Switch>
					<Route path="/" component={Search} exact />
					<Route path="/users" component={User} exact />
					<Route path="/user" component={UserDetail} exact />
				</Switch>
			</Router>
		</Provider>
	);
};

export default Home;
