import React, { Component } from 'react';
import { connect } from 'react-redux';
//use withRouter to have access to history
import { withRouter } from 'react-router-dom';

import { selectVideo, trackDeleted } from '../../actions';

import TrackItem from '../../components/track-item';

import { compose } from '../../utils';

class TrackItemContainer extends Component {
    render(){
        const { playlist, track, history } = this.props;
        return (
            <TrackItem
                track={track}
                playTrack={() => this.props.playTrack(track, history)}
                deleteTrack={() => this.props.deleteTrack(playlist, track)}/>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playTrack: (track, history) => {
            const trackId = track.id.videoId;
            dispatch(selectVideo(trackId))
            history.push(`video-view/${trackId}`);
        },
        deleteTrack: (playlist, track) => {
            const playlistId = playlist.id;
            const trackId = track.id.videoId;
            dispatch(trackDeleted(playlistId, trackId))
        }
    };
}

export default compose(
    connect(null, mapDispatchToProps),
    withRouter
)(TrackItemContainer);
