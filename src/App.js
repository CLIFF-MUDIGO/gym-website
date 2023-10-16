import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';

const App = () => {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Feature />
       <Offer />
    </div>
  );
}

export default App