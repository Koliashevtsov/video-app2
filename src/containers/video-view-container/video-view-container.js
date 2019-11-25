import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoView from '../../components/video-view';

class VideoViewContainer extends Component {
    // якщо у мене є Playercontainer то VideoViewContainer напевно не потрібен
    // хоча поки що я його залишив
    render(){
        return (
            <VideoView selectedVideo={this.props.selectedVideo}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    };
}

export default connect(mapStateToProps)(VideoViewContainer);
