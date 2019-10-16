import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { VideostoreServiceProvider } from './components/videostore-service-context';

import VideolistService from './services/videolist-service';
import FakeService from './services/fake-service';

import App from './components/app';

import store from './store';

const videolistService = new VideolistService();

ReactDOM.render(
    <Provider store={store}>
        <VideostoreServiceProvider value={videolistService}>
            <Router>
                <App />
            </Router>    
        </VideostoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);
