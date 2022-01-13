import React from "react";

const BrandList = [
  {
    image: "./images/brand/brand-1.png",
  },
  {
    image: "./images/brand/brand-002.png",
  },
  {
    image: "./images/brand/brand-003.png",
  },
  {
    image: "./images/brand/brand-004.png",
  },
  {
    image: "./images/brand/brand-005.png",
  },
  {
    image: "./images/brand/brand-006.png",
  },
  {
    image: "./images/brand/brand-007.png",
  },
  {
    image: "./images/brand/brand-008.png",
  },
  {
    image: "./images/brand/brand-100.png",
  },
];

const BrandThree = ({ brandStyle }) => {
  return (
    <ul className={`brand-list ${brandStyle}`}>
      {BrandList.map((data, index) => (
        <li key={index}>
          <a href="#">
            <img
              style={{ width: "70px" }}
              src={`${data.image}`}
              alt="Brand Image"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default BrandThree;
