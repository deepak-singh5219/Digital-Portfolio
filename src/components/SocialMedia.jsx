import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/deepak-singh5219">
        <BsGithub />
      </a>
      
    </div>
    <div>
      <a href="https://www.linkedin.com/in/deepaksingh5219/">
        <BsLinkedin />
      </a>
      
    </div>
    <div>
      <a href="https://www.instagram.com/deepak_singh_5219/">
        <BsInstagram />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;
