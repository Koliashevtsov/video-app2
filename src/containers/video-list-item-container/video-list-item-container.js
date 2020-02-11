import React, { Component } from 'react';
import { connect } from 'react-redux';

//use withRouter to have access to history
import { withRouter } from 'react-router-dom';

import { selectVideo } from '../../actions';
import VideoListItem from '../../components/video-list-item';
import Card from '../../components/card';

import { theme } from '../../components/my-styles';

import { compose } from '../../utils';

class VideoListItemContainer extends Component {

    render(){
        const id = this.props.video.id.videoId;
        return (
            <VideoListItem>
                <Card
                    item={this.props.video}
                    action={() => this.props.onSelectVideo(id, this.props.history)}
                    size={theme.size.large}
                />
            </VideoListItem>
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
