import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import config from './config';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));