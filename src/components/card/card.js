import React from 'react';

import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Icon = styled.img.attrs((props) => ({
    src: props.image
}))`
    display: inline-block;
    width: 100%;
    height: 100%;
`;
const IconWrapper = styled(Box)`
    margin-right: 6px;
    overflow: hidden;
`;
const MetaWrapper = styled(Box)`
    overflow: hidden;
    font-family: ${props => props.theme.text.fontFamily.youtube};
`;
const Container = styled(Flex)`
    width: ${props => props.size.width};
    height: ${props => props.size.height};
    padding: 6px;
    border: 1px solid #d1cdcd;

    :hover {
        cursor: pointer;
        box-shadow:
    }

    ${IconWrapper} {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${props => props.size.width == '650px' ? '150px' : '80px'};
    }
    ${MetaWrapper} {
        flex-grow: 1;
    }
`;

const Title = styled.h4`
    margin-bottom: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const Descriptions = styled.p`
    color: #7a7a7a;
`;


const Card = ({item, action, size}) => {
    const image = item.snippet.thumbnails.default.url;
    const title = item.snippet.title;
    const descriptions = item.snippet.description;
    const channelTitle = item.snippet.channelTitle;
    return (
        <Container size={size} onClick={action}>
            <IconWrapper>
                <Icon image={image}/>
            </IconWrapper>
            <MetaWrapper>
                <Title>{title}</Title>
                <Descriptions>
                    {size.width == '650px' ? descriptions : channelTitle}
                </Descriptions>
            </MetaWrapper>
        </Container>
    );
}
export default Card;
