import React, { Component } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import ApiService from './components/apiService';

const newApiService = new ApiService();

class App extends Component {
  state = {
    loading: false,
    showModal: false,
    images: [],
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = () => {};

  render() {
    const { images, showModal, loading } = this.state;

    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
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
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src="" alt="" />
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
