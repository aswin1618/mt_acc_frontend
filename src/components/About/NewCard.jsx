import React from "react";

const NewCard = ({ imgSrc, heading, details }) => {
  return (
    <div className="bg-white shadow-lg shadow-[#F2D2F0] rounded-xl p-6 w-80">
      {/* Image Section */}
      <img
        src={imgSrc}
        alt={heading}
        className="w-full h-40 object-cover"
      />

      {/* Text Section */}
      <div className="p-2 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
        <p className="text-gray-600 mt-2">{details}</p>
      </div>
    </div>
  );
};

export default NewCard;
