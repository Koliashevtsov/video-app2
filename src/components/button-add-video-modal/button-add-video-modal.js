import React, { Component } from 'react';
import Modal from 'styled-react-modal';

import styled from 'styled-components';
import { Box } from 'rebass';

import CreateNewPlaylistModal from '../create-new-playlist-modal';
import InModalPlaylistsContainer from '../../containers/in-modal-playlists-container';

const StyledModal = Modal.styled`
    width: 200px;
    display: flex;
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
    border: 1px solid ${props => props.theme.panels.backgroundColor.primary};
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.65);

    position: relative;
    left: 20px;
    top: 10px;
`;

const Button = styled.button`
    :hover {
        cursor: pointer;
    }
`;
const BackPanel = styled(Box)`
    background-color: ${props => props.theme.panels.backgroundColor.primary}
`;
const Main = styled(Box)`
`;

class ButtonAddVideoModal extends Component {

    state = {
        isOpen: false
    }

    toggleModal = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(`clientX -> ${e.clientX}||| clientY ${e.clientY}`);
    }

    render(){
        return (
            <Box>
                <Button onClick={this.toggleModal}>Add Video </Button>
                <StyledModal
                    isOpen={this.state.isOpen}
                    onBackgroundClick={this.toggleModal}
                    onEscapeKeydown={this.toggleModal}>
                    <BackPanel width={1/6}></BackPanel>
                    <Main width={1}>
                        {/* виходить шо ModalProvider нада закидати в App
                        а потім уже знаючи координати кліку на Add Videо
                        розміщувати там наше модальне вікно тому що два модальних
                        провайдера робити не логічно

                        координати є, тепер потрібно закинути їх у вигляді
                        props для StyledModal щоб використовувати їх у вигляді
                        css top and left */}
                        <CreateNewPlaylistModal/>
                        <InModalPlaylistsContainer/>
                    </Main>
                </StyledModal>
            </Box>
        );
    }
}

export default ButtonAddVideoModal;
