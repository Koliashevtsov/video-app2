
export const getTitle = (title) => {
    return {
        type: 'GET_TITLE',
        payload: title
    };
}

const videoListLoaded = (videos) => {
    return {
        type: 'FETCH_VIDEOS_SUCCESS',
        payload: videos
    };
}

const videoListError = (error) => {
    return {
        type: 'FETCH_VIDEOS_FAILURE',
        payload: error
    };
}

export const fetchVideos = (videolistService) => (title) => (dispatch) => {
    console.log(title);
    videolistService.getVideos(title)
        .then((data) => dispatch(videoListLoaded(data)))
        .catch((err) => dispatch(videoListError(err)))
}

// I use this action creator in two containers
// in TrackItemContainer and in VideoListItemContainer
export const selectVideo = (id) => {
    return {
        type: 'VIDEO_SELECTED',
        payload: id
    };
}

export const playlistCreated = (name) => {
    return {
        type: 'PLAYLIST_CREATED',
        payload: name
    };
}
export const playlistEdited = (id, newName) => {
    return {
        type: 'PLAYLIST_EDITED',
        payload: [id, newName]
    };
}
export const playlistDeleted = (id) => {
    return {
        type: 'PLAYLIST_DELETED',
        payload: id
    };
}



export const videoAddedToPlaylist = (playlist) => {
    return {
        type: 'VIDEO_ADDED_TO_PLAYLIST',
        payload: playlist
    };
}

export const trackDeleted = (playlistId, videoId) => {
    return {
        type: 'TRACK_DELETED_SUCCESSFULLY',
        payload: [playlistId, videoId]
    };
}
