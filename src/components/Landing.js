import React, { Component } from 'react';
import { db } from '../fire';
import Song from './Song';
import SongDraggable from './SongDraggable'
import DraggableList from 'react-draggable-list'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
    };
  }

  componentWillMount() {
    db
      .collection("sessions")
      .orderBy("date")
      .limit(1)
      .onSnapshot(snap => {
        snap.forEach(session => {
          this.setState({ session: session.data() });
        });
      });

  }

  onListChange(newList) {
    const newListWithOrder = newList.map(s => ({ ...s, order: newList.indexOf(s) }));
    db
      .collection('sessions')
      .doc('u0dIh0357M5R15Jr2MhZ')
      .update({
        songs:newListWithOrder
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.session.title}</h1>

        {
          this.props.authUser && 
          <DraggableList 
            list={this.state.session.songs} 
            template={SongDraggable} 
            itemKey="title" 
            onMoveEnd={newList => this.onListChange(newList)} 
          />
        }
        {
          !this.props.authUser && this.state.session.songs.map((song, index) => (
              <Song song={song} key={index} />
          ))
        }
        
      </div>
    )
  }
}

export default LandingPage;