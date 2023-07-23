
import logo from '../../../../public/logo.jpg'

const Footer = () => {
    return (
      <footer className="bg-#10141b outline text-white py-2 m-5 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center  gap-10 ml-52">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 mr-2"
            />
            <h2 className="text-gray-400  text-lg font-semibold">Hogwarts School of <br /> Witchcraft and Wizardry</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
            <div className="md:mr-8">
              <h3 className="text-gray-400 font-semibold mb-2">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Instruments
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-2">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a9 9 0 100 18A9 9 0 0010 1zm0 16a7 7 0 100-14 7 7 0 000 14zm2.707-9.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 101.414-1.414L11.414 10l1.293-1.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-white">
                    +1 (234) 567-890 <br />Send Owls for better <br />communication
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.939 2a1 1 0 00-.765.36L3.25 6H2a1 1 0 00-1 1v6a1 1 0 001 1h1v2a1 1 0 001.707.707l2.5-2.5A2 2 0 008.25 14H15a1 1 0 001-1V3a1 1 0 00-1-1H7.939zM4.293 8H6.25a1 1 0 01.707.293L10 11.586l1.646-1.646a1 1 0 011.414 0L16 11.586V5H4.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a href="mailto:info@singerella.com" className="text-gray-400 hover:text-white">
                    Hogwards@harry.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.828 3.086a1 1 0 01.172 1.32l-2.586 4.5A1 1 0 019 9.5h2.5a1 1 0 01.85 1.53l-2.586 4.5a1 1 0 01-1.702-.232l-1.5-3a1 1 0 111.802-.874L10.4 14H13a1 1 0 01.809.419l3 4a1 1 0 01-1.638 1.163l-2.333-3.11L10.4 18.8A1 1 0 019 18.5H6.5a1 1 0 01-.85-1.53l2.586-4.5a1 1 0 011.638.162l1.5 3a1 1 0 11-1.802.874l-1.5-3.001L6 8.2A1 1 0 017 7.5H4a1 1 0 01-.809-.419l-3-4a1 1 0 111.638-1.163l2.333 3.11L6.6 1.2A1 1 0 017 1.5H9a1 1 0 01.828 1.586L8.242 6l1.586 2.914A1 1 0 019 9.5H6.5H5h-2H1a1 1 0 110-2h1.5H5H6.5H9h.5H13H14.5H16h2a1 1 0 110 2h-1.5H14H12.5H11h-.5H9.828z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-400">Platform 9 3/4, Scotland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 py-4 bg-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hogwarts. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  