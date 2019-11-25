import React from 'react';
import styled from 'styled-components';

import { TitleInListModal } from '../my-styles';

const List = styled.ul`
    border-top: 1px solid ${props => props.theme.panels.borderColor.primary}
`;
const ListItem = styled.li`

`;

const InModalPlaylists = ({ list }) => {
    return (
        <List>
            {
                list.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <TitleInListModal>
                                {item.playlistName}
                            </TitleInListModal>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}
export default InModalPlaylists;
