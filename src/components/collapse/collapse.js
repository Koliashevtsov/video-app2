import React, { Component } from 'react';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { Box, Flex } from 'rebass';
import styled from 'styled-components';

import { theme } from '../my-styles';

import ToggleIcon from '../toggle-icon';

const Title = styled.h3`
    display: block;
    color: ${props => props.theme.panels.color.secondary};
    font-family: ${props => props.theme.fontFamily.main};
    margin-right: auto;
`;
const TitleContainer = styled(Flex)`
    padding: 10px 8px;

    &:hover {
        background-color: #c1c1bf;
        border-left: 3px solid ${props => props.theme.panels.backgroundColor.primary};
        cursor: pointer;
    }
`;

class Collapse extends Component{
    state = {
        open: false
    }

    togglePanel = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const { playlistName } = this.props.item;
        return (
            <Box>
                <TitleContainer onClick={this.togglePanel}>
                    <Title theme={theme}>{playlistName}</Title>
                    <ToggleIcon
                        icon={faAngleDown}
                        open={this.state.open}/>
                </TitleContainer>
                {this.state.open &&
                    this.props.children
                }
            </Box>
        );
    }
}

export default Collapse;
