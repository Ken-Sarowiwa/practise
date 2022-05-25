import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function footer() {
  return (
    <div>
      ReactDOM.render(<SocialIcon url="https://twitter.com/kenaroot" />, document.footer);
      ReactDOM.render(<SocialIcon url="https://www.linkedin.com/in/ken-sarowiwa-7504a5178/" />, document.footer);
      ReactDOM.render(<SocialIcon url="https://github.com/Ken-Sarowiwa"/>, document.footer);
      ReactDOM.render(<SocialIcon url="https://www.instagram.com/kenafrica4" />, document.footer);

    </div>
  )
}

