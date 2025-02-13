const imgUrl = import.meta.env.VITE_CNT_CARD_IMG3;
const imgUrl2 = import.meta.env.VITE_CNT_CARD_IMG4;
const imgUrl3 = import.meta.env.VITE_CNT_CARD_IMG5;
const Second = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row items-center gap-6 w-full mt-16">
        {/* Image Section - 1/4 width on medium+ screens */}
        <div className="w-full md:w-1/4">
          <img 
            src={imgUrl} 
            alt="Section Image" 
            className="w-full h-60 object-cover"
          />

        </div>
      
        {/* Text Section - 3/4 width on medium+ screens */}
        <div className="w-full md:w-3/4 text-left">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">Globalization</h2>
          <p className="text-lg text-gray-600">
          Our approach begins with globalization—the foundational process of preparing software for localization into any language, locale, and culture. Strategic adjustments and continuous planning throughout the software development cycle are pivotal. Implementing best practices in globalization not only accelerates market readiness but also significantly curtails costs, mitigates risks, and alleviates the burden on internal teams.
          </p>
        </div>  
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Image Section - 1/4 width on medium+ screens */}
        <div className="w-full md:w-1/4">
          <img 
            src={imgUrl2} 
            alt="Section Image" 
            className="w-full h-60 object-cover"
          />

        </div>
      
        {/* Text Section - 3/4 width on medium+ screens */}
        <div className="w-full md:w-3/4 text-left">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">Localization</h2>
          <p className="text-lg text-gray-600">
          Simply translating text is not enough. Our localization strategy is crafted for specific locales and languages, employing specialized industry resources and advanced technology. We support diverse resource file formats and seamlessly integrate with version control systems and code repositories to enable efficient, automated file handling. Additionally, our visual localization tools offer translators and reviewers critical context via live screens or screenshots, ensuring greater accuracy and relevance.
           </p>
        </div>  
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        {/* Image Section - 1/4 width on medium+ screens */}
        <div className="w-full md:w-1/4">
          <img 
            src={imgUrl3} 
            alt="Section Image" 
            className="w-full h-60 object-cover"
          />

        </div>
      
        {/* Text Section - 3/4 width on medium+ screens */}
        <div className="w-full md:w-3/4 text-left">
          <h2 className="text-3xl font-bold mb-4  text-gray-900">Globalization</h2>
          <p className="text-lg text-gray-600">
          The final step in our methodology is comprehensive testing. No software localization project is deemed complete without ensuring that the software and mobile apps perform flawlessly across different languages, operating systems, browsers, channels, and devices. Our testing protocols are designed to prevent costly delays and avoid potential flaws. We offer an array of testing services, including functional, linguistic, layout/UI design, user experience (UX), user acceptance testing (UAT), internationalization (i18n), accessibility (A11Y), and automated testing.
          </p>
        </div>  
      </div>

      </>

      
    );
  };
  
  export default Second;
  