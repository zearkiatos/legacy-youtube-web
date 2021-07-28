import React from 'react';
import VideoListItem from '../VideoListItem';
const VideoList = (props) => {
    const renderVideoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                video={video} 
            />
        );
    });
    return (
        <ul className="col-md-12 list-group">
            {renderVideoItems}
        </ul>
    );
};

export default VideoList;