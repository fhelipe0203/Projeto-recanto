import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const Almoço = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Horarios" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '1rem' }}>Almoço</h1>
      <div className="app__wrapper-content">
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Hora de abertura</p>
        <p className="p__opensans">SEG - TER: 11:00 am - 16:00 pm</p>
        <p className="p__opensans">QUAR - SEX: 11:00 am - 16:00 pm</p>
        <p className="p__opensans" style={{ color: '#DCCA87', margin: '2rem 0' }}>Hora de abertura do Self-service liberado</p>
        <p className="p__opensans">SÁBADO: 11:00 am - 17:00 pm</p>
        <p className="p__opensans">DOMINGO: 11:00 am - 17:00 pm</p>
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus1} alt="finus_img" />
    </div>
  </div>
);

export default Almoço;