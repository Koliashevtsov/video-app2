import React from 'react';
import styled from 'styled-components';

import Collapse from '../collapse';
import TrackItem from '../track-item';

const List = styled.ul`
`;
const ListItem = styled.li`
`;

const UserPlaylistsItem = (props) => {
    const { item } = props;
    const listTracks = item.listTracks;
    return (
        <Collapse item={item}>
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
