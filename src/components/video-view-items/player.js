import React, { Fragment } from 'react';

const Player = (props) => {
    const { selectedVideo } = props;
    let videoId = '';
    if(selectedVideo){
        videoId = selectedVideo.id.videoId;
    }

    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <Fragment>
            <div className="card-iframe">
                <iframe src={url}></iframe>
            </div>
        </Fragment>

    );
}
export default Player;
