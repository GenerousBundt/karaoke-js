import { firebase, auth } from '../fire';
import User from '../models/user';

const db = firebase.database();

export const createNewUser = (newAuthUser) => {
	db.ref('users').push(new User(newAuthUser));
}