
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div>
      <Helmet>
        <title>HOGWARTS | Home</title>
      </Helmet>
      <button className="theme-toggle btn-danger " onClick={toggleTheme}>
        Toggle Theme
      </button>
      <nav>
        {/* Navigation bar */}
      </nav>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <ExtraSection></ExtraSection>
      <style>
        {`
        .theme-toggle {
          position: fixed;
          top: 10px;
          left: 10px;
          padding: 8px 16px;
          font-size: 14px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        .dark {
          /* Dark theme styles */
          background-color: #10141b
          ;
          color: #fff;
        }

        .light {
          /* Light theme styles */
          background-color: #fff;
          color: #333;
        }
        .button {
            background-color: #514a92;
        }
        `}
      </style>
    </div>
  );
};

export default Home;
