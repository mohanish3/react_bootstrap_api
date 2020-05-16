import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contactus />
      <Users />
      <Footer />
      </div>
  );
}

export default App;
