import  { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from '../../components/SecTitle';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get('instructors.json');
        setInstructors(response.data);
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <div className="container bg-slate-800 pt-10">
      <div className='bg-slate-400'>
      <SectionTitle  heading="Professors of Hogwarts" />
      </div>
     
   
      
      <table className="table text-white text-center text-lg font-semibold">
        <thead>
          <tr className='text-white text-center text-lg font-semibold'>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number of Classes</th>
            <th>Classes</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor._id}>
              <td>
                <img src={instructor.image} alt={instructor.name} className="image" />
              </td>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>{instructor.numClasses || '-'}</td>
              <td>{instructor.classes ? instructor.classes.join(', ') : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstructorsPage;
