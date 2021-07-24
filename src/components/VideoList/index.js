import React from 'react';
import VideoListItem from '../VideoListItem';
const VideoList = (props) => {
    const renderVideoItems = props.videos.map((video) => {
        return <VideoListItem video={video} />;
    });
    return (
        <ul className="col-md-4 list-group">
            {renderVideoItems}
        </ul>
    );
};

export default VideoList;