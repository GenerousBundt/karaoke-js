import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as userService from '../services/user';
import { db } from '../fire';

class AddSongPage extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			songName: '', 
			songUrl: '',
			stageName: '',
			order: 99999, 
		};

		this.writeSongToFirebase = this.writeSongToFirebase.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
			event.preventDefault();
			
	    const {
	      songName,
				songUrl,
				stageName,
				order,
	    } = this.state;

			console.log('SUBMITTED!', songName, songUrl);
			this.writeSongToFirebase();
	}

	writeSongToFirebase() {
		let sessionSongs = this.props.session.songs;
		const newSong = { title: this.state.songName, url: this.state.songUrl, stageName: this.state.stageName };
		sessionSongs.push(newSong);

		console.log("SONGZ", sessionSongs);

		db
      .collection("sessions")
      .doc('u0dIh0357M5R15Jr2MhZ')
      .update({ songs: sessionSongs })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
	}

	render() {

		const {
			songName,
			songUrl,
			stageName,
		} = this.state;

		const isInvalid =
			songName === '' ||
			songUrl === '' ||
			stageName === '';

		return <div>
        <form onSubmit={this.onSubmit}>
          <input value={stageName} onChange={event => this.setState({
                stageName: event.target.value
              })} type="text" placeholder="Stage Name" />
          <input value={songName} onChange={event => this.setState({
                songName: event.target.value
              })} type="text" placeholder="Song Title" />
          <input value={songUrl} onChange={event => this.setState({
                songUrl: event.target.value
              })} type="text" placeholder="Song Url" />
          <button disabled={isInvalid} type="submit">
            Submit Song
          </button>
        </form>
      </div>;

	}
	
}

// AddSongPage.propTypes = {
//   session: PropTypes.object
// };

export default AddSongPage;