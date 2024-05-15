import ReactPlayer from "react-player";
import PropTypes from "prop-types";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="mt-12 md:mt-24">
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </div>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
