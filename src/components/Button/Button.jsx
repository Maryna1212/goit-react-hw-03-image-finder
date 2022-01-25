// import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';

const Button = () => (
  <div class="container">
    <ButtonLoad type="button" data-action="load-more">
      <span
        class="lds-dual-ring spinner is-hidden"
        role="status"
        aria-hidden="true"
      ></span>

      <span>Load more</span>
    </ButtonLoad>
  </div>
);

export default Button;
