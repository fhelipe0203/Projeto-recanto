import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribir</h1>
      <p className="p__opensans">Receba primeiro as melhores promoções!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Digite seu email" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;