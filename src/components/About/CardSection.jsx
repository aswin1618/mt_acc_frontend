import React from "react";
import NewCard from "./NewCard";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";


const cardsData = [
  { imgSrc: img1, heading: "Decades of Expertise", details: "Leverage our vast array of specialized resources and over 14 years of experience in managing intricate training programs." },
  { imgSrc: img2, heading: "Comprehensive Discovery", details: "Our dedicated specialists are committed to thoroughly understanding your business objectives, pinpointing precise opportunities to enhance content delivery." },
  { imgSrc: img3, heading: "Streamlined Solutions", details: "Eliminate the complexities of your localization efforts with our comprehensive, integrated service offerings and hybrid production models." },
];

const cardsDataSecondRow = [
  { imgSrc:img4, heading: "Unmatched Quality", details: "Avoid the pitfalls of cross-functional miscommunications and enhance overall consistency with our unified approach to content management." },
  { imgSrc:img5, heading: "Reliable Timeliness", details: "Depend on our proven track record of 99% on-time delivery to ensure your training materials are prepared exactly when you need them." },
];

const CardSection = () => {
  return (
    <div className="bg-[#FFF9FE] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-600 py-16" >Why Choose Transfective?</h2>
        {/* First row with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <NewCard key={index} imgSrc={card.imgSrc} heading={card.heading} details={card.details} />
          ))}
        </div>

        {/* Second row with 2 cards centered */}
        <div className="flex justify-center mt-8 gap-6">
          {cardsDataSecondRow.map((card, index) => (
            <NewCard key={index} imgSrc={card.imgSrc} heading={card.heading} details={card.details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
