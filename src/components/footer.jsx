import React from 'react'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className='footer'>
     <h3 className='follow'>Follow me on this pages... </h3>
     <a href="https://www.youtube.com/channel/UCSOERVjocku5q1LuLuE2bxw">
     <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>

      <a href="https://www.linkedin.com/in/ken-sarowiwa-7504a5178/"
        className="youtube social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a href="https://www.facebook.com/KenSarowiwa/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/kennaroot" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/kenafria4"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

    </footer>
  )
}

      