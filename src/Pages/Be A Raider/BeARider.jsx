import React from 'react';
import { motion } from 'framer-motion';
import riderImg from '../../assets/riderimage.jpg'; // Replace with your image path
import { Link } from 'react-router';
// import { Button } from "@/components/ui/button"; // or use a regular <button>

const BeARider = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
            {/* Hero Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Join as a <span className="text-blue-600">Rider</span>
                    </h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        Deliver parcels with flexibility, earn good money, and be part of a growing community. 
                        We’re looking for enthusiastic and responsible riders.
                    </p>
                    <Link to='/riderForm'><button className="px-6 py-3  text-white bg-[#CAEB66] hover:text-[#CAEB66] hover:bg-white text-lg rounded-xl shadow">
                        Fill Rider Form
                    </button></Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <img src={riderImg} alt="Rider" className="w-[350px] md:w-[450px] animate-pulse" />
                </motion.div>
            </div>

            {/* Info Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Flexible Timing",
                        desc: "Work when you want. Choose your delivery slots as per your schedule.",
                        icon: "⏰"
                    },
                    {
                        title: "Weekly Payments",
                        desc: "Get paid every week directly to your bank account.",
                        icon: "💰"
                    },
                    {
                        title: "City-Wide Deliveries",
                        desc: "Help deliver in your local area or explore the city.",
                        icon: "🚴‍♂️"
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BeARider;
