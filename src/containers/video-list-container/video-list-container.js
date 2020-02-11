import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchVideos } from '../../actions';

import withVideostoreService from '../../components/hoc';

import VideoList from '../../components/video-list';

import { compose } from '../../utils';


// I use this component in two places, in App and in ListOfSimilars
class VideoListContainer extends Component {

    componentDidMount(){
        this.props.uploadVideos(this.props.title)
    }
    componentDidUpdate(prevProps){
        if(this.props.title !== prevProps.title){
            this.props.uploadVideos(this.props.title)
        }
    }

    render(){
        return (
            <VideoList
                title={this.props.title}
                videos={this.props.videos}
                />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        videos: state.videos
    };
}
const mapDispatchToProps = (dispatch, { videolistService }) => {
    return {
        uploadVideos: (title) => dispatch(fetchVideos(videolistService)(title))
    };
}

export default compose(
    withVideostoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(VideoListContainer);
