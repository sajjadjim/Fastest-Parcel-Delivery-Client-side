import React from 'react';

const services = [
  {
    imgSrc: "/images/ecom_delivry.svg",
    alt: "Ecommerce Delivery",
    label: "Ecommerce Delivery",
  },
  {
    imgSrc: "/images/pick-and-drop.png",
    alt: "Pick and Drop",
    label: "Pick and Drop",
  },
  {
    imgSrc: "/images/packaging.png",
    alt: "Packaging",
    label: "Packaging",
  },
  {
    imgSrc: "./images/weareHouse.png",
    alt: "Warehousing",
    label: "Warehousing",
  },
];

const ServiceGrid = () => {
  return (
    <div style={styles.container}>
      {services.map(({ imgSrc, alt, label }, idx) => (
        <div key={idx} style={styles.item}>
          <img src={imgSrc} alt={alt} style={styles.image} />
          <p style={styles.label}>{label}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
    padding: "1rem",
  },
  item: {
    flex: "1 1 150px",
    maxWidth: "180px",
    textAlign: "center",
    border: "1px dashed #ddd",
    padding: "1rem",
    borderRadius: "8px",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  label: {
    marginTop: "0.5rem",
    fontWeight: "600",
    fontSize: "1rem",
  },
};

export default ServiceGrid;
