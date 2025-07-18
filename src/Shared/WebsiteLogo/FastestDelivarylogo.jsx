import React from 'react';
import logo from '../../../public/logo.png'
import { Link } from 'react-router';
const FastestDelivarylogo = () => {
    return (
       <Link to='/'>
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <p className='md:text-2xl md:font-bold text-[15px]'><span className='text-[#CAEB66]'>Pick</span><span className=''>On</span> </p>
        </div>
       </Link>
    );
};

export default FastestDelivarylogo;