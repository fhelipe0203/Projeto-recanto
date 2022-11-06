import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="COCKTELARIA REGIONAL E AUTORAL" />
      <h1 className="headtext__cormorant">SIMPLICIDADE E ESTILO </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Valorizar a riqueza dos destilados locais e a  produção artesanal dos nosso preparos.</p>
        </div>
        <p className="p__opensans"> Busquei agregar ao recanto da lagoa uma cultura de produção de destilados artesanais mineiros que vão além da cachaça. E indo além, fabricamos artesanalmente nossas espumas, sodas, licores e cordiais. Criando um coquetelaria única e independente até mesmo nos drinks mais clássicos.   </p>
      </div>

      <div className="app__chef-sign">
        <a href='https://www.instagram.com/davigarciachef/'><p>Davi Garcia</p></a>
        <p className="p__opensans">Mixologista & Header Bartender</p>
        <img src={images.sign} alt="sign_image" />  
      </div>
    </div>
  </div>
);

export default Chef;