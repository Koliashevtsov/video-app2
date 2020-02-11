import React, { Fragment } from 'react';

import styled from 'styled-components';

import VideoListItemContainer from '../../containers/video-list-item-container';
import Card from '../card';

const List = styled.ul`
    padding: 0 20px;
`;
const ListItem = styled.li`
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
