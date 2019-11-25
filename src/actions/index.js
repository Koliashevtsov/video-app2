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
