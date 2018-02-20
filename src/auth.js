import { auth } from './fire';

// Sign Up
export const createUserWithEmailAndPassword = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const signInWithEmailAndPassword = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () =>
	auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);