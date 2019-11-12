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

const textType = {
    height: "14px"
}

const fontsType = {
    main: "'Tajawal', sans-serif;",
}
const panelsType = {
    backgroundColor: {
        primary: "#ff5e3a",
        secondary: "#f2f2ef"
    },
    color: {
        primary: "white",
        secondary: "#2a314d"
    }
}

export const theme = {
    size: sizeCard,
    text: textType,
    fontFamily: fontsType,
    panels: panelsType
}


export const List = styled.ul``;
export const ListItem = styled.li``;

export const Form = styled.form``;
export const Input = styled.input``;

export const Title = styled.p``;
