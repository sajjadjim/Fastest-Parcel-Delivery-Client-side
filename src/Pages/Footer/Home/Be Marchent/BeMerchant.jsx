import React from 'react';
import location from '../../../../../public/location-merchant.png'

const BeMerchant = () => {
    return (
        <div data-aos="zoom-in-up" className="bg-[url('public/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl p-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={location}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn bg-[#CAEB66] text-black rounded-full md:py-6">Become A Merchant</button>
                    <button className="btn btn-primary text-[#CAEB66] border-[#CAEB66] btn-outline ms-4 rounded-full hover:bg-white hover:text-black md:py-6">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default BeMerchant;