import React from 'react';
import styled from 'styled-components';

import Card from '../card';

import { theme, List, ListItem } from '../my-styles';

const UserMost = (props) => {
    const { topVideos } = props;
    return (
        <List>
            {topVideos.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Card item={item} size={theme.size.medium}/>
                    </ListItem>
                );
            })}
        </List>
    );
}

UserMost.defaultProps = {
    topVideos: [
        {
            id: 1,
            snippet: {
                title: 'How to learn React',
                description: 'Keep in mind',
                thumbnails: {
                    default: {
                        url: 'https://www.iotforall.com/wp-content/uploads/2016/12/How-to-Learn-React-Redux-%E2%80%93-Resources-and-Guide.jpg'
                    }
                }
            }
        },
        {
            id: 2,
            snippet: {
                title: 'React components is all',
                description: 'This is about us',
                thumbnails: {
                    default: {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
                    }
                }
            }
        },
        {
            id: 3,
            snippet: {
                title: 'React components is all',
                description: 'This is about us',
                thumbnails: {
                    default: {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
                    }
                }
            }
        },
        {
            id: 4,
            snippet: {
                title: 'React components is all',
                description: 'This is about us',
                thumbnails: {
                    default: {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
                    }
                }
            }
        },
        {
            id: 5,
            snippet: {
                title: 'React components is all',
                description: 'This is about us',
                thumbnails: {
                    default: {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
                    }
                }
            }
        },
    ]
}
export default UserMost;