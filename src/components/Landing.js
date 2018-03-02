import React, { Component } from 'react';
import PropTypes from "prop-types";
import { db } from '../fire';
import Song from './Song';
import SongDraggable from './SongDraggable'
import DraggableList from 'react-draggable-list'
import AddSong from './AddSong';

class LandingPage extends Component {
  static contextTypes = {
    authUser: PropTypes.object
  };

  constructor(props, context) {
    super(props);
    this.state = {
      session: {},
      loading: true
    };
  }

  componentWillMount() {
    db
      .collection("sessions")
      .orderBy("date")
      .limit(1)
      .onSnapshot(snap => {
        snap.forEach(session => {
          this.setState({ session: session.data(), loading: false });
        });
      });
  }

  onListChange(newList) {
    const newListWithOrder = newList.map(s => ({
      ...s,
      order: newList.indexOf(s)
    }));
    db
      .collection("sessions")
      .doc("u0dIh0357M5R15Jr2MhZ")
      .update({
        songs: newListWithOrder
      });
  }

  render() {

    const { authUser } = this.context;

    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h1>{this.state.session.title}</h1>

          {!this.state.loading && (
            <div className="addSong">
              <AddSong session={this.state.session} />
            </div>
          )}

          {authUser && (
            <DraggableList
              list={this.state.session.songs}
              template={SongDraggable}
              itemKey="title"
              onMoveEnd={newList => this.onListChange(newList)}
            />
          )}
          {!authUser &&
            this.state.session.songs.map((song, index) => (
              <Song song={song} key={index} />
            ))}
        </div>
      );
    }
  }
}

export default LandingPage;