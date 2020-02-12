import React, { Component } from 'react';
import { connect } from 'react-redux';

//use withRouter to have access to history
import { withRouter } from 'react-router-dom';

import { selectVideo } from '../../actions';
import VideoListItem from '../../components/video-list-item';

import { compose } from '../../utils';

class VideoListItemContainer extends Component {

    state = {
        sizeCard: 'large'
    }

    componentDidMount(){
        // check in which place render this component and
        // set appropriate sizeCard
        if(this.props.history.location.pathname.length > 1){
            this.changeCardSize('medium')
        }
    }

    changeCardSize(size){
        this.setState({
            sizeCard: size
        })
    }



    render(){
        const id = this.props.video.id.videoId;
        const { video } = this.props
        return (
            <VideoListItem
                video={video}
                sizeCard={this.state.sizeCard}
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
    connect(null, mapDispatchToProps),
    withRouter
)(VideoListItemContainer);
