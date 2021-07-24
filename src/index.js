import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import config from './config';
import YoutubeSearch from 'youtube-api-search';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YoutubeSearch({ key: config.YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));