import React, { Component } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import EditIcon from '../icons/edit-icon';
import ModalWindow from '../modal-window';
import EditPlaylistContainer from '../../containers/edit-playlist-container';

class EditIconToModal extends Component {
    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const { playlist } = this.props;
        return (
            <Box>
                <EditIcon toggleModal={this.toggleModal}/>
                <ModalWindow
                    isOpen={this.state.isOpen}
                    toggleClose={this.toggleModal}
                    header={"Edit playlist name"}
                    >
                        <EditPlaylistContainer
                            playlist={playlist}
                            toggleModal={this.toggleModal}/>
                </ModalWindow>
            </Box>
        );
    }
}

export default EditIconToModal;
