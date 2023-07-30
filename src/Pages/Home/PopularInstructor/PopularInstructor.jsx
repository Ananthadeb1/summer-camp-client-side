import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SecTitle";

const PopularInstructor = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch("https://assignment-12-sarver.vercel.app/instructors");
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
        <SectionTitle heading="Best professor of thewitchery " />
      

      <div className="grid gap-4 md:grid-cols-3">
        {popularClasses.map((classItem) => (
          <div className="p-5 border rounded-lg shadow" key={classItem._id}>
            <img className="w-full h-40 object-cover rounded-md mb-4" src={classItem.image} alt="" />
            <h3 className="text-2xl font-bold text-red-700">{classItem.name}</h3>
            <h3 className="font-semibold text-white-400">Email: {classItem.email}</h3>
            <p className="text-grey-500">Total Classes: {classItem.numClasses}</p>
            <p className="text-grey-500">Classes: {classItem.classes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstructor;
