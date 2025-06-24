import React from "react";

const services = [
  {
    img: 'https://static.vecteezy.com/system/resources/previews/047/750/060/non_2x/express-delivery-icon-in-flat-style-fast-shipping-illustration-on-isolated-background-commercial-service-sign-business-concept-vector.jpg',
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    img: 'https://cdn4.iconfinder.com/data/icons/logistics-40/48/66-512.png',
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0LcHsU3-zkPmBIN1Z69gRALxWnkyxs93YQ&s',
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJa9JqS06LZD-z0umfOihALnyGR5YzETL62Q&s',
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHbdP0B0OSJrm_fH_hqknOnfVDemlbRFl6w&s',
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/025/666/601/non_2x/parcel-return-fill-outline-icon-design-illustration-shipping-and-delivery-symbol-on-white-background-eps-10-file-vector.jpg',
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#003333] text-white py-12 px-4 rounded-3xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-base mb-10 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6  shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-lime-300 hover:text-black `}
            >
              <div className="mb-4">
                <img
                  src={service.img}
                  alt="Service Icon"
                  className="w-10 h-10 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

