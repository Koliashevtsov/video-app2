import React from 'react';
import styled from 'styled-components';

import { Flex, Box } from 'rebass';

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

const FormComponent = (props) => {
    const { forSubmit, forValue, forChange } = props;
    return (
        <Form onSubmit={forSubmit}>
            <FlexWrapper>
                <Label>Please, enter playlist name</Label>
                <Flex>
                    <Input
                        value={forValue}
                        onChange={forChange}/>
                    <Submit>OK</Submit>
                </Flex>
            </FlexWrapper>
        </Form>
    );
}
export default FormComponent;
