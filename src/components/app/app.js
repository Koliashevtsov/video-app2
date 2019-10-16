import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import SearchBox from '../search-box';
import VideoListContainer from '../../containers/video-list-container';
import VideoViewContainer from '../../containers/video-view-container';

import { GlobalStyles } from '../global-styles';
import { Box } from 'rebass';
import { ThemeProvider } from 'styled-components';

import { theme } from '../my-styles';

class App extends Component {
    render(){
        return (
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        );
    }
}
export default App;
