import { useState, useEffect } from "react";

const logoUrl = import.meta.env.VITE_LOGO_URL;


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white p-4 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <img src={logoUrl} alt="Logo" className="h-5 w-auto" />

        
        <div className="flex space-x-6">

        <div className="relative dropdown-container">
            <button onClick={() => toggleDropdown("services")}>
              Services ▼
            </button>
            {openDropdown === "services" && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <a href="#design" className="block px-4 py-2 hover:bg-gray-200">Design</a>
                <a href="#development" className="block px-4 py-2 hover:bg-gray-200">Development</a>
                <a href="#seo" className="block px-4 py-2 hover:bg-gray-200">SEO</a>
              </div>
            )}
          </div>

          <div className="relative dropdown-container">
            <button onClick={() => toggleDropdown("more")}>
              Sectors ▼
            </button>
            {openDropdown === "more" && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <a href="#blog" className="block px-4 py-2 hover:bg-gray-200">Blog</a>
                <a href="#careers" className="block px-4 py-2 hover:bg-gray-200">Careers</a>
                <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
              </div>
            )}
          </div>
          
          <div className="flex space-x-6 mt-2">  
            <a href="#home">Our Process</a>
            <a href="#content">Technology</a>
            <a href="#about">Blog</a>
        </div>
        <div className="relative dropdown-container">
            <button >
              Contact
            </button>
        </div>
        <div className="relative dropdown-container">
            <button className="special-button" onClick={() => toggleDropdown("en")}>
              EN ▼
            </button>
            {openDropdown === "en" && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <a href="#blog" className="block px-4 py-2 hover:bg-gray-200">Blog</a>
                <a href="#careers" className="block px-4 py-2 hover:bg-gray-200">Careers</a>
                <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">Contact</a>
              </div>
            )}
          </div>
          


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
