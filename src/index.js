import React, { Component } from "react";
import { debounce } from "lodash";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import config from "./config";
import VideoList from "./components/VideoList";
import YoutubeSearch from "youtube-api-search";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: [],
    };

    this.videoSearch("SOLID Principles");
  }

  videoSearch(term) {
    YoutubeSearch({ key: config.YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    const videoSearch = debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchBar onSearchTermChange={videoSearch} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <VideoList
                onVideoSelect={(selectedVideo) =>
                  this.setState({ selectedVideo })
                }
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
