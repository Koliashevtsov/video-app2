import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import SearchBox from '../search-box';
import VideoListContainer from '../../containers/video-list-container';
import VideoViewContainer from '../../containers/video-view-container';

import { GlobalStyles } from '../global-styles';
import { Box } from 'rebass';
import { ThemeProvider } from 'styled-components';

import { theme } from '../my-styles';

const SpecialModalBackground = styled.div`

`;

class App extends Component {
    render(){
        return (
            <ThemeProvider theme={theme}>
                <ModalProvider >
                    <Box>
                        <GlobalStyles/>
                        <Route
                            path="/"
                            component={SearchBox}/>
                        <Route
                            path="/video-view/:videoId"
                            component={VideoViewContainer}/>
                        <Route
                            path="/"
                            component={VideoListContainer}
                            exact/>
                    </Box>
                </ModalProvider>
            </ThemeProvider>
        );
    }
}
export default App;
