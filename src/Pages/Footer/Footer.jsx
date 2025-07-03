import React from 'react';
import FastestDelivarylogo from '../../Shared/WebsiteLogo/FastestDelivarylogo';
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black  text-primary-content p-10">
      <aside>
        <FastestDelivarylogo></FastestDelivarylogo>
        <p className="font-bold">
          Fastest Product Delivary Ltd.
          <br />
          Providing reliable tech since 2025
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaSquareTwitter className='text-2xl text-blue-400'></FaSquareTwitter>
          </a>
          <a>
            <IoLogoYoutube className='text-2xl text-red-600'></IoLogoYoutube>

          </a>
          <a>
            <FaFacebook className='text-2xl text-blue-600'></FaFacebook>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;