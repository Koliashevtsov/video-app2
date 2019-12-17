import React from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';

import UserPlaylistsItem from '../user-playlists-item';

import { theme } from '../my-styles';

const List = styled.ul`
`;
const ListItem = styled.li`
    :not(:last-child){
        margin-bottom: 8px;
    }
`;
const BoxWrapper = styled(Box)`
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
    padding: 8px 8px 8px 8px;
`;

const ListUserPlaylists = (props) => {
    const { listUserPlaylists } = props;
    return (
        <BoxWrapper>
            <List theme={theme}>
                {
                    listUserPlaylists.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <UserPlaylistsItem
                                    item={item}/>
                            </ListItem>
                        );
                    })
                }
            </List>
        </BoxWrapper>
    );
}

export default ListUserPlaylists;
