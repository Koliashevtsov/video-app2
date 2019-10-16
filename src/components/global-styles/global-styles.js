import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 20px 200px 0 200px;
        line-height: 1;
    }
    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0;
        padding: 0;
    }
    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }
`
