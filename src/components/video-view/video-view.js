import React from 'react';

import styled from 'styled-components';
import { Flex, Box } from 'rebass'

import { ListOfRelated, Player } from '../video-view-items';
import PlayerContainer from '../../containers/player-container';
import UserPlaylistsContainer from '../../containers/user-playlists-container';

const UserMostStyled = styled(Box)`
`;
const PlayerContainerStyled = styled(Box)`
    width: auto;
`;
const UserPlaylistsContainerStyled = styled(Box)`
    width: 300px;
`;

const VideoView = (props) => {
    const { selectedVideo } = props;
    return (
        <Flex justifyContent='space-between'>
            <UserMostStyled>
                <ListOfRelated/>
            </UserMostStyled>
            <PlayerContainerStyled width={1}>
                <PlayerContainer/>
            </PlayerContainerStyled>
            <UserPlaylistsContainerStyled width={1/2}>
                <UserPlaylistsContainer/>
            </UserPlaylistsContainerStyled>
        </Flex>
    );
}
export default VideoView;
