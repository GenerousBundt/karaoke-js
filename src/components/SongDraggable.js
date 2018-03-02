import PropTypes from 'prop-types';
import * as SongUtils from '../utils/songUtils';
import '../App.css';
import { TiDelete } from 'react-icons/lib/ti';
import { MdScreenShare } from 'react-icons/lib/md'
var React = require('react');


class SongDraggable extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {item, itemSelected, dragHandle} = this.props;
        var cn = "list-group-item";
        const handleDelete = () => {SongUtils.deleteSongFromSession(item.id)};
        const handleLaunch = () => {window.open(`${item.url}`, '_blank');}
        return (
            <div>
            {dragHandle(<div className="song">
                {this.props.address} 
                <div className="song-title">{item.title}</div>
                <div className="song-stageName">{item.stageName}</div>
            </div>)}
            <TiDelete onClick={handleDelete} color="red"/>
            <MdScreenShare color="white" onClick={handleLaunch}/>
            </div>
            
        )

    }
}

export default SongDraggable;