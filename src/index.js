import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import config from './config';
import YoutubeSearch from 'youtube-api-search';

YoutubeSearch({key: config.YOUTUBE_API_KEY,  term: 'surfboards'}, function(data) {
    console.log(data);
});
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));