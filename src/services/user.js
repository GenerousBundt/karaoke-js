import { firebase, auth, db } from '../fire';

// const db = firebase.database();

export const createNewUser = (newUser) => {
	console.log(newUser);
	db
    .collection("users")
    .add({
		authUserId: newUser.uid,
		user: 'true',
		admin: newUser.isAdmin || 'false',
		email: newUser.email,
		stageName: newUser.displayName || null,
		name: newUser.fullName || null,
		photoUrl: newUser.photoUrl || null,
		songs: newUser.songs || [],
	})
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.log("Error adding document: ", error);
    });
	
	// db.ref('users').push(newUser);
}

export const getUserByEmail = (userEmail) => {
	db.ref('users').orderByChild('email').equalTo(userEmail).on('value', (snapshot) => {
		return snapshot.val();
	});
}