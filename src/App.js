import React, { Component } from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar onClick={this.onSubmit} />
        <ImageGallery />
        <Button />
        <Modal />
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
