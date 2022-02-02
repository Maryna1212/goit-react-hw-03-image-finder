import PropTypes from 'prop-types';
import {
  ImageGalleryListItem,
  ImageGalleryListItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <ImageGalleryListItem>
      <ImageGalleryListItemImage src={src} alt={alt} onClick={onClick} />
    </ImageGalleryListItem>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
