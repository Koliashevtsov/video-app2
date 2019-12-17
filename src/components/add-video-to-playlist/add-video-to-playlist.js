import React from 'react';

import { TitleInListModal } from '../my-styles';

const AddVideoToPlaylist = (props) => {
    const { item, addVideoToPlaylist } = props;
    return (
        <TitleInListModal onClick={addVideoToPlaylist}>
            {item.playlistName}
        </TitleInListModal>
    );
}
export default AddVideoToPlaylist;
