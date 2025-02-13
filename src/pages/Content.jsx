import First from "../components/Content/First";
import Second from "../components/Content/Second";
const imgurl = import.meta.env.VITE_CNT_CARD_IMG2;
const Content = () => {
    return ( 
        
        <>
        <div className="md:mx-24 ">
            <First/>
        </div> 
        <div className="w-full h-60 bg-gray-100 rounded-xl shadow-md flex items-center justify-self-start pl-36 text-left" 
                            style={{ 
                                backgroundImage: `url(${imgurl})`, 
                                backgroundSize: "cover",         // Adjusts the size (cover ensures it fills the div)
                                backgroundPosition: "50% 26%",     // Positions image (can be 'top', 'bottom', 'left', etc.)
                                backgroundRepeat: "no-repeat"   }}> 
                                <p className="font-bold text-4xl">Our Proven Localization  <br />Methodology</p>    
                            </div>

        <div className="md:mx-24 my-6">
            <Second/>
        </div> 

        <h3 className="inline-block px-4 py-2 border border-green-400 rounded-full bg-gray-100 text-gray-700">
        Through these rigorous methodologies, Transfective guarantees that your software localization projects are executed with precision, ensuring your products resonate with and are accessible to users worldwide.
        </h3>

        </>

    );
  };
  
  export default Content;
  