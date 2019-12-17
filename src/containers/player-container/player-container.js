import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Player } from '../../components/video-view-items';

class PlayerContainer extends Component {
    render(){
        return (
            <Player
                selectedVideo={this.props.selectedVideo}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo
    };
}
export default connect(mapStateToProps)(PlayerContainer);
