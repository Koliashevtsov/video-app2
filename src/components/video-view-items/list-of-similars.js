import React from 'react';
import styled from 'styled-components';
import { Box, Button } from 'rebass';

import VideoListContainer from '../../containers/video-list-container';

import BlockHeader from '../block-header';

const BoxWrapper = styled(Box)`
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.31);
`;
const Wrapper = styled(Box)`
    padding: 15px 20px;
    background-color: ${props => props.theme.panels.backgroundColor.white};
`

const ListOfSimilars = (props) => {
    return (
        <BoxWrapper>
            <BlockHeader>
                Related videos
            </BlockHeader>
            <Wrapper>
                <VideoListContainer/>
            </Wrapper>
        </BoxWrapper>
    );
}

// ListOfSimilars.defaultProps = {
//     topVideos: [
//         {
//             id: 1,
//             snippet: {
//                 title: 'How to learn React',
//                 description: 'Keep in mind',
//                 thumbnails: {
//                     default: {
//                         url: 'https://www.iotforall.com/wp-content/uploads/2016/12/How-to-Learn-React-Redux-%E2%80%93-Resources-and-Guide.jpg'
//                     }
//                 }
//             }
//         },
//         {
//             id: 2,
//             snippet: {
//                 title: 'React components is all',
//                 description: 'This is about us',
//                 thumbnails: {
//                     default: {
//                         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
//                     }
//                 }
//             }
//         },
//         {
//             id: 3,
//             snippet: {
//                 title: 'React components is all',
//                 description: 'This is about us',
//                 thumbnails: {
//                     default: {
//                         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
//                     }
//                 }
//             }
//         },
//         {
//             id: 4,
//             snippet: {
//                 title: 'React components is all',
//                 description: 'This is about us',
//                 thumbnails: {
//                     default: {
//                         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
//                     }
//                 }
//             }
//         },
//         {
//             id: 5,
//             snippet: {
//                 title: 'React components is all',
//                 description: 'This is about us',
//                 thumbnails: {
//                     default: {
//                         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYuyCVN1Nb16bIue9traFQ8UQjuhXAcajIWpGVTq_wNtmhw-IJA'
//                     }
//                 }
//             }
//         },
//     ]
// }
export default ListOfSimilars;
