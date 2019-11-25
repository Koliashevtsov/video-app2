import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Player } from '../../components/video-view-items';

class PlayerContainer extends Component {
    render(){
        return (
            <Player
                selectedVideo={this.props.selectedVideo}
                addVideoToPlaylist={this.props.addVideoToPlaylist}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        addVideoToPlaylist: () => dispatch()
    };
}
export default connect(mapStateToProps)(PlayerContainer);
