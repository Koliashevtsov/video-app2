import React, { Fragment } from 'react';

import styled from 'styled-components';

import ButtonAddVideoModal from '../button-add-video-modal';

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
            <ButtonAddVideoModal/>
        </Fragment>

    );
}
export default Player;
