import { LOCAL_GET, LOCAL_SET, LOCAL_REMOVE } from 'redux-local-storage/action_types'

export const getSession = () => ({
    type: 'LOCAL_GET',
    key: 'session',
    request: 'GET_SESSION_REQUEST',
    success: 'GET_SESSION_SUCCESS',
    failure: 'GET_SESSION_FAILURE'
})

export const setSession = (session) => ({
  type: 'LOCAL_SET',
  key: 'session',
  value: session,
  request: 'SET_SESSION_REQUEST',
  success: 'SET_SESSION_SUCCESS',
  failure: 'SET_SESSION_FAILURE'
})

export const removeSession = () => ({
  type: 'LOCAL_REMOVE',
  key: 'session',
  request: 'REMOVE_SESSION_REQUEST',
  success: 'REMOVE_SESSION_SUCCESS',
  failure: 'REMOVE_SESSION_FAILURE'
})

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
