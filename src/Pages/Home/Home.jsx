import React, { useEffect } from 'react';
import Banner_Cerosel from './Banner_Cerosel';
import OurServices from './OurServices';
import ClientLogoMarquee from './Client Logo/ClientLogoMarquee';
// import FastestDelivarylogo from '../../../Shared/WebsiteLogo/FastestDelivarylogo';
import Delivary_services from './Delivary_services'
import BeMerchant from './Be Marchent/BeMerchant';
import CustomerReview from './Customer Review/CustomerReview';
import FaQ from './FaQ/FaQ';


const Home = () => {

    // use dynamic website name 
    useEffect(()=>{
        // window.scrollTo(0, 0);
        document.title = "Home";
    },[])
    return (
        <div>
            {/* <h1>My Home Page</h1> */}
            <div className='md:w-10/13 mx-auto my-5'>
                <Banner_Cerosel ></Banner_Cerosel>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
            <div>
               <ClientLogoMarquee></ClientLogoMarquee>
            </div>
            <div>
                <Delivary_services></Delivary_services>
            </div>
            <div className='md:w-10/12 mx-auto my-5'>
                <BeMerchant></BeMerchant>
            </div>
            <div>
                <CustomerReview></CustomerReview>
            </div>
            <div>
                <FaQ></FaQ>
            </div>
            {/* <AllFaQ></AllFaQ> */}
        </div>
    );
};

export default Home;