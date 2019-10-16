import YTSearch from 'youtube-api-search';

class VideolistService {

    API_KEY = 'AIzaSyDN7A1uGYuSg3yq_pcIpcKkGeoAcEPReOk';

    getVideos = (title) => {
        return new Promise((resolve) => {
            YTSearch({key: this.API_KEY, term: title}, (data) => {
                console.log(data);
                resolve(data)
            })
        });
    }
}

export default VideolistService;
