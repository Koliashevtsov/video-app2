const getSelectedVideo = (state, action) => {
    const vid = state.videos.find((item) => {
        console.log(item.id.videoId);
        return item.id.videoId === action.payload
    })
    return vid;
}

const createNewPlaylist = (state, action) => {
    const newPlaylist = {
        id: state.listUserPlaylists.length,
        playlistName: action.payload,
        listTracks: [state.selectedVideo]
    }
    return [...state.listUserPlaylists, newPlaylist]
}

const editPlaylistName = (state, action) => {
    const list = state.listUserPlaylists;
    const id = action.payload[0];
    const newName = action.payload[1];
    const idx = list.findIndex(item => item.id === id);
    const playlist = list[idx];
    const editedPlaylist = {
        ...playlist,
        playlistName: newName
    }
    return [
        ...list.slice(0, idx),
        editedPlaylist,
        ...list.slice(idx + 1)
    ];
}

const deletePlaylist = (state, action) => {
    const list = state.listUserPlaylists;

    const playlistIdx = list.findIndex(item => {
        return item.id == action.payload
    })

    const newList = [
        ...list.slice(0, playlistIdx),
        ...list.slice(playlistIdx + 1)
    ]
    return newList;
}

const addVideoToPlaylist = (state, action) => {
    const list = state.listUserPlaylists;
    const currentVideo = state.selectedVideo;
    const currentPlaylist = action.payload;
    const playlistId = currentPlaylist.id
    const playlistIdx = list.findIndex(item => {
        return item.id === playlistId;
    })
    const newListTracks = currentPlaylist.listTracks.push(currentVideo)
    const newPlaylist = {
        ...currentPlaylist,
        newListTracks
    }
    return [
        ...list.slice(0, playlistIdx),
        newPlaylist,
        ...list.slice(playlistIdx + 1)
    ];
}
const deleteVideoFromPlaylist = (state, action) => {
    const list = state.listUserPlaylists;
    const playlistIdx = action.payload[0];
    const currentPlaylist = list[playlistIdx];
    const currentListTracks = currentPlaylist.listTracks

    const videoId = action.payload[1];
    const videoIdx = currentListTracks.findIndex(item => item.id.videoId === videoId);

    const newListTracks = [
        ...currentListTracks.slice(0, videoIdx),
        ...currentListTracks.slice(videoIdx + 1)
    ]

    const newPlaylist = {
        ...currentPlaylist,
        listTracks: newListTracks
    }

    const newList = [
        ...list.slice(0, playlistIdx),
        newPlaylist,
        ...list.slice(playlistIdx + 1)
    ]

    return newList

}

const reducer = (state, action) => {
    console.log('action.type ===> ', action.type);
    console.log('action.payload ===> ', action.payload);
    if(state === undefined){
        return {
            title: '',
            videos: [],
            selectedVideo: null,
            listUserPlaylists: [
                {
                    id: 0,
                    playlistName: 'Something',
                    listTracks: []
                }
            ]
        };
    }

    switch (action.type) {
        case 'GET_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'FETCH_VIDEOS_SUCCESS':
            return {
                ...state,
                videos: action.payload
            }
        case 'VIDEO_SELECTED':
            return {
                ...state,
                selectedVideo: getSelectedVideo(state, action)
            };
        case 'PLAYLIST_CREATED':
        // I am going to save my new playlist in array listUserPlaylists
        // but not as single object
            return {
                ...state,
                listUserPlaylists: createNewPlaylist(state, action)
            };
        case 'PLAYLIST_EDITED':
            return {
                ...state,
                listUserPlaylists: editPlaylistName(state, action)
            };
        case 'PLAYLIST_DELETED':
            return {
                ...state,
                listUserPlaylists: deletePlaylist(state, action)
            };
        case 'VIDEO_ADDED_TO_PLAYLIST':
            return {
                ...state,
                listUserPlaylists: addVideoToPlaylist(state, action)
            };
        case 'TRACK_DELETED_SUCCESSFULLY':
            return {
                ...state,
                listUserPlaylists: deleteVideoFromPlaylist(state, action)
            };
        default:
            return state;
    }
}

export default reducer;
