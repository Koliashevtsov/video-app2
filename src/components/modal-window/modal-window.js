import React, { Component } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import StaticIcon from '../icons/static-icon';


const StyledModal = Modal.styled`
    width: 20rem;
    display: flex;
    flex-flow: column;
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
`;


const ModalHeader = styled(Flex)`
    align-items: center;
    background-color: ${props => props.theme.panels.backgroundColor.primary};
    padding: 10px 14px;
`;
const HeaderTitle = styled.h3`
    font-family: ${props => props.theme.text.fontFamily.main};
    color: ${props => props.theme.panels.color.primary}
`;
const IconWrapper = styled.span`
    margin-left: auto;

    font-size: 20px;
    color: ${props => props.theme.panels.color.primary};

    :hover {
        cursor: pointer;
    }
`;
const ModalMain = styled(Box)`
    padding: 15px 30px;
`;

const ModalWindow = (props) => {
    const { isOpen, toggleClose, header } = props;
    return (
        <Box>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleClose}
                onEscapeKeydown={toggleClose}>
                <ModalHeader>
                    <HeaderTitle>{header}</HeaderTitle>
                    <IconWrapper onClick={toggleClose}>
                        <StaticIcon icon={faTimes}/>
                    </IconWrapper>
                </ModalHeader>
                <ModalMain>
                    {
                        props.children
                    }
                </ModalMain>
            </StyledModal>
        </Box>
    );
}

export default ModalWindow;
