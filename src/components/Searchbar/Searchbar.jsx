import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => (
  <SearchbarHeader>
    <SearchForm>
      <SearchFormButton type="submit" onClick={() => onSubmit()}>
        <SearchLabel>Search</SearchLabel>
      </SearchFormButton>

      <SearchInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </SearchForm>
  </SearchbarHeader>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
