import PropTypes from 'prop-types';
import {
  ImageGalleryListItem,
  ImageGalleryListItemImage,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  imgForModal,
  data: { webformatURL, largeImageURL, tags },
}) {
  return (
    <ImageGalleryListItem
      key={webformatURL}
      onClick={() => imgForModal(largeImageURL)}
    >
      <ImageGalleryListItemImage src={webformatURL} alt={tags} />
    </ImageGalleryListItem>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  imgForModal: PropTypes.func.isRequired,
};
