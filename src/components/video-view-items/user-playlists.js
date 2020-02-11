import React from 'react';
import styled from 'styled-components';
import { Box, Button } from 'rebass';

import ListUserPlaylists from '../list-user-playlists';

import { theme } from '../my-styles';

const BoxWrapper = styled(Box)`
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.31);
`;

const Text = styled.p`
    font-family: ${props => props.theme.text.fontFamily.main};
    height: ${props => props.theme.text.heigth};
    background-color: ${props => props.theme.panels.backgroundColor.secondary};
    text-align: center;
    padding: 20px;
`;
const Header = styled.h2`
    font-family: ${props => props.theme.text.fontFamily.main};
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
    const { listUserPlaylists, editPlaylistName, deletePlaylist } = props;

    return (
        <BoxWrapper>
            <Header theme={theme}>
                Playlists
            </Header>
            {
                listUserPlaylists.length == 0 ? <TextBlock/> :
                <ListUserPlaylists
                    listUserPlaylists={listUserPlaylists}
                    editPlaylistName={editPlaylistName}
                    deletePlaylist={deletePlaylist}
                />
            }
        </BoxWrapper>

    );
}
UserPlaylists.defaultProps = {
    listUserPlaylists: [
        {
            playlistName: 'Rap',
            listTracks: [
                {
                    id: 'deded',
                    title: '50 cent',
                    channelTitle: 'This is hip-hop',
                    logo: "https://images.complex.com/complex/images/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/dhherovzgjn2rm1msgbv/50-cent-biggest-beefs-getty-jordan-darville"
                },
                {
                    id: 'dwdwe',
                    title: 'eminem',
                    channelTitle: 'The best rapper ever for my opinion',
                    logo: "https://i.ytimg.com/vi/_Yhyp-_hX2s/maxresdefault.jpg"
                }
            ]
        },
        {
            playlistName: 'Technoffffffffff',
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
