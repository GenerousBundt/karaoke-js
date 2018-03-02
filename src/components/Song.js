import PropTypes from 'prop-types';
import '../App.css';
var React = require('react');


class Song extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        var cn = "list-group-item";

        return (
            <div className="Song">
                {this.props.song.address}
                <div className="song-title">{this.props.song.title}</div>
                <div className="song-stageName">{this.props.song.stageName}</div>
            </div>
        )

    }
}
Song.propTypes = {
    song: PropTypes.object,
};

export default Song;