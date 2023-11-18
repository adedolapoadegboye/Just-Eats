import logo from './logo.jpg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import Signature from './components/Signature';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Signature />
    </div>
  );
}

export default App;
