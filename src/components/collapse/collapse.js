import React, { Component } from 'react';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { Box, Flex } from 'rebass';
import styled from 'styled-components';

import { theme } from '../my-styles';

import ToggleIcon from '../icons/toggle-icon';

const BoxWrapper = styled(Box)`

`;
const ChildrenWrapper = styled(Box)`
    padding: 5px;
    padding-left: 20px;
    min-width: 220px;
`;

const Title = styled.h3`
    display: block;
    color: ${props => props.theme.panels.color.secondary};
    font-family: ${props => props.theme.text.fontFamily.main};
    margin-right: auto;
`;
const TitleWrapper = styled(Flex)`
    padding: 10px 8px;
    background-color: ${props => props.theme.panels.backgroundColor.primary2};
    box-shadow: 1px 2px 5px -1px rgba(0,0,0,0.61);
    border-radius: 3px;

    :hover {
        background-color: #d9d9d7;
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
            <BoxWrapper>
                <TitleWrapper onClick={this.togglePanel}>
                    <Title theme={theme}>{playlistName}</Title>
                    <ToggleIcon
                        icon={faAngleDown}
                        open={this.state.open}/>
                </TitleWrapper>

                {this.state.open &&
                    <ChildrenWrapper>
                        {this.props.children}
                    </ChildrenWrapper>
                }

            </BoxWrapper>
        );
    }
}

export default Collapse;
