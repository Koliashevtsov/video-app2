import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const IconWrapper = styled.span`
    display: inline-block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    margin-left: 10px;
    background-color: ${props => props.theme.mySymbols.backgroundColor.secondary};
    color: ${props => props.theme.mySymbols.color.secondaryOpas};
    border-radius: 50%;
    text-align: center;
`;

const StatusPlayIcon = (props) => {
    return (
        <IconWrapper>
            <FontAwesomeIcon icon={faMusic}/>
        </IconWrapper>
    );
}
export default StatusPlayIcon;
