import React, { Component } from 'react';
import { connect } from 'react-redux';

//use withRouter to have access to history
import { withRouter } from 'react-router-dom';

import { selectVideo } from '../../actions';
import VideoListItem from '../../components/video-list-item';

import { compose } from '../../utils';

class VideoListItemContainer extends Component {

    render(){
        const id = this.props.video.id.videoId;
        return (
            <VideoListItem
                video={this.props.video}
                onSelectVideo={() => this.props.onSelectVideo(id, this.props.history)}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectVideo: (id, history) => {
            // send id to actions creator
            dispatch(selectVideo(id));
            // add address to our history in order to refer parameters in path
            history.push(`video-view/${id}`);
        }
    };
}

export default compose(
    connect(null, mapDispatchToProps),
    withRouter
)(VideoListItemContainer);
