import { fire }from './fire';

// Sign Up
export const createUserWithEmailAndPassword = (email, password) =>
	fire.createUserWithEmailAndPassword(email, password);

// Sign In
export const signInWithEmailAndPassword = (email, password) =>
	fire.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
	fire.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  fire.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  fire.currentUser.updatePassword(password);