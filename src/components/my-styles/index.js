import React from 'react';

import styled from 'styled-components';

const sizeCard = {
    large: {
        width: "650px",
        height: "120px"
    },
    medium: {
        width: "350px",
        height: "80px"
    }
}

const fontSizes = {
    verySmall: "12px",
    small: "14px",
    medium: "16px",
}
const fontFamilys = {
    main: "'Tajawal', sans-serif;",
}
const textType = {
    height: "14px",
    fontSize: fontSizes,
    fontFamily: fontFamilys
}


const panelsType = {
    backgroundColor: {
        primary: "#ff5e3a",
        secondary: "#f2f2ef",
        secondaryHover: "#d9d9d7"

    },
    color: {
        primary: "white",
        secondary: "#2a314d"
    },
    borderColor: {
        primary: "#ff5e3a",
        secondary: "#a9a9a7",
        secondaryFocus: "#ff5e3a"
    }
}
const mySymbolsType = {
    color: {
        primary: "#ff5e3a",
        secondary: "#2a314d"
    }
}
const buttonType = {
    boxShadow: {
        backgroundColor: {
            inset: {
                primary: "#ff7e61"
            }
        }
    }
}

export const theme = {
    size: sizeCard,
    text: textType,
    panels: panelsType,
    button: buttonType,
    mySymbols: mySymbolsType
}


export const List = styled.ul``;
export const ListItem = styled.li``;

export const Form = styled.form``;
export const Input = styled.input``;

export const Title = styled.p``;

export const TitleInListModal = styled.h4`
    color: ${props => props.theme.panels.color.secondary};
    font-family: ${props => props.theme.text.fontFamily.main};
    padding: 6px 6px;

    :hover {
        background-color: ${props => props.theme.panels.backgroundColor.secondaryHover};
        cursor: pointer;
    }
`;
