import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import Reviews from './Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
