import Card from "../components/Home/Card";
import Third from "../components/Home/Third";

const Home = () => {
    return (
      <div>
        <Card/>
        <div className="max-w-6xl mx-auto text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Software Localization Explained
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
            Software localization involves adapting software to meet the linguistic, cultural, and legal norms of a target locale. This process goes beyond mere translation; it includes modifying graphics, layouts, and formatting to align with local legal standards, data compliance, device preferences, and prevailing technology trends. At Transfective, we provide a comprehensive suite of software localization services tailored to global markets. Our offerings include:
            </p>
        </div>
        <Third/>
        <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-700 mt-4 text-lg">
            Additionally, we are equipped to produce all necessary documentation, roadmaps, and auxiliary tools needed for developing software from the ground up. Our team is also skilled in enhancing existing software, adapting it within your framework for any language desired.
            </p>
        </div>
      </div>
    );
  };
  
  export default Home;
  