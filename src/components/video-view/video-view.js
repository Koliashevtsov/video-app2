import React from 'react';

import styled from 'styled-components';
import { Flex, Box } from 'rebass'

import { UserMost, Player } from '../video-view-items';
import PlayerContainer from '../../containers/player-container';
import UserPlaylistsContainer from '../../containers/user-playlists-container';


const StyledBoxUserPlaylist = styled(Box)`
    ${'' /* box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.65); */}
`;

const VideoView = (props) => {
    const { selectedVideo } = props;
    return (
        <Flex justifyContent='space-between'>
            <Box width={1}>
                <UserMost/>
            </Box>
            <Box width={1}>
                <PlayerContainer/>
            </Box>
            <StyledBoxUserPlaylist width={1/2}>
                <UserPlaylistsContainer/>
            </StyledBoxUserPlaylist>
        </Flex>
    );
}
export default VideoView;
