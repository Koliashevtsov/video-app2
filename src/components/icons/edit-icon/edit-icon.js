import React from 'react';
import styled from 'styled-components';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

import StaticIcon from '../static-icon';

const EditIconStyled = styled.span`
    margin-right: 3px;
    font-size: 10px;

    :hover {
        cursor: pointer;
        color: ${props => props.theme.mySymbols.color.primary}
    }
`;

const EditIcon = ({ toggleModal }) => {
    return (
        <EditIconStyled onClick={toggleModal}>
            <StaticIcon icon={faEdit}/>
        </EditIconStyled>
    );
}
export default EditIcon
