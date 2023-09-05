import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SecTitle";

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("https://assignment-12-sarver.vercel.app/extra");
      const data = await response.json();
      const sortedClasses = data.sort((a, b) => b.rating - a.rating);
      const popularClasses = sortedClasses.slice(0, 9);
      setPopularClasses(popularClasses);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  return (
    <section className="mb-12">
       <SectionTitle heading="Legacy of Thewitchery " />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div className="p-5 border rounded-lg shadow" key={classItem._id}>
            <img className="w-full h-40 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-2xl font-bold text-red-700">{classItem.name}</h3>
            <h3 className="font-semibold text-white-400">Rating: {classItem.rating}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClass;
