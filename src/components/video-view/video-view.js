import React from 'react';

import { Flex, Box } from 'rebass'

import { UserMost, Player, UserPlaylists } from '../video-view-items';

const VideoView = (props) => {
    const { selectedVideo } = props;
    return (
        <Flex justifyContent='space-between'>
            <Box>
                <UserMost/>
            </Box>
            <Box>
                <Player selectedVideo={selectedVideo}/>
            </Box>
            <Box>
                <UserPlaylists/>
            </Box>
        </Flex>
    );
}
export default VideoView;
