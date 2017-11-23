import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

// YouTube Data API v3
const API_KEY = 'AIzaSyA2U3katptmBAJvhGnTOVO5h6suwqKL1kg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('utada first love');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      //console.log(data);
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // takes a function and makes it a function that can only be called
    // every 300 ms
    // (a debounced version of videoSearch)
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <h1 className="text-xs-center text-primary">Videos For Me!</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
