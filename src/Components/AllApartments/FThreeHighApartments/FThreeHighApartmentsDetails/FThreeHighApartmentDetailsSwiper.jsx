import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import RoomOne from "../../../../assets/fThreeHighStandingOne.jpg";
import RoomTwo from "../../../../assets/fThreeHighStandingTwo.jpg";
import RoomThree from "../../../../assets/fThreeHighStandingThree.jpg";
import RoomFour from "../../../../assets/fThreeHighStandingFour.jpg";
import RoomFive from "../../../../assets/fThreeHighStandingFive.jpg";
import RoomSix from "../../../../assets/fThreeHighStandingSix.jpg";

const images = [
  {
    original: RoomOne,
    thumbnail: RoomOne,
  },
  {
    original: RoomTwo,
    thumbnail: RoomTwo,
  },
  {
    original: RoomThree,
    thumbnail: RoomThree,
  },
  {
    original: RoomFour,
    thumbnail: RoomFour,
  },
  {
    original: RoomFive,
    thumbnail: RoomFive,
  },
  {
    original: RoomSix,
    thumbnail: RoomSix,
  },
];

const MyGallery = () => {
  return (
    <div className="rounded-images">
      <ImageGallery showPlayButton={false} items={images} />
    </div>
  );
};

export default MyGallery;
