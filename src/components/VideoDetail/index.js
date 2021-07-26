import React from 'react';
import config from '../../config';

const VideoDetail = ({ video }) => {
    if (video) {
        const videoId = video.id.videoId;
        const url = config.YOUTUBE_BASE_URL + videoId;
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
    
            </div>
        );
    }

    return <div>Loading...</div>
}

export default VideoDetail;