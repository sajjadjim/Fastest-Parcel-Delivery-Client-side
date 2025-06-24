import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ image, title, description }) => (
  <div className="flex items-center md:gap-6 md:py-20 md:px-20 bg-gray-100 rounded-xl shadow-sm mb-6">
    <div className="md:w-24 md:h-24">
      <img src={image} alt={title} className="object-contain w-full h-full" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <motion.div className="w-10/14 mx-auto py-10 px-4"
          initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <ServiceCard
        image="https://static.vecteezy.com/system/resources/previews/010/575/080/non_2x/parcel-tracking-icon-logo-illustration-track-order-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg"
        title="Live Parcel Tracking"
        description="Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind."
      />
      <ServiceCard
        image="https://png.pngtree.com/png-vector/20210621/ourmid/pngtree-safe-delivery-man-riding-blue-scooter-with-backpack-vector-illustration-png-image_3503883.jpg"
        title="100% Safe Delivery"
        description="We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
      />
      <ServiceCard
        image="https://img.freepik.com/free-vector/set-different-avatar-people_24877-61547.jpg?semt=ais_hybrid&w=740"
        title="24/7 Call Center Support"
        description="Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
      />
    </motion.div>
  );
};

export default FeaturesSection;
