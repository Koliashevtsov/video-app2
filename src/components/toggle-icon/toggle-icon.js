import React from 'react';

import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { theme } from '../my-styles';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
`

const Rotate = styled.div`
    animation: ${props => props.view ? rotate : null} 0.1s linear 1 forwards;
    color: ${props => props.theme.panels.backgroundColor.primary};
`;

const ToggleIcon = (props) => {
    const { icon, open } = props;
    return (
        <Rotate view={open} theme={theme}>
            <FontAwesomeIcon icon={icon}/>
        </Rotate>
    );
}

export default ToggleIcon;
