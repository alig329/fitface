import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
