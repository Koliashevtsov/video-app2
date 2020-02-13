import React, { Fragment } from 'react';

import styled from 'styled-components';

import VideoListItemContainer from '../../containers/video-list-item-container';

const List = styled.ul`
`;
const ListItem = styled.li`
    :not(:last-child):nth-child(1n){
        margin-bottom: 12px;
    }
`;

const VideoList = (props) => {
    const { videos } = props;
    return (
        <List>
            {videos.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <VideoListItemContainer video={item}/>
                    </ListItem>
                );
            })}
        </List>
    );
}
export default VideoList;
