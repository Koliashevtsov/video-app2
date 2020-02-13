import React, { Component } from 'react';
import { connect } from 'react-redux';

//use withRouter to have access to history
import { withRouter } from 'react-router-dom';

import { selectVideo } from '../../actions';
import VideoListItem from '../../components/video-list-item';

import { compose } from '../../utils';

class VideoListItemContainer extends Component {

    state = {
        sizeCard: 'large',
        isPlay: false
    }

    componentDidMount(){
        // check in which place render this component and
        // set appropriate sizeCard
        if(this.props.history.location.pathname.length > 1){
            this.changeCardSize('medium')
        }

    }

    componentDidUpdate(prevProps){
        const id = this.props.video.id.videoId; // from component above
        const idCurrVideo = this.props.currentVideo.id.videoId // from reducer

        if(this.props.currentVideo !== prevProps.currentVideo){
            if(id === idCurrVideo) {
                this.setState({
                    isPlay: true
                })
            } else {
                this.setState({
                    isPlay: false
                })
            }
        }
    }

    changeCardSize(size){
        this.setState({
            sizeCard: size
        })
    }



    render(){
        const { video } = this.props
        const id = video.id.videoId;
        return (
            <VideoListItem
                video={video}
                sizeCard={this.state.sizeCard}
                isPlay={this.state.isPlay}
                onSelectVideo={() => this.props.onSelectVideo(id, this.props.history)}/>
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
        onSelectVideo: (id, history) => {
            // send id to actions creator
            dispatch(selectVideo(id));
            // add address to our history in order to refer parameters in path
            // besidess i use this container when my history is empty and
            // when it contain 'video-view/id',  so to avoid
            // 'video-view/id' +  'video-view/id' + 'video-view/id'
            // i check my history location
            let address = `video-view/${id}`;
            if(history.location.pathname.length > 1){
                address = id
            }
            history.push(address);
        }
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(VideoListItemContainer);
