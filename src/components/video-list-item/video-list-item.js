import React from 'react';

import Card from '../card';

import { theme } from '../my-styles';

const VideoListItem = (props) => {
    const { video, onSelectVideo } = props;
    return (
        <Card
            item={video}
            action={onSelectVideo}
            size={theme.size.large}
        />
    );
}
export default VideoListItem;
