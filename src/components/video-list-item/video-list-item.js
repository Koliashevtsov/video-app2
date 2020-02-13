import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';

import Card from '../card';
import StatusPlayIcon from '../icons/status-play-icon';
import { theme } from '../my-styles';

const ItemWrapper = styled(Flex)`
    align-items: center;
`;

const VideoListItem = (props) => {
    const { video, sizeCard, onSelectVideo } = props
    return (
        <ItemWrapper>
            <Card
                item={video}
                action={onSelectVideo}
                size={theme.size[sizeCard]}
            />
            <StatusPlayIcon/>
        </ItemWrapper>
    );
}
export default VideoListItem;
