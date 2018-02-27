import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as userService from '../services/user';

const AddSongPage = (props, { authUser, user }) =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <SongUrlForm userEmail={authUser.email} user={user}/>
  </div>

const INITIAL_STATE = {
	songName: '',
	songUrl: '',
};

class SongUrlForm extends Component {
		constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (event) => {
	    const {
	      songName,
	      songUrl,
	    } = this.state;

	    // const {
	    // 	history,
	    // } = this.props;

	    console.log('SUBMITTED!', songName, songUrl);

	    event.preventDefault();
	}

	onTestSubmit = (event) => {
		event.preventDefault();
		console.log('USER', this.props.user);
		// .then((response) => {
		// 	test = response.val();
		// 	console.log('TEST', test);
		// 	console.log('KEY', test.key);
		// });
		
		// .then((results) => {
		// 	results.forEach(result => {
		// 		result.forEach(childResult => {
		// 			console.log('TEST USER GET', childResult);
		// 		})
		// 	});
			
		// });
		

	}

	render() {

		const {
			songName,
			songUrl,
		} = this.state;

		const isInvalid =
			songName === '' ||
			songUrl === '';

		return (
			<div>
			<form onSubmit={this.onSubmit}>
	        <input
	          value={songName}
	          onChange={event => this.setState({ songName: event.target.value })}
	          type="text"
	          placeholder="Song Name"
	        />
	        <input
	          value={songUrl}
	          onChange={event => this.setState({ songUrl: event.target.value })}
	          type="text"
	          placeholder="Song Url"
	        />
	        <button disabled={isInvalid} type="submit">
	          Submit Song
	        </button>

	      </form>
	      <form onSubmit={this.onTestSubmit}>
	      	<button  type="submit">
	          Test Button
	        </button>
	      </form>
	      </div>
	      )

	}
	
}

AddSongPage.contextTypes = {
  authUser: PropTypes.object,
  user: PropTypes.object,
};

export default AddSongPage;