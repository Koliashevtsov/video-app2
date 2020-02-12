import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    font-family: ${props => props.theme.text.fontFamily.main};
    text-align: center;
    background-color: ${props => props.theme.panels.backgroundColor.primary};
    color: ${props => props.theme.panels.color.primary};
    padding: 30px 0 30px 0;
`;

const BlockHeader = (props) => {
    return (
        <Header>
            {props.children}
        </Header>
    );
}
export default BlockHeader;
