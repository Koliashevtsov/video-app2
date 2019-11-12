import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Button } from 'rebass';

import ListUserPlaylists from '../list-user-playlists';

import { theme } from '../my-styles';

const Text = styled.p`
    font-family: ${props => props.theme.fontFamily.main};
    height: ${props => props.theme.text.heigth};
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
    text-align: center;
    padding: 20px;
`;
const Header = styled.h2`
    font-family: ${props => props.theme.fontFamily.main};
    text-align: center;
    background-color: ${props => props.theme.panels.backgroundColor.primary};
    color: ${props => props.theme.panels.color.primary};
    padding: 30px 0 30px 0;
`;

const TextBlock = (props) => {
    return (
        <Text theme={theme}>
            You have not have any playlists yet.
        </Text>
    )
}

const UserPlaylists = (props) => {
    const { listUserPlaylists } = props;

    return (
        <Fragment>
            <Header theme={theme}>
                Playlists
            </Header>
            {
                listUserPlaylists.length == 0 ? <TextBlock/> :
                <ListUserPlaylists
                    listUserPlaylists={listUserPlaylists}
                />
            }
        </Fragment>

    );
}
UserPlaylists.defaultProps = {
    listUserPlaylists: [
        {
            playlistName: 'Rap',
            listTracks: [
                {
                    id: 'deded',
                    title: '50 cent'
                },
                {
                    id: 'dwdwe',
                    title: 'eminem'
                }
            ]
        },
        {
            playlistName: 'Techno',
            listTracks: [
                {
                    id: 'ertty',
                    title: 'Armin Van Buiren'
                },
                {
                    id: 'wrtyd',
                    title: 'Tiesto'
                }
            ]
        }
    ]
}
export default UserPlaylists;
