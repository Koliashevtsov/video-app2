import React from 'react';

import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { theme } from '../my-styles';

import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import StaticIcon from '../icons/static-icon';

const Title = styled.p`
    font-size: ${props => props.theme.text.fontSize.small};
    font-family: ${props => props.theme.text.fontFamily.main};
    font-weight: bold;

    margin-bottom: 3px;
`;
const Meta = styled.p`
    font-size: ${props => props.theme.text.fontSize.small};
    font-family: ${props => props.theme.text.fontFamily.main};
`
const Image = styled.img.attrs(props => ({
    src: props.logo
}))`
    display: inline-block;
    width: 100%;
    height: 100%;
`;

const FlexWrapper = styled(Flex)`
    justify-content: flex-start;
`;
const Flex1 = styled(Flex)`
    flex: 1 0 185px;

    :hover {
        box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.65);
        border-left: 3px solid ${props => props.theme.panels.backgroundColor.primary};
        cursor: pointer;
    }
`;

const ImageWrapper = styled(Box)`
    flex: 1 0 35px;
    width: 35px;
    height: 35px;
    border-radius: 4px;
    overflow: hidden;
`;
const Info = styled(Box)`
    flex: 5 0 150px;
    padding-left: 4px;

    ${Title} {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ${Meta} {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
const TrashWrapper = styled.span`
    flex: 1 0 35px;
    font-size: 12px;
    color: ${props => props.theme.mySymbols.color.secondary};
    margin-left: auto;
    line-height: 35px;
    border-left: 1px solid #BAB8B8;
    text-align: center;

    :hover {
        cursor: pointer;
        color: ${props => props.theme.mySymbols.color.primary}
    }
`;


const TrackItem = (props) => {
    const { track, playTrack, deleteTrack } = props;
    const logo = track.snippet.thumbnails.medium.url;
    const title = track.snippet.title;
    const channelTitle = track.snippet.channelTitle;
    return (
        <FlexWrapper>
            <Flex1 onClick={playTrack}>
                <ImageWrapper>
                    <Image logo={logo}/>
                </ImageWrapper>
                <Info>
                    <Title>{title}</Title>
                    <Meta>{channelTitle}</Meta>
                </Info>
            </Flex1>
            <TrashWrapper onClick={deleteTrack}>
                <StaticIcon icon={faMinusCircle}/>
            </TrashWrapper>
        </FlexWrapper>
    );
}
export default TrackItem;
