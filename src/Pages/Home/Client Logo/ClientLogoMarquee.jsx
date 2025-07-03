import React from "react";
import Marquee from 'react-fast-marquee';

import amazon from '../../../../../public/brands/amazon.png';
import google from '../../../../../public/brands/amazon_vector.png';
import casio from '../../../../../public/brands/casio.png';
import moonstar from '../../../../../public/brands/moonstar.png';
import start from '../../../../../public/brands/start.png';
import randstad from '../../../../../public/brands/start-people 1.png';
import people from '../../../../../public/brands/randstad.png';

const logos = [amazon, google, casio, moonstar, start, randstad, people];

const ClientLogoMarquee = () => {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl  font-bold text-center mb-12">Trusted by Leading Brands</h2>

        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img src={logo} alt={`Client Logo ${idx + 1}`} className="h-6 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogoMarquee;


