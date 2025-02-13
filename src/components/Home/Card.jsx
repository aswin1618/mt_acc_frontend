const ImgUrl = import.meta.env.VITE_HOME_IMG;

const Card = () => {
    return (
        <section className="flex justify-center items-center min-h-screen px-4">
             <div className="relative w-full max-w-7xl h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ImgUrl})` }} // Replace with your image URL
          ></div>
  
          {/* Smooth White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
  
          {/* Content */}
          <div className="absolute inset-0 flex items-center px-16">
            <div className="w-1/2 text-gray-800 text-left">
              <h2 className="text-4xl font-bold">Software Localization & Testing</h2>
              <h3 className="text-2xl font-bold">Ensuring Excellence in Software Localization</h3>
              <p className="text-gray-700 mt-2">
              At Transfective, we recognize the critical importance of software localization in today’s global market. As organizations strive to tailor their software for various linguistic and cultural landscapes, a meticulous approach is required to ensure platforms are both linguistically accurate and culturally resonant. Our process encompasses every stage of localization—from identifying and extracting localizable elements to re-engineering and rigorously testing multiple language versions. We are committed to integrating quality at every phase, utilizing industry best practices and cutting-edge technology to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card;
  