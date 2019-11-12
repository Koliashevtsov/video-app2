import React from 'react';

import { Flex, Box } from 'rebass'

import { UserMost, Player } from '../video-view-items';
import UserPlaylistsContainer from '../../containers/user-playlists-container';

const VideoView = (props) => {
    const { selectedVideo } = props;
    return (
        <Flex justifyContent='space-between'>
            <Box width={1}>
                <UserMost/>
            </Box>
            <Box width={1}>
                <Player selectedVideo={selectedVideo}/>
            </Box>
            <Box width={1/2}>
                <UserPlaylistsContainer/>
            </Box>
        </Flex>
    );
}
export default VideoView;
