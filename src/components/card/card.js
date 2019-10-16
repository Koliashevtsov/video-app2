import React from 'react';


import styled from 'styled-components';
import { Flex, Box } from 'rebass';

const Icon = styled.img.attrs((props) => ({
    src: props.image
}))`
    display: inline-block;
    width: 100%;
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
`;
const IconWrapper = styled(Box)`
    flex: 0 0 150px;
    margin-right: 6px;
    overflow: hidden;
`;
const Title = styled.h3`

`;
const Descriptions = styled.p`
    color: #7a7a7a;
`;
const MyBlock = styled(Box)`
    overflow: hidden;
`

const Card = ({item, action, size}) => {
    const image = item.snippet.thumbnails.default.url;
    const title = item.snippet.title;
    const descriptions = item.snippet.description;
    return (
        <Container size={size} onClick={action}>
            <IconWrapper>
                <Icon image={image}/>
            </IconWrapper>
            <MyBlock flex="1 1 400px">
                <Title>{title}</Title>
                <Descriptions>{descriptions}</Descriptions>
            </MyBlock>
        </Container>
    );
}
export default Card;
