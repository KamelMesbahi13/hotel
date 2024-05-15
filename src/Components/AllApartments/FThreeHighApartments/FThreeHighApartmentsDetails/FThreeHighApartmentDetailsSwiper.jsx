import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ImagesData from "../ImagesData";
import PropTypes from "prop-types";

const MyGallery = ({ id }) => {
  const imageSet = ImagesData.find((set) => set.id === id);

  const images = imageSet
    ? imageSet.images.map((img) => ({
        original: img,
        thumbnail: img,
      }))
    : [];

  return (
    <div className="rounded-images">
      <ImageGallery showPlayButton={false} items={images} />
    </div>
  );
};

MyGallery.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MyGallery;
