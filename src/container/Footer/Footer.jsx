import React from 'react';
import { FiFacebook,  FiInstagram, FiSmartphone} from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contatos</h1>
        <p className="p__opensans">Recanto </p>
        <a href='https://api.whatsapp.com/send?phone=553131331838'><p className="p__opensans">+55 31-31331838</p></a>
        
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;Onde o inesquecivel acontece.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/recantodalagoarestaurante/'><FiFacebook /></a>
           <a href='https://api.whatsapp.com/send?phone=553131331838'><FiSmartphone/></a>
          <a href='https://www.instagram.com/recantodalagoarestaurante/'><FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Recanto. Todos os direitos reservado.</p>
    </div>

  </div>
);

export default Footer;