import React, { Component } from 'react';
import Modal from 'styled-react-modal';

import styled from 'styled-components';
import { Box } from 'rebass';

import ModalWindow from '../modal-window';
import CreatePlaylistContainer from '../../containers/create-playlist-container';
import InModalPlaylistsContainer from '../../containers/in-modal-playlists-container';

import { TitleInListModal } from '../my-styles';

const StyledModal = Modal.styled`
    width: 200px;
    display: flex;
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
    border: 1px solid ${props => props.theme.panels.backgroundColor.primary};
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.65);

    position: absolute;
    top: ${props => props.mousePointY == null ? 0 : props.mousePointY + 20}px;
    left: ${props => props.mousePointX == null ? 0 : props.mousePointX + 20}px;
`;

const Button = styled.button`
    :hover {
        cursor: pointer;
    }
`;
const SidePanel = styled(Box)`
    background-color: ${props => props.theme.panels.backgroundColor.primary}
`;
const Main = styled(Box)`
`;
const ButtonNewPlaylist = styled(TitleInListModal)`

`;

class AddVideoComponent extends Component {

    state = {
        isOpenAddTo: false,
        isOpenCreateNew: false,
        mousePointX: null,
        mousePointY: null,
        backgroundOpacity: 0
    }

    toggleAddTo = (e) => {
        this.setState({
            isOpenAddTo: !this.state.isOpenAddTo,
            mousePointX: e.clientX,
            mousePointY: e.clientY
        });
    }
    toggleCreateNew = () => {
        this.setState({
            isOpenAddTo: !this.state.isOpenAddTo,
            isOpenCreateNew: !this.state.isOpenCreateNew
        })
    }
    toggleClose = () => {
        this.setState({
            isOpenCreateNew: false,
            isOpenAddTo: false
        })
    }

    render(){
        return (
            <Box>
                <Button onClick={this.toggleAddTo}>Add to playlist </Button>
                <StyledModal
                    isOpen={this.state.isOpenAddTo}
                    onBackgroundClick={this.toggleAddTo}
                    onEscapeKeydown={this.toggleAddTo}
                    backgroundProps={{backgroundOpacity: this.state.backgroundOpacity}}
                    mousePointX={this.state.mousePointX}
                    mousePointY={this.state.mousePointY}>
                    <SidePanel width={1/6}></SidePanel>
                    <Main width={1}>
                        <ButtonNewPlaylist
                            onClick={this.toggleCreateNew}
                            >New Playlist</ButtonNewPlaylist>
                        <InModalPlaylistsContainer toggleClose={this.toggleClose}/>
                    </Main>
                </StyledModal>
                <ModalWindow
                    header={"Create New Playlist"}
                    isOpen={this.state.isOpenCreateNew}
                    toggleClose={this.toggleClose}
                    >
                        <CreatePlaylistContainer toggleModal={this.toggleClose}/>
                </ModalWindow>
            </Box>
        );
    }
}

export default AddVideoComponent;
