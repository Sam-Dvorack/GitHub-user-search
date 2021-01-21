import Localbase from 'localbase';

let db = new Localbase('db');

db.config.debug = false;

const setData = (data) => {
	// Save to indexedDB.
	db.collection('users').set(data);
};

const getData = () => {
	// Get data from IndexedDB.
	db.collection('users')		
		.get()
		.then(users => {
			return users;
		});
};

export default {
	setData,
	getData
};