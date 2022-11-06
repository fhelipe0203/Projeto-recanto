import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu,Almoço, Carte } from './container';
import { Navbar } from './components';
import './App.css';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Almoço/>
    <Carte/>
    <Footer />
  </div>
);

export default App;
