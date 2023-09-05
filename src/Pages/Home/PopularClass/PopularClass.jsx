import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SecTitle";

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("https://assignment-12-sarver.vercel.app/classes");
      const data = await response.json();
      const sortedClasses = data.sort((a, b) => b.students - a.students);
      const popularClasses = sortedClasses.slice(0, 6);
      setPopularClasses(popularClasses);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  return (
    <section className="mb-12">
      <SectionTitle heading="Popular Magical Classes Thewitchery offer " />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div className="p-5 border rounded-lg shadow" key={classItem._id}>
            <img className="w-full h-40 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-2xl font-bold text-red-700">{classItem.name}</h3>
            <h3 className="font-semibold text-white-400">Enrolled Students: {classItem.students}</h3>
            <p className="text-grey-500">Available Seats: {classItem.availableSeats}</p>
            <p className="text-grey-500">Course Fee: ${classItem.price}</p>
            <p className="text-white-500">Professor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularClass;
