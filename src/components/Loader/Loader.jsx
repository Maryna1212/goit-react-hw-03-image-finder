import { BallTriangle } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <BallTriangle color={'inherit'} height={60} width={60} />
    </LoaderContainer>
  );
};

export default Loader;
