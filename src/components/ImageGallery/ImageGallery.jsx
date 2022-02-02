import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryList>
      {images.map(({ tags, webformatURL, largeImageURL }, index) => (
        <ImageGalleryItem
          key={index}
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL, tags)}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
