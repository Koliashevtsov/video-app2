import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';

import SearchBox from '../search-box';
import VideoListContainer from '../../containers/video-list-container';
import VideoViewContainer from '../../containers/video-view-container';

import { GlobalStyles } from '../global-styles';
import { Box } from 'rebass';
import { ThemeProvider } from 'styled-components';

import { theme } from '../my-styles';

const SpecialModalBackground = styled(BaseModalBackground)`
    background-color: rgba(0, 0, 0, ${props => props.backgroundOpacity});
`;

class App extends Component {
    render(){
        return (
            <ThemeProvider theme={theme}>
                <ModalProvider backgroundComponent={SpecialModalBackground}>
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
