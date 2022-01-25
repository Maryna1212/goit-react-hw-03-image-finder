// import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

function ImageGallery() {
  return (
    <ImageGalleryList>
      <ImageGalleryItem />
    </ImageGalleryList>
  );
}

// ImageGallery.propTypes = {
//         id: PropTypes.number.isRequired,
// };

export default ImageGallery;
