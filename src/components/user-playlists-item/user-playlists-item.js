import React from 'react';
import styled from 'styled-components';

import Collapse from '../collapse';
import TrackItem from '../track-item';

const List = styled.ul`
`;
const ListItem = styled.li`
    :not(:last-child){
        margin-bottom: 8px;
    }
`;
const PlaylistInfo = styled.div`
    text-align: right;
    font-family: ${props => props.theme.text.fontFamily.main};
    font-size: ${props => props.theme.text.fontSize.verySmall}
`;

const UserPlaylistsItem = (props) => {
    const { item } = props;
    const listTracks = item.listTracks;
    return (
        <Collapse item={item}>
            <PlaylistInfo>Tracks: {listTracks.length}</PlaylistInfo>
            <List>
                {listTracks.map((i, index) => {
                    return (
                        <ListItem key={index}>
                            <TrackItem track={i}/>
                        </ListItem>
                    );
                })}
            </List>
        </Collapse>
    );
}

export default UserPlaylistsItem;
