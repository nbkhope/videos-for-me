import React from 'react';

const VideoDetail = ({video}) => {
  // check if video is not (yet) set
  if (!video) {
    return <div>Loading . . .</div>;
  }

  const videoId = video.id.videoId;
  // use backticks to do string interpolation
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>
          {video.snippet.title}
        </div>
        <div>
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
