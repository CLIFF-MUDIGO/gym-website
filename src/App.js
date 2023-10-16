import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';

const App = () => {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Feature />
       <Offer />
       <About />

    </div>
  );
}

export default App