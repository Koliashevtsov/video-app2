import React, { Component } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import CloseIcon from '../icons/close-icon';
import FormNewPlaylist from '../form-new-playlist';

import { TitleInListModal } from '../my-styles';

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

class CreateNewPlaylistModal extends Component {

    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return (
            <Box>
                <TitleInListModal
                    onClick={this.toggleModal}
                    >New Playlist</TitleInListModal>
                <StyledModal
                    isOpen={this.state.isOpen}
                    onBackgroundClick={this.toggleModal}
                    onEscapeKeydown={this.toggleModal}>
                    <ModalHeader>
                        <HeaderTitle>Create New Playlist</HeaderTitle>
                        <IconWrapper onClick={this.toggleModal}>
                            <CloseIcon icon={faTimes}/>
                        </IconWrapper>
                    </ModalHeader>
                    <ModalMain>
                        <FormNewPlaylist toggleModal={this.toggleModal}/>
                    </ModalMain>
                </StyledModal>
            </Box>
        );
    }
}

export default CreateNewPlaylistModal;
