import React from 'react';
import styled from 'styled-components';

import AddVideoToPlaylistContainer from '../../containers/add-video-to-playlist-container';

const List = styled.ul`
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(
        to right,
        #f2f2ef,
        ${props => props.theme.panels.borderColor.primary},
        #f2f2ef
        ) 0.5;
    border-left: none;
    border-right: none;
    border-bottom: none;
`;
const ListItem = styled.li`

`;

const InModalPlaylists = ({ list, toggleClose }) => {
    return (
        <List onClick={toggleClose}>
            {
                list.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            {/* я так зрозумів, що item не потрібно сюди передавати
                            його будемо брати із match  */}
                            <AddVideoToPlaylistContainer item={item}/>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}
export default InModalPlaylists;
