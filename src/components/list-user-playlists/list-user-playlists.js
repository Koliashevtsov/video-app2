import React from 'react';
import styled from 'styled-components';

import UserPlaylistsItem from '../user-playlists-item';

import { theme } from '../my-styles';

const List = styled.ul`
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
`;
const ListItem = styled.li`
`;

const ListUserPlaylists = (props) => {
    const { listUserPlaylists } = props;
    return (
        <List theme={theme}>
            {
                listUserPlaylists.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <UserPlaylistsItem item={item}/>
                        </ListItem>
                    );
                })
            }
        </List>
    );
}

export default ListUserPlaylists;
