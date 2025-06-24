import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router';

const testimonials = [
    {
        name: 'Awlad Hossin',
        role: 'Senior Product Designer',
        text: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatar: 'https://img.icons8.com/?size=100&id=37607&format=png&color=000000',
    },
    {
        name: 'Rasel Ahamed',
        role: 'CTO',
        text: 'Improves overall balance and makes a noticeable difference in posture within just a few days of use.',
        avatar: 'https://img.icons8.com/?size=100&id=JRL1ac9heBsn&format=png&color=000000',
    },
    {
        name: 'Nasir Uddin',
        role: 'CEO',
        text: 'Comfortable to wear and helped reduce my back pain. Highly recommended!',
        avatar: 'https://img.icons8.com/?size=100&id=JRL1ac9heBsn&format=png&color=000000',
    },
    {
        name: 'Jannatul Ferdous',
        role: 'UX Researcher',
        text: 'Wearing this daily at work has really helped with my slouching habits.',
        avatar: 'https://img.icons8.com/?size=100&id=tq5Dke0EPLvZ&format=png&color=000000',
    },
    {
        name: 'Tanvir Alam',
        role: 'Product Manager',
        text: 'Helps me stay upright during long hours at the desk. Great product.',
        avatar: 'https://img.icons8.com/?size=100&id=37607&format=png&color=000000',
    },
    {
        name: 'Sadia Afrin',
        role: 'Marketing Lead',
        text: 'Easy to use and truly makes a difference in posture and confidence.',
        avatar: 'https://img.icons8.com/?size=100&id=tq5Dke0EPLvZ&format=png&color=000000',
    },
    {
        name: 'Riyad Mahmud',
        role: 'QA Analyst',
        text: 'A fantastic solution to long-term posture issues.',
        avatar: 'https://img.icons8.com/?size=100&id=JRL1ac9heBsn&format=png&color=000000',
    },
    {
        name: 'Mim Sultana',
        role: 'Developer',
        text: 'Lightweight, effective, and super simple to adjust.',
        avatar: 'https://img.icons8.com/?size=100&id=tq5Dke0EPLvZ&format=png&color=000000',
    },
    {
        name: 'Fahim Rahman',
        role: 'Fitness Coach',
        text: 'Perfect for fitness routines and post-gym recovery.',
        avatar: 'https://img.icons8.com/?size=100&id=JRL1ac9heBsn&format=png&color=000000',
    },
    {
        name: 'Sajjad Hossain Jim',
        role: 'UI Designer',
        text: 'A great aid for posture correction and workplace comfort.',
        avatar: 'https://img.icons8.com/?size=100&id=37607&format=png&color=000000',
    },
];

export default function CustomerReviewSwiper() {
    return (
        <div className="bg-gray-100 py-12 px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2">
                What our customers are saying
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
            </p>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xl p-6 shadow-md text-left min-h-[220px] mx-auto max-w-sm">
                            <p className="text-3xl text-teal-500 mb-2">“</p>
                            <p className="text-sm text-gray-700 mb-4">{item.text}</p>
                            <hr className="border-dotted border-t-2 border-gray-300 mb-4" />
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-teal-900">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
