import ReactDOM from "react-dom";
// import the library


import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(
  faPhone,faEnvelope,faLocationDot,faFacebook,faInstagram, faLinkedin
  // more icons go here
);