import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 justify-between items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">
              <p>Hola, soy un</p>
              <Typewriter
                options={{
                  strings: ['desarrollador web', 'diseñador gráfico'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
              />
            </h1>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="">
            <img
              src="/public/cara.jpeg"
              alt="Hero image"
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus arcu in
              mauris pulvinar, ut maximus lacus pretium. Nunc eu justo ut quam lacinia bibendum at
              sit amet lectus. Etiam vel sapien ut neque rhoncus pellentesque. Sed eget nibh id
              quam interdum facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
