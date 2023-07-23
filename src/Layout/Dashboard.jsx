import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SecTitle';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
<div>
<SectionTitle heading="Dashboard " />
<div className="flex h-screen overflow-hidden bg-gray-100">
         
      {/* Sidebar */}
      <motion.aside
        className={`flex-shrink-0 w-20 lg:w-64 bg-gray-900 text-white ${
          isSidebarOpen ? '' : 'hidden lg:block'
        }`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Menu</h3>
          <ul>
            <li> <Link to='/'><button className="block text-white text-left mb-2">Admin Home</button></Link>
             
            </li>
            <li>
              <button className="block text-white text-left mb-2">Admin Details</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">All Users</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">Classes</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">Instructors</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">Add Class</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">Price</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">User Home</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">User Details</button>
            </li>
            <li>
                <Link to=''></Link>
              <button className="block text-white text-left mb-2">User Cart</button>
            </li>
            <li>
              <button className="block text-white text-left mb-2">Payment</button>
            </li>
          </ul>
        </div>
      </motion.aside>

      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <motion.header
          className="py-4 px-6 bg-gray-200 flex items-center justify-between"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* Header Content */}
          <button
            className="text-gray-900 focus:outline-none lg:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Additional header content */}
        </motion.header>

        {/* Body */}
        <motion.main
          className="flex-1 overflow-y-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* Body content */}
          <div className="container mx-auto py-6">
            {/* Table of classes */}
            <table className="min-w-full divide-y divide-gray-200">
              {/* Table headers */}
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Price
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Table rows */}
                <tr>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Class name */}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Image */}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Price */}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    {/* Total Price */}
                  </td>
                </tr>
                {/* Add more table rows as needed */}
              </tbody>
            </table>
          </div>
        </motion.main>
      </div>
    </div>
</div>
  );
};

export default Dashboard;
