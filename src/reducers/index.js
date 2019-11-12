const getSelectedVideo = (state, action) => {
    const vid = state.videos.find((item) => {
        console.log(item.id.videoId);
        return item.id.videoId === action.payload
    })
    return vid;
}

const reducer = (state, action) => {
    console.log('action.type ===> ', action.type);
    console.log('action.payload ===> ', action.payload);
    if(state === undefined){
        return {
            title: null,
            videos: [],
            selectedVideo: null,
            listUserPlaylists: []
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
        default:
            return state;
    }
}

export default reducer;
