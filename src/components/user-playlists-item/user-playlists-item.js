import React from 'react';
import styled from 'styled-components';

import { Flex } from "rebass";

import Collapse from '../collapse';
import TrackItemContainer from '../../containers/track-item-container';

import EditIconToModal from '../edit-icon-to-modal';
import TrashIconContainer from '../../containers/trash-icon-container';

const List = styled.ul`
`;
const ListItem = styled.li`
    :not(:last-child){
        margin-bottom: 8px;
    }
`;
const Meta = styled(Flex)`
    justify-content: flex-end;
    align-items: flex-end;

    margin-bottom: 3px;
`;
const PlaylistInfo = styled.span`
    text-align: right;
    font-family: ${props => props.theme.text.fontFamily.main};
    font-size: ${props => props.theme.text.fontSize.verySmall}
`;


const UserPlaylistsItem = (props) => {
    const { item } = props;
    const listTracks = item.listTracks;
    console.log(`listTracks.length in UserPlaylistsItem ========= > ${listTracks.length}`);
    return (
        <Collapse item={item}>
            <Meta>
                <EditIconToModal playlist={item}/>
                <TrashIconContainer playlist={item}/>
                <PlaylistInfo>Tracks: {listTracks.length}</PlaylistInfo>
            </Meta>
            <List>
                {listTracks.map((i, index) => {
                    return (
                        <ListItem key={index}>
                            <TrackItemContainer playlist={item} track={i}/>
                        </ListItem>
                    );
                })}
            </List>
        </Collapse>
    );
}

export default UserPlaylistsItem;
