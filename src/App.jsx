import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';
import Aside from './Pages/Aside';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
