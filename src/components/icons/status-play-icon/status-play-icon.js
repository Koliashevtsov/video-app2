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
    border-radius: 50%;
    text-align: center;

    color: ${props => {
        return props.isPlay ?
        props.theme.mySymbols.color.primary :
        props.theme.mySymbols.color.secondaryOpas;
        }
    };

    background-color: ${props => {
        return props.isPlay ?
        props.theme.mySymbols.backgroundColor.primary :
        props.theme.mySymbols.backgroundColor.secondary
        }

    };
`;

const StatusPlayIcon = (props) => {
    const { isPlay } = props;
    return (
        <IconWrapper isPlay={isPlay}>
            <FontAwesomeIcon icon={faMusic}/>
        </IconWrapper>
    );
}
export default StatusPlayIcon;
