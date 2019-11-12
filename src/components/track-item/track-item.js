import React from 'react';

import { Box } from 'rebass';

const TrackItem = (props) => {
    const { track } = props;
    return (
        <Box>
            {track.title}
        </Box>
    );
}
export default TrackItem;
