import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import image all 
import image1 from '../../../../public/banner/banner1.png'
import image2 from '../../../../public/banner/banner2.png'
import image3 from '../../../../public/banner/banner3.png'

const Banner_Cerosel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
             <div>
                    <img src={image1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={image2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={image3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
        </Carousel>
    );
};
export default Banner_Cerosel;