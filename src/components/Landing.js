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
      .limit(1)
      .onSnapshot(snap => {
        console.log("HEYREIRUHE", snap);
        snap.forEach(session => {
          this.setState({ session });
        });
      });
  }

  render() {
    return <div>
        <h1>Landing Page</h1>

        <p>Hey {this.state.session.title}!</p>
      </div>;
  }
}

export default LandingPage;