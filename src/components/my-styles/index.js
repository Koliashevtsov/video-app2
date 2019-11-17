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

    },
    color: {
        primary: "white",
        secondary: "#2a314d"
    }
}
const mySymbolsType = {
    color: {
        primary: "#ff5e3a",
        secondary: "#2a314d"
    }
}

export const theme = {
    size: sizeCard,
    text: textType,
    panels: panelsType,
    mySymbols: mySymbolsType
}


export const List = styled.ul``;
export const ListItem = styled.li``;

export const Form = styled.form``;
export const Input = styled.input``;

export const Title = styled.p``;
