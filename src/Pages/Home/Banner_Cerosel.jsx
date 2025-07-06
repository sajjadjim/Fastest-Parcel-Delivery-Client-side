import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './BannerCarousel.css';

const banners = [
  '/banner/banner1.png',
  '/banner/banner2.png',
  '/banner/banner3.png',
];

const BannerCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {banners.map((src, idx) => (
        <div key={idx} className="carousel-slide">
          <img src={src} alt={`Banner ${idx + 1}`} />
          <div className="overlay">
            <p>Discover our amazing features</p>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
