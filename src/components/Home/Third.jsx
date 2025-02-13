const cardBgImage = import.meta.env.VITE_HOME_CARD_IMG;
const Third = () => {
    return (
            <section className="w-full py-16 px-4 md:px-16">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left - Table Style List */}
                <div className="w-full">
                  <ul className="w-full">
                    {["Internationalization", "Software Translation", "Software Engineering", "User Acceptance Testing","Functional Testing","Localization Testing","Bug Fixing"].map(
                      (item, index) => (
                        <li
                          key={index}
                          className={`flex justify-between py-3 border-b border-gray-300 
                            ${index === 0 ? "bg-[#F6D1FF] font-bold text-[#A408CB]" : "text-gray-900"}`}
                        >
                          <span className="text-2xl pl-4">{item}</span>
                          <span className="text-2xl pr-2">{">"}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
        
                {/* Right - Small Text & Square Card */}
                    <div className="flex flex-col items-center">
                    {/* Small Text Above Card */}
                    <h3 className="text-gray-900 text-md text-left mb-2 px-2 pb-6 pt-2">Preparing your software for localization, ensuring it can support multiple languages and cultural norms without engineering changes.</h3>

                    {/* Square Card */}
                    <div className="w-112 h-78 bg-gray-100 rounded-xl shadow-md flex items-center justify-center" 
                            style={{ 
                                backgroundImage: `url(${cardBgImage})`, 
                                backgroundSize: "cover",  // Ensures the image covers the card
                                backgroundPosition: "center", // Centers the image
                                backgroundRepeat: "no-repeat" // Prevents repeating
                            }}>
                        
                    </div>
                    </div>
              </div>
            </section>
    );
};

export default Third;