import React, { Component } from 'react';
import { db } from '../fire';

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

  render() {
    return <div>
        <h1>{this.state.session.title}</h1>

        <p>Put some songs here</p>
      </div>;
  }
}

export default LandingPage;