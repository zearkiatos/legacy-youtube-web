import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import config from './config';
import VideoList from './components/VideoList';
import YoutubeSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: null,
            videos: []
        };

        YoutubeSearch({ key: config.YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));