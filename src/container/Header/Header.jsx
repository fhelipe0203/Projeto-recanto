import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import {images} from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Onde o inesquecível se encontra"/>
      <h1 className='app__header-h1'>Recanto da Lagoa, o melhor lugar para você e sua familia.</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>O cardápio self-service do Recanto da Lagoa (oferecido durante o dia nas sextas-feiras, sábados e domingos) reúne churrasco, culinária mineira, saladas e sobremesas. .</p>
      <a href='https://circuitodosrestaurantes.com.br/cardapiodigital/recanto'>
      <button type='button' className='custom__button '>Explore o Cadarpio</button>
      </a>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img"/>

    </div>
  </div>
);

export default Header;
