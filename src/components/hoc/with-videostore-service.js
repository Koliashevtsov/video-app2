import React from 'react';

import {VideostoreServiceConsumer} from '../videostore-service-context';

const withVideostoreService = () => (Wrapper) => {
    return (
        (props) => {
            return (
                <VideostoreServiceConsumer>
                    {
                        (videolistService) => {
                            return (
                                <Wrapper
                                {...props}
                                videolistService={videolistService}/>
                            );
                        }
                    }
                </VideostoreServiceConsumer>
            );
        }
    );
}

export default withVideostoreService;
