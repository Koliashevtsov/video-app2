import React from 'react';
import styled from 'styled-components';

import { Box } from 'rebass';

import UserPlaylistsItem from '../user-playlists-item';

import { theme } from '../my-styles';

const List = styled.ul`
`;
const ListItem = styled.li`
    :not(:last-child){
        margin-bottom: 10px;
    }
`;
const BoxWrapper = styled(Box)`
    background-color: ${props => props.theme.panels.backgroundColor.white};
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
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
