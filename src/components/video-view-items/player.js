import React, { Fragment } from 'react';

import styled from 'styled-components';

import AddVideoComponent from '../add-video-component';

const Frame = styled.iframe.attrs(props => ({
    src: props.url
}))``;


const Player = (props) => {
    const { selectedVideo } = props;
    let videoId = '';
    if(selectedVideo){
        videoId = selectedVideo.id.videoId;
    }

    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <Fragment>
            <Frame url={url}/>
            <AddVideoComponent/>
        </Fragment>

    );
}
export default Player;
