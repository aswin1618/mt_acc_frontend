import React from "react";
import last from "../../assets/last.png";
const logoUrl = import.meta.env.VITE_LOGO_URL;
const aboutImg = import.meta.env.VITE_ABT_IMG;

const Last = () => {
  return (
    <div className="bg-[#FFF9FE] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Horizontal Lists */}
        <div className="w-full md:w-1/2">
          <img src={logoUrl} alt="Logo" className="h-5 w-auto mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between gap-6 text-gray-700 text-left">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Blog</li>
                <li>Our Process</li>
                <li>Technology</li>
                <li>Industries</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <ul>
                <li>Translation services</li>
                <li>Software Localization and Testing</li>
                <li>Desktop Publishing services</li>
                <li>Training & E-Learning Services</li>
                <li>Website Localization services</li>
                <li>Multimedia services</li>
                <li>Multicultural Marketing services</li>
                <li>Call center support services</li>
                <li>Interpretation services</li>
                <li>Legal services</li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Industries</h3>
              <ul>
                <li>E Commerce Retail</li>
                <li>Life Sciences</li>
                <li>Legal</li>
                <li>Multimedia Entertainment</li>
                <li>Banking Finance</li>
                <li>Advertising, Marketing & PR</li>
                <li>Government</li>
                <li>Hardware, Software & Technology</li>
                <li>Energy & Mining</li>
                <li>Travel & Hospitality</li>
                <li>Industrial & Manufacturing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - PNG Image */}
        <div className="w-full md:w-1/2 flex justify-end pt-20">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-4">
        
        {/* Left Side - PNG Image (Hard Left) */}
        <div className="w-full md:w-1/2 flex justify-start">
          <img
            src={last}
            alt="About Us"
            className="w-full max-w-[180px] object-cover"
          />
        </div>

        {/* Right Side - Text Content (Hard Right) */}
        <div className="w-full md:w-1/2 flex justify-end text-right">
          <div className="max-w-lg">
            <p className="text-gray-600 mt-4">
            Copyright <span className="text-green-600"> Transfective</span> All rights Reserved
            </p>
          </div>
        </div>
        
      </div>
    </div>

    
  );
};

export default Last;
