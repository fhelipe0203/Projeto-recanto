import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Nosso endereço</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Av. Getúlio Vargar 5002 (Orla da Lagoa)</p>
       <a href='https://goo.gl/maps/yfHoXFWDtizEweTRA'> <button type='button' className='custom__button' style={{ marginTop: '2rem' }}>Ubicação</button> </a>
       
        
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus3} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
