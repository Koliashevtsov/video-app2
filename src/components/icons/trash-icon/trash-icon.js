import React from 'react';
import styled from 'styled-components';

import { faTrash } from '@fortawesome/free-solid-svg-icons';

import StaticIcon from '../static-icon';

const TrashIconStyled = styled.span`
    margin-right: 3px;
    font-size: 10px;

    :hover {
        cursor: pointer;
        color: ${props => props.theme.mySymbols.color.primary}
    }
`;

const TrashIcon = ({ deletePlaylist }) => {
    return (
        <TrashIconStyled onClick={deletePlaylist}>
            <StaticIcon icon={faTrash}/>
        </TrashIconStyled>
    );
}
export default TrashIcon;
