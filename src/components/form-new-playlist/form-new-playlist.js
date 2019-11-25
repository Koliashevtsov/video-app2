import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';

import { playlistCreated } from '../../actions';
const Form = styled.form`

`;
const FlexWrapper = styled(Flex)`
    flex-flow: column;
`;
const Label = styled.label.attrs({
    htmlFor: 'playlist-name'
})`
    font-family: ${props => props.theme.text.fontFamily.main};
    font-weight: bold;
    color: ${props => props.theme.panels.color.secondary};

    margin-bottom: 15px;

`;
const Input = styled.input.attrs({
    id: 'playlist-name',
    type: 'text',
    placeholder: 'New Playlist'
})`
    flex-grow: 1;

    font-family: ${props => props.theme.text.fontFamily.main};
    font-size: ${props => props.theme.text.fontSize.medium};

    background-color: ${props => props.theme.panels.backgroundColor.secondary};

    border: 2px solid ${props => props.theme.panels.borderColor.secondary};
    border-right: none;
    border-radius: 2px;


    padding: 4px 8px;

    :focus {
        border-color: ${props => props.theme.panels.borderColor.secondaryFocus}
    }
`;
const Submit = styled.button`
    margin-left: auto;

    padding: 0 15px 0 15px;

    background-color: ${props => props.theme.panels.backgroundColor.primary};
    box-shadow: inset 0 15px 0 0 ${props => {
            return props.theme.button.boxShadow.backgroundColor.inset.primary}};
    border: 2px solid ${props => props.theme.panels.borderColor.primary};
    border-radius: 0 2px 2px 0;

    font-family: ${props => props.theme.text.fontFamily.main};
    font-size: ${props => props.theme.text.fontSize.medium};
    font-weight: bold;

    color: ${props => props.theme.panels.color.primary};

    :hover {
        cursor: pointer;
        box-shadow: inset 0 -15px 0 0 ${props => {
                return props.theme.button.boxShadow.backgroundColor.inset.primary}};
    }
    :active {
        position: relative;
        top: 1px;
    }
`;

class FormNewPlaylist extends Component {
    state = {
        term: ''
    }

    changeTerm = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    handleTerm = (e) => {
        e.preventDefault();
        this.props.createNewPlaylist(this.state.term);
        this.setState({
            term: ''
        });
        this.props.toggleModal();
    }

    render(){
        return (
            <Form onSubmit={this.handleTerm}>
                <FlexWrapper>
                    <Label>Please, enter playlist name</Label>
                    <Flex>
                        <Input
                            value={this.state.term}
                            onChange={this.changeTerm}/>
                        <Submit>OK</Submit>
                    </Flex>
                </FlexWrapper>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewPlaylist: (term) => {
            dispatch(playlistCreated(term))
        }
    };
}
export default connect(null, mapDispatchToProps)(FormNewPlaylist);
