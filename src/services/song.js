import { firebase, auth } from '../fire';
import Song from '../models/song';

const db = firebase.database();

export const addUserSong = (newUserSong) => {
	db.ref('songs').push(newUserSong);
}