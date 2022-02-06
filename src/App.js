import React, { Component } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ApiService from './components/apiService';

const newApiService = new ApiService();

class App extends Component {
  state = {
    imageName: '',
    loading: false,
    showModal: false,
    images: null,
    status: 'idle',
    error: null,
    imgModal: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      newApiService.query = nextName;
      newApiService.resetPage();
      newApiService
        .fetchImages()
        .then(({ hits }) => {
          this.setState({ images: hits });

          if (hits.length === 0) {
            this.setState({ images: null });
            Promise.reject(
              new Error(`Cannot find the image on your request ${nextName}`),
            );
          }
          return;
        })
        // .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal, largeImageURL }) => ({
      showModal: !showModal,
      imgModal: largeImageURL,
    }));
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { images, showModal, status, imgModal } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && <Loader />}
        {images && (
          <ImageGallery
            onClick={this.toggleModal}
            images={images}
          ></ImageGallery>
        )}
        <Button />
        <button type="button" onClick={this.toggleModal}>
          Открыть модалку
        </button>
        <ToastContainer position="top-center" autoClose={3000} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={imgModal} alt="" />
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
          </Modal>
        )}
        ;
      </div>
    );
  }
}

export default App;

// ====================================
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
