import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        padding: 20px 20px 0 20px;
        line-height: 1;
        background-color: #F8F8FA;
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
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding 0;
    }
`
