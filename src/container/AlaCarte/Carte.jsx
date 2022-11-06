import React from 'react';

import { images } from '../../constants';

const Carte = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
    
      <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Á la Carte</h1>
      <div className="app__wrapper-content">
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Hora de abertura</p>
        <p className="p__opensans">QUAR - SEX: 18:00 pm - 00:00 am</p>
        <p className="p__opensans">SÁBADO: 17:00 am - 00:00 pm</p>
        
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus2} alt="finus_img" />
    </div>
  </div>
);

export default Carte;