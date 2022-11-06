import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre nós</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Imagine um lugar com exuberante paisagismo, aquário e capelinha. Em frente à Lagoa e pertinho do Iate Clube. Enquanto você degusta churrasco e o melhor da culinária mineira, pode apreciar as belezas naturais de Lagoa Santa.</p>
       
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Historia</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Esse é o Recanto da Lagoa, estabelecimento diferente de tudo o que a cidade já viu. O restaurante reúne entretenimento de qualidade, aconchego e o melhor da churrascaria e da culinária mineira.</p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;