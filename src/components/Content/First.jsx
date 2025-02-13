const Imgurl= import.meta.env.VITE_CNT_CARD_IMG
const First = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full px-6 py-10" >
  
            <div className="w-full md:w-1/2 h-84  bg-gray-100 rounded-xl shadow-md flex items-center justify-center" 
                                        style={{ 
                                            backgroundImage: `url(${Imgurl})`, 
                                            backgroundSize: "cover",  // Ensures the image covers the card
                                            backgroundPosition: "center", // Centers the image
                                            backgroundRepeat: "no-repeat" // Prevents repeating
                                        }}>
                                </div>
      
        {/* Right Side - Text Content */}
        <div className="w-full md:w-1/2 text-left pl-4 mt-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Software Localization</h2>
          <p className="text-gray-600 pr-8">
          In an era where digital boundaries are continually expanding, the demand for software localization services has surged. The ubiquity of the internet enables companies to engage with a global audience, necessitating adaptations of products and services to cater to diverse regional and linguistic preferences. Effective software localization transcends mere translation; it involves a comprehensive adaptation of user interfaces, documentation, manuals, audiovisual content, and software code across multiple languages. To maintain the integrity and context of translated content, our localization experts employ advanced technological tools, ensuring consistency and accuracy.
          </p>
        </div>
      
      </div>
      
    );
  };
  
  export default First;