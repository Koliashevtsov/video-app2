import React, { Component } from 'react';
import { connect } from 'react-redux';

import { videoAddedToPlaylist } from '../../actions';

import AddVideoToPlaylist from '../../components/add-video-to-playlist';

class AddVideoToPlaylistContainer extends Component {
    render(){
        const { item } = this.props;
        return (
            <AddVideoToPlaylist
                item={item}
                addVideoToPlaylist={() => this.props.addVideoToPlaylist(item)}/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentVideo: state.selectedVideo
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addVideoToPlaylist: (playlist) => {
            dispatch(videoAddedToPlaylist(playlist))
        }
    };
}

export default connect(null, mapDispatchToProps)(AddVideoToPlaylistContainer);
