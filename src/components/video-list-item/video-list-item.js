import React from 'react';

import Card from '../card';
import { theme } from '../my-styles';

const VideoListItem = (props) => {
    const { video, sizeCard, onSelectVideo } = props
    return (
        <Card
            item={video}
            action={onSelectVideo}
            size={theme.size[sizeCard]}
        />
    );
}
export default VideoListItem;
